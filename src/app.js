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

app.listen(3000, () => {
    console.log('listening on 3000')
});
