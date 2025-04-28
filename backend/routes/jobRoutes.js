const express = require('express');
const Job = require('../models/job');
const multer = require('multer');
const path = require('path');

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Filename is generated using the current timestamp
  }
});

const upload = multer({ storage });

const router = express.Router();

// POST route for submitting job applications
router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const newJob = new Job({
      name: req.body.name,
      email: req.body.email,
      resume: req.file.path // Store the resume file path in the database
    });

    await newJob.save(); // Save the job application to MongoDB
    res.json({ message: 'Job application submitted successfully!', job: newJob });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit job application', error: err });
  }
});
// GET route for fetching all job applications
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch job applications', error: err });
  }
});


module.exports = router;
