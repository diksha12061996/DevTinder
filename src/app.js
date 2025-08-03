const express = require('express');
const app = express();
const connectDB = require("./config/database")
const User = require("./models/user");
app.use(express.json());

app.post("/signUp", async (req, res) => {
    const user = new User(req.body
        //     {
        //     firstName: "Deeksha",
        //     lastName: "Rajput",
        //     emailId: "deeksha@gmail.com",
        //     password: "123433"
        // }
    )
    try {
        await user.save();
        res.send("User added successfully")
    }
    catch (err) {
        res.status(400).send("some error" + err.message)
    }
});
app.get('/user', async (req, res) => {
    try {
        const userEmailId = req.body.emailId;
        console.log(req.body.emailId)
        const users = await User.findOne({ emailId: userEmailId });
        if (users.length === 0) {
            res.status(400).send("User not found")
        }
        else {
            res.send(users);
        }
    }
    catch (err) {
        res.status(400).send("Something went wrong" + err.message)
    }
});
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    }
    catch (err) {
        res.status(400).send("something went wrong")
    }
})
app.get("/findById", async (req, res) => {
    try {
        const users = await User.findById({ _id: req.body.Id });
        res.send(users);
    }
    catch (err) {
        res.status(400).send("something went wrong!!!" + err.message)
    }
});
app.delete("/user", async (req, res) => {
    try {
        const userId = req.body.userId;
        console.log(userId);
        const deleteUser = await User.findByIdAndDelete(userId);
        res.send("User deleted successfully.")
    }
    catch (err) {
        res.status(400).send("Something went wrong.")
    }
});
app.patch("/user", async (req, res) => {
    try {
        const userId = req.body.userId;
        const data = req.body;
         await User.findByIdAndUpdate(userId,data)
         res.send("user updated successfully.")
    }
    catch (err) {
        res.status(400).send("something went wrong")
    }
});
connectDB().then(() => {
    console.log("Connected");
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });

}).catch((err) => {
    console.log("not connected");
});

