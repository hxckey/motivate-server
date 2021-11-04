const express = require('express');
const router = express.Router();

const Quote = require('../models/Quote')

// quotes index route
router.get('/', async (req, res) => {
    try {
        const quotes = await Quote.all
        res.json({quotes})
    } catch(err) {
        res.status(500).json({err})
    }
})

// quotes show route
router.get('/:id', async (req, res) => {
    try {
        const quote = await Quote.findById(req.params.id)
        res.json(quote)
    } catch(err) {
        res.status(404).json({err})
    }
})

// IMPLEMENT CREATE QUOTE FUNCTIONALITY LATER STAGE
// router.post('/', async (req, res) => {
//     try {
//         const quote = await Quote.create(req.body.quote, req.body.author)
//         res.json(quote)
//     } catch(err) {
//         res.status(404).json({err})
//     }
// })




module.exports = router;