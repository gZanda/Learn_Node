const Task = require('../database/models/taskModel');

const getAll = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        return res.status(200).json(tasks);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = { getAll };