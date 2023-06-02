const router = require('express').Router();
const loadfileController = require('../../controllers/fileController');

//User routes
router.get('/loadfile'); //
router.post('/loadfile', loadfileController.verifyToken, loadfileController.createUserCheck); //




module.exports = router ;