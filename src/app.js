const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    res.send({ firstName: "Deeksha", LastName: "Rajput" })
});
app.post('/user', (req, res) => {
    res.send("save successfully")
});
app.delete('/user', (req, res) => {
    res.send("Delete successfully")
});

app.use('/hello', (req, res) => {
    res.send("Hello ")
});
app.use('/test', (req, res) => {
    res.send("test from server")
});
app.use("/RouteHandler",(req,res,next)=>{
    res.send("Req Handler"); //only first handler will be written because of order of res.send() and if we do not retrun the handler then it will not go to the next handler to go to the second handler use next
    next();
},
(req,res)=>{
    res.send("Req Handler2");
});

app.use("/",(err,req,res,next)=>{
if(err){
    res.status(500).send("Something went wrong");
}
})
app.listen(3000, () => {
    console.log('listening on 3000')
});
