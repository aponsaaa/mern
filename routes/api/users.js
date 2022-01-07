const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route   POST api/Users
// @desc    Register
// @access  Public
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('Users route')
});


module.exports = router;