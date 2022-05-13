const express = require('express');
const router = express.Router();


const Students = require('../models/students');


router.get('/', async (req, res) => {
  try {
    const students = await Students.find({});
    res.send({ students })
  } catch (err) {
    res.status(400).send({ error: err });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    res.send({ student });
  } catch (err) {
    res.status(404).send({ message: 'Student not found!' });
  }
});


router.post('/', async (req, res) => {
  try {
    const newStudent = await Students.create({ name: req.body.name, rollnumber: req.body.rollnumber, ut1marks: req.body.ut1marks, ut2marks: req.body.ut2marks, ut3marks: req.body.ut3marks, assignment1: req.body.assignment1, assignment2: req.body.assignment2, assignment3: req.body.assignment3, tutorial1: req.body.tutorial1, tutorial2: req.body.tutorial2, tutorial3: req.body.tutorial3, attendance: req.body.attendance });
    res.send({ newStudent });
  } catch (err) {
    res.status(400).send({ error: err });
  }

});


router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'The student was updated' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const removeStudent = await Students.findByIdAndRemove(req.params.id);
    res.send({ message: 'The student was removed' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;