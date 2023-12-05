// Core Node Module

const express = require('express');
const router = require('./router');
const database = require('./database/db');
const taskModel = require('./database/models/taskModel');
router.use(express.json());

const app = express();
app.use(router);
database.sync();

module.exports = app;