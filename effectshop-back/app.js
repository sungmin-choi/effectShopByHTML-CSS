const express = require('express');
const PORT = 3065;
const app = express();
const effectRouter = require('./routers/effect');
const userRouter = require('./routers/user');
const db = require('./models');

db.sequelize
.sync()
.then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);


app.use('/effect',effectRouter);
app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`server on! at http://localhost:${PORT}`);
});