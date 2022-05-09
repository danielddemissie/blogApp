const { Router } = require('express');
const route = Router();
const userControllers = require('../controllers/user');

const userRoutes = {
  userR: route.post('/user/signup', userControllers.addUser),
  userR: route.post('/user/signin', userControllers.signinUser),
  userR: route.put('/user/:uuid', userControllers.updateUser),
  userR: route.delete('/user/:uuid', userControllers.deleteUser),
  userR: route.get('/user/allusers', userControllers.findAllUser),
  userR: route.get('/user/:uuid', userControllers.findUser),
};

module.exports = userRoutes;
