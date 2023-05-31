const { Users } = require('../models');


const userController = {

     //Method to create a new User
     createUser: async (req,res) => {
        try{
            const createUser = await Users.create(req.body);
            console.log(createUser)
            res.status(200).json(createUser);
        }catch(err){
            res.status(500).json({err, message: 'The user is already registered'});
        }
     },
}

module.exports = userController;