const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('server is up and running in the back end uwu');
})

module.exports = router;