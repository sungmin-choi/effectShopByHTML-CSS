const express = require('express');
const bcrypt = require('bcrypt');
const {User,Effect} = require('../models')
const router = express.Router();
const passport = require('passport');
const {isLoggedIn,isNotLoggedIn} = require('./middlewares');

router.post('/local',isNotLoggedIn, (req,res,next)=>{
 passport.authenticate('local',(err,user,info)=>{
    if(err){
        console.error(err);
        return next(err);
    }
    if(info){
        return res.status(401).send(info.reason);
    }
    return req.login(user, async(loginErr)=>{
        if(loginErr){
            console.error(loginErr);
            return next(loginErr);
        }
        const userWithoutPassword = await User.findOne({
            where:{ id:user.id},
            attributes:['id','nickname','email'],
            include:[{
                model: Effect,
                attributes:['id','title','html','css'],
                include:[{
                    model: User,
                    as: 'Likers'
                },{
                    model: User,
                    attributes: ['id','nickname']
                }]
            }]
        })
        return res.status(200).json(userWithoutPassword);
    })
 })(req,res,next);   
});

router.get('/github',passport.authenticate('github'));
router.get('/github/callback',passport.authenticate('github',{successRedirect:process.env.CLIENT_URL}));


router.post('/logout',isLoggedIn,(req,res,next)=>{
    req.logout();
    req.session.destroy();
    res.status(200).send('ok');
})

router.get('/',async(req,res,next)=>{
    try{
        if(req.user){
            const user = await User.findOne({
                where:{id:req.user.id},
                attributes:['id','nickname','email'],
                include:[{
                    model: Effect,
                    attributes:['id','title','html','css'],
                    include:[{
                        model: User,
                        as: 'Likers'
                    },{
                        model: User,
                        attributes: ['id','nickname']
                    }]
                }]
            });
            return res.status(200).json(user);
        }else{
            return res.status(200).json(null);
        }
    }catch(err){
        console.error(err);
        next(err);
    }
})


router.post('/', isNotLoggedIn,async(req,res,next)=>{
    try{
    const exUser = await User.findOne({
        where:{
            email: req.body.email,
        }
    });

    if(exUser){
        return res.status(403).send('이미 사용중인 이메일입니다.');
    }

    const hashedPassword = await bcrypt.hash(req.body.password,10);
    await User.create({
        email:req.body.email,
        nickname:req.body.nickname,
        password:hashedPassword
    })
    res.status(201).send('ok');
    }catch(error){
        console.error(error);
        next(error);
    }

});





module.exports = router;