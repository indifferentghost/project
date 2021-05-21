const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  compute_max: {
    type: String,
    length: "int"
  },
  comp_result: {
    type: String,
    answer: "bool"
  }
})

module.exports = mongoose.model("Post", postSchema)