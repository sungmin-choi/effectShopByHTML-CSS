const express = require('express');
const PORT = 3065;
const app = express();
const cors = require('cors');
const effectRouter = require('./routers/effect');
const userRouter = require('./routers/user');
const effectsRouter = require('./routers/effects');
const db = require('./models');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const passport = require('passport');
const passportConfig = require('./passport');
const morgan = require('morgan');
const hpp = require('hpp');
const helmet = require('helmet');
db.sequelize
.sync()
.then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);

passportConfig();

dotenv.config();

app.use(cookieParser(process.env.EFFECTSHOP_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret:process.env.EFFECTSHOP_SECRET,
    cookie:{
      httpOnly:true, //script 로 쿠키 접근 불가.
      secure: process.env.NODE_ENV === 'production' && true, //https 일떄만 쿠키 공유
      domain:process.env.NODE_ENV === 'production' && '.effectshop-htmlcss.ml'
    }
  })
)
if(process.env.NODE_ENV === 'production'){
  app.set('trust proxy', 1); //프록시 뒤에 express 사용할 때 해줘야하는 설정.
  app.use(morgan('combined'));
  app.use(hpp()); //보안에 도움되는 라이브러리
  app.use(helmet());
  app.use(cors({
    origin:["https://effectshop-htmlcss.ml","https://www.effectshop-htmlcss.ml"],
    credentials:true,
  }));
}else{
  app.use(morgan('dev'));
  app.use(cors({
    origin:true,
    credentials:true,
  }));
}


app.use(passport.initialize()); // 패스포트 설정 미들웨어에 추가.
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
  res.send('hello express');
})
app.use('/effects' ,effectsRouter);
app.use('/effect',effectRouter);
app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`server on! at http://localhost:${PORT}`);
});