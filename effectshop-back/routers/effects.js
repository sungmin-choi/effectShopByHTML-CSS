const express = require('express');
const router = express.Router();
const {Effect,User} = require('../models');

router.get('/',async(req,res,next)=>{
    try {
        const effects = await Effect.findAll({
            limit:4,
            order:[['createdAt','DESC']],
            atrributes:['id','title','html','css'],
            include:[{
                model: User,
                as: 'Likers',
                attributes:['id'],
            },{
                model: User,
                attributes: ['id','nickname']
            }]
        })
        return res.status(200).json(effects);

    } catch (error) {
        console.error(error);
        next(error);
    }


})



module.exports = router;