// courseController.js
const db = require('../models');

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await db.Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await db.Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await db.Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }
    await course.update(req.body);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const course = await db.Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }
    await course.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
