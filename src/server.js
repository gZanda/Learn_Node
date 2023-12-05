// Start Server and Application Module

const app = require('./app')
require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(process.env.PORT, () => console.log(`Server running on port ${PORT}`));