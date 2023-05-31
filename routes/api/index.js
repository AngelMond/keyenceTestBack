const router = require('express').Router();

const userLoginRoutes = require('./userLoginRoutes');

//Routes
router.use('/users', userLoginRoutes);



module.exports = router;