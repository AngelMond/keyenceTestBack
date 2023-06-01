const router = require('express').Router();

const userController = require('../../controllers/userController');

//User login routes
router.post('/signup', userController.createUser); //create controller
router.post('/login', userController.getUser); //get user controller



module.exports = router ;