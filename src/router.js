// API Endpoints Module

const express = require('express');
const router = express.Router();
const Task = require('./database/models/taskModel');
const taskController = require('./controller/taskController');
router.use(express.json());

//  Controller getAll
router.get('/getAllTasksController/', taskController.getAll);

// Index Route
router.get('/', (req, res) => {
    res.status(200).send('Yeeeppiiiii it is Working!');
});

// Create Task
router.post('/createTask/', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get All Tasks
router.get('/getAllTasks/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// --------------------------------------------- Tests ---------------------------------------------

// Create Task Fixed
router.post('/createTest/', async (req, res) => {
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

// Print Request Body
router.post('/bodyTest/', async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;