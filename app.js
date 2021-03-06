const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      bcrypt = require("bcrypt-nodejs"),
      cors = require("cors"),
      moment = require("moment-timezone"),
      rrule = require("rrule"),
      jwt = require("jsonwebtoken"),
      dotenv = require("dotenv"),
      _ = require("lodash"),
      userRoute = require("./modules/user/userRoute"),
      eventRoute = require("./modules/event/eventRoute")

dotenv.config();
mongoose.connect("mongodb://localhost:" + process.env.DB_PORT + "/EventReminder", {useNewUrlParser: true});
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.use(bodyParser.json());



app.use('/api/user', userRoute);

app.use('/api/event', eventRoute);


app.listen(3000, () => {
    console.log("Server Started at" + 3000);
    
})