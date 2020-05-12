const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe"
    }],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now
    }

});

Game = mongoose.model("Game", GameSchema);
module.exports = Game;