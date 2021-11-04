const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const quoteRoutes = require('./controllers/quotes')
server.use('/quotes', quoteRoutes)

// Root route
server.get('/', (req, res) => res.send('Looking for motivation? You\'re in the right place!'))

module.exports = server