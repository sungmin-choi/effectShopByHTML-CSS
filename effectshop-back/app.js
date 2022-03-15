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

app.use(passport.initialize()); // 패스포트 설정 미들웨어에 추가.
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin:process.env.CLIENT_URL,
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