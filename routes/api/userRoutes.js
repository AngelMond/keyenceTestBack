const router = require('express').Router();

const userController = require('../../controllers/userController');

//User routes
router.post('/signup', userController.createUser); //signup controller
router.post('/login', userController.getUser); //login controller



module.exports = router ;