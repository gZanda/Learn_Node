// API Endpoints Module

const express = require('express');
const router = express.Router();
const Task = require('./database/models/taskModel');
router.use(express.json());

// Index Route
router.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

// Create Task Fixed
router.post('/createTask1/', async (req, res) => {
    try {
        const task = await Task.create({
            description: "saas",
            completed: false,
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Create Task Using Request Body
router.post('/createTask2/', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Print Request Body
router.post('/createTask3/', async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;