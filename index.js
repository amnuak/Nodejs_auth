const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();


// const userAuth = require("./middlewares/userAuth");
const session = require('express-session');
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'amit',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(cookieParser())
app.use(express.urlencoded({
    extended: true
}));



app.set("view engine", "ejs");
app.set("views", "views");

dbDriver = " mongodb+srv://Akcdb:NFd3tIRMsMzVemf7@cluster0.sa3z9gc.mongodb.net/?retryWrites=true&w=auth";


// app.use(userAuth.authJwt);


port = process.env.PORT || 1002;

mongoose.connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {
    app.listen(port, () => {
        console.log("DB Connected...");
        console.log(`App Running On http://localhost:${port}`);
    })
}).catch(err => {
    console.log(err);
})