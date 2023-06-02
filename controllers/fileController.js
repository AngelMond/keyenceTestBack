const { UsersCheck } = require('../models');
require('dotenv').config();
const jwt = require('jsonwebtoken');


const loadfileController = {

    createUserCheck: async (req, res) => {
      try {

        const createUsersCheck = await UsersCheck.create(req.body);
        res.status(200).json(createUsersCheck);
      } catch (error) {
        res.status(400).json({error, data: {isSuccessful : false, message: 'Error to load'}})
      }
    },
    

    verifyToken: async (req, res, next) => {
        //Get token from headers
        const token = req.headers.authorization;
        if (token) {
          // Check and decode token
          jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
            if (error) {
              //If not valid
              return res.status(200).json({ mensaje: 'Token not valid' });

            } else {
              req.usuario = decoded;
              next();
            }
          });
        } else {
          // No token provided
          return res.status(401).json({ mensaje: 'Token no valid' });
        }
      },
}

module.exports = loadfileController;