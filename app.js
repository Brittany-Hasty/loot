const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

require("./routes/api/upload")(app);

const users = require("./routes/api/users");
const games = require("./routes/api/games");
const items = require("./routes/api/items");
const recipes = require("./routes/api/recipes");

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


app.use(passport.initialize())
require('./config/passport')(passport)

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/games", games);
app.use("/api/items", items);
app.use("/api/recipes", recipes)


app.get("/", (req, res) => res.send("LOOTTTTTT"));
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Server is running on port ${port}`));