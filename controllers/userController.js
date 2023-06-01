const { User } = require('../models');


const userController = {

    //Method to create a new User
    createUser: async (req, res) => {
        try {
            const createUser = await User.create(req.body);
            console.log(createUser)
            res.status(200).json(createUser);
        } catch (err) {
            res.status(500).json({ err, message: 'The user is already registered' });
        }
    },

    //Method to search for a single User
    getUser: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Verify if user exists
            const response = await User.findOne({ username });
        
            if (response === null) {
               return  res.status(400).json({ message: 'User or password not valid' });
            } 

            // Verifica la contraseña utilizando el método comparePassword
            const isValidPassword = await response.comparePassword(password);

            if (!isValidPassword) {
                return res.status(400).json({ message: 'User or password not valid'});
            } 

            res.status(200).json({message: "login successful"})
        } catch (err) {
            res.status(500).json(err);
        }
    },
}

module.exports = userController;