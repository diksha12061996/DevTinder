const express = require('express');
const app = express();
const connectDB = require("./config/database")
const User = require("./models/user")

app.post("/signUp", async (req, res) => {
    const user = new User({
        firstName: "Deeksha",
        lastName: "Rajput",
        emailId: "deeksha@gmail.com",
        password: "123433"
    })
    try {
        await user.save();
        res.send("User added successfully")
    }
    catch (err) {
        res.status(400).send("some error" + err.message)
    }
})

connectDB().then(() => {
    console.log("Connected");
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });

}).catch((err) => {
    console.log("not connected");
});

