const express = require('express');
const PORT = 3065;
const app = express();
const cors = require('cors');
const effectRouter = require('./routers/effect');
const userRouter = require('./routers/user');
const db = require('./models');

db.sequelize
.sync()
.then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin:'*',
  credentials:false,
}));
app.use('/effect',effectRouter);
app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`server on! at http://localhost:${PORT}`);
});