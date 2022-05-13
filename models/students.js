const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  rollnumber: {
    type: Number,
    min: 1
    
  },
  ut1marks: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  ut2marks: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  ut3marks: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  assignment1: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  assignment2: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  assignment3: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  tutorial1: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  tutorial2: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  tutorial3: {
    type: Number,
    required: true,
    min: 0,
    max: 51
  },
  attendance: {
    type: Number,
    required: true
    
  }
});

module.exports = mongoose.model('students', studentSchema);



