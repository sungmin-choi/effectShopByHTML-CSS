const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('./middlewares');
const {Effect,User} = require('../models');
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

router.delete('/:id', (req,res)=>{

});



module.exports = router;