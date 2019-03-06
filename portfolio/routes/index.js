// const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoute');

//API Routes
router.use('/apiRoute', apiRoutes);

//no API hits, sent to React app... 





module.exports = router;