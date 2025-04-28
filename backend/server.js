const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // To serve uploaded files

mongoose.connect('mongodb+srv://admin:admin123@student.ipnqicb.mongodb.net/?retryWrites=true&w=majority&appName=student')
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.error(err));


// Routes
app.use('/api/jobs', require('./routes/jobRoutes'));

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
