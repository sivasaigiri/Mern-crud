const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  resume: { type: String, required: true }, // This will store the file path of the resume
});

module.exports = mongoose.model('Job', jobSchema);
