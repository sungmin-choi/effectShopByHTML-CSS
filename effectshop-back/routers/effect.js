const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('./middlewares');
const {Effect,User} = require('../models');
router.post('/', isLoggedIn, async(req,res,next)=>{
    try{
        const newEffect = await Effect.create({
            title: req.body.title,
            html: req.body.html,
            css: req.body.css,
            UserId:req.user.id
        });

        const fullEffect = await Effect.findOne({
            where:{
                id:newEffect.id
            },
            include:[{
                model:User
            },{
                model:User,
                as: 'Likers'
            }]
        })
        return res.status(201).json(fullEffect);
    }catch(error){
        console.error(error);
        next(error);
    }
});

router.get('/:effectId',async(req,res,next)=>{
    try{
        const effectDetail = await Effect.findOne({
            where:{
                id: req.params.effectId,
            }
        });
        if(!effectDetail){
            return res.status(403).send('없는 이펙트입니다.').redirect('http://localhost:3000');
        }
        const fullEffect = await Effect.findOne({
            where:{
                id: effectDetail.id
            },
            attributes:['id','title','html','css'],
            include:[{
                model: User,
                as: 'Likers',
                attributes: ['id']
            },{
                model: User,
                attributes: ['id','nickname']
            }]
        });
        return res.status(200).json(fullEffect);
    }catch(error){
        console.error(error);
        next(error);
    }
})

router.delete('/:effectId', isLoggedIn, async(req,res,next)=>{
    try{
        const effect = await Effect.destroy({
            where:{
                id: req.params.effectId,
                UserId: req.user.id,
            }
        })
        if(!effect){
            return res.status(403).send("이펙트를 삭제할 수 없습니다.");
        }
        res.status(201).json({EffectId:Number(req.params.effectId)});
    }catch(error){
        console.error(error);
        next(error);
    }
});



module.exports = router;