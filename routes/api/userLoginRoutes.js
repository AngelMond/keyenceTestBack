const router = require('express').Router();

const userLoginController = require('../../controllers/userLoginController');

//User login routes
router.post('/login', userLoginController.createUser); //create controller



module.exports = router ;