const passport = require('passport');
const local = require('./local');
const github = require('./github');
const {User} = require('../models');

module.exports = () =>{
    passport.serializeUser((user,done)=>{
        console.log('----------------------------serializeUser---------------------');
        done(null, user.id);
    });

    passport.deserializeUser(async(id, done)=>{
        console.log('----------------------------deserializeUser---------------------');
        try{
            const user = await User.findOne({
                where:{
                    id,
                },
            });
            done(null, user);
        }catch(error){
            console.error(error);
            done(error);
        }
    });
    github();
    local();
};