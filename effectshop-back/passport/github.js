const passport = require('passport');
const {Strategy: GithubStrategy} = require('passport-github');
const {User} = require('../models');

module.exports = ()=>{
    passport.use(new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRETS,
        callbackURL:`${process.env.LOCAL_URL}/user/github/callback`
    },async (accessToken, refreshToken, profile, done)=>{
        try{
            const { name, id, email } = profile._json;
            const user = await User.findOne({
                where:{
                    githubId:id,
                }
            })
            if(!user){
                const newUser = await User.create({
                    email:email?email:null,
                    githubId:id,
                    nickname:name,
                    password:null,
                })
                return done(null,newUser);
            }
            return done(null,user);
        }catch(error){
            console.error(error);
            return done(error);
        }
    }
    ))
}