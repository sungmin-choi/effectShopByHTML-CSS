const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('./middlewares');
const {Effect,User} = require('../models');
const effect = require('../models/effect');
router.post('/', isLoggedIn, async(req,res,next)=>{
    try{
        const effect = await Effect.create({
            title: req.body.title,
            html: req.body.html,
            css: req.body.css,
            UserId:req.user.id
        });

        const fullEffect = await Effect.findOne({
            where:{
                id:effect.id
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