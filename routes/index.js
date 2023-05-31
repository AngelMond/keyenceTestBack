const router = require('express').Router();

const apiRoutes = require('./api')

router.use('/api', apiRoutes);

router.use('*', (req,res) => {
    try{
        res.status(300).send({message: `The source doesn't exist`});
    }catch(err){
        res.status(500).send({message: 'Unable to find the searched source'});
    }
});

module.exports = router;