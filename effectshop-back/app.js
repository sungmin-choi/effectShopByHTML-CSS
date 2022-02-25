const express = require('express');
const PORT = 3065;
const app = express();
const effectRouter = require('./routers/effect');
const userRouter = require('./routers/user');

app.use('/effect',effectRouter);
app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`server on! http://localhost:${PORT}`);
});