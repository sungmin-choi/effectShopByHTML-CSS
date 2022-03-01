const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');
const {User} = require('../models');
const bcrypt = require('bcrypt');
module.exports = () =>{
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    }, async (email, password, done)=>{
        try{
            const user = await User.findOne({
                where:{
                    email
                }
            });
            if(!user){
                return done(null,false,{reason:'존재하지 않는 이메일입니다.'});
            }
            const compare = await bcrypt.compare(password,user.password);
            if(compare){
                return done(null,user);
            }
            return done(null,false,{reason:'비밀번호가 일치하지 않습니다.'});
        }catch(error){
            console.error(error);
            return done(error);
        }
    }))
};