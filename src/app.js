const express = require('express');
const app = express();
require("./config/database") 

app.listen(3000, () => {
    console.log('listening on 3000')
});
