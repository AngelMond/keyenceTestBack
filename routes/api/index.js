const router = require('express').Router();

const userRoutes = require('./userRoutes');

//Routes
router.use('/users', userRoutes);



module.exports = router;