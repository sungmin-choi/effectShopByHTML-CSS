const express = require('express');
const router = express.Router();
const {Effect,User} = require('../models');
const {Op} = require('sequelize');
router.get('/',async(req,res,next)=>{
    try {
        const where ={};
        if(Number(req.query.lastId)){
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

router.get('/first',async(req,res,next)=>{
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



router.get('/search',async(req,res,next)=>{
    try{
        const where = {};
        if(req.query.keyword){
            where.title ={
                [Op.like]: "%" + req.query.keyword + "%"
            }
            const effects = await Effect.findAll({
                where,
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
        };
        return res.status(200).json([]);

    }catch(error){
        console.error(error);
        next(error);
    }
})


module.exports = router;