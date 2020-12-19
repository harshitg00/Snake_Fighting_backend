const mongoose =  require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("Player", PlayerSchema);