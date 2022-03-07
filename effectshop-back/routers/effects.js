const express = require('express');
const router = express.Router();
const {Effect,User} = require('../models');
const {Op} = require('sequelize');
router.get('/',async(req,res,next)=>{
    try {
        const where ={};
        console.log(req.query.lastId)
        if(Number(req.query.lastId)){
            console.log(req.query.lastId)
            where.id = {[Op.lt] : Number(req.query.lastId)}
        }
        const effects = await Effect.findAll({
            where,
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