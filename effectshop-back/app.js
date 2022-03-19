const express = require('express');
const PORT = 80;
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
  })
)
if(process.env.NODE_ENV === 'production'){
  app.use(morgan('combined'));
  app.use(hpp()); //보안에 도움되는 라이브러리
  app.use(helmet());
}else{
  app.use(morgan('dev'));
}


app.use(passport.initialize()); // 패스포트 설정 미들웨어에 추가.
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin:["http://localhost:3000","http://54.180.81.148"],
  credentials:true,
}));
app.get('/',(req,res)=>{
  res.send('hello express');
})
app.use('/effects' ,effectsRouter);
app.use('/effect',effectRouter);
app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`server on! at http://localhost:${PORT}`);
});