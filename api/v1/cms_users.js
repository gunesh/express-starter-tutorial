let models = require('../../models');
let errorCodes = require('../../lib/utils/error_codes.json');
let products = models.products;
const axios = require('axios');
let JWT = require('../../lib/utils/jwt');
const { find } = require("../../helpers");

class Users {

  // get All Users
  async getAllUsers(req, res) {
    // try {
    //   const response = await axios.get(`https://reqres.in/api/users?page=1&per_page=20`);
    //   res.status(200).send({ status: 200, ...response.data })
    // } catch (error) {
    //   events.emit('notify', error);
    //   res.status(200).send({ status: 400 })
    // }

    try {
      let response = await products.find({ product_id:61 });
      return res.status(200).send({ status: 200, response });
    } catch (e) {
      res.status(400).send({ status: 400, message: e.message });
    }

    // const todos = await products.find({  });
    // if (todos) {
    //   res.status(200).json(todos);
    // } else {
    //   res.status(404);
    //   throw new Error('No items!');
    // }

  }

  // export const getAllTodo = asyncHandler(async (req, res) => {
  //   const todos = await Todo.find({ user: req.user._id });
  //   if (todos) {
  //     res.status(200).json(todos);
  //   } else {
  //     res.status(404);
  //     throw new Error('No items!');
  //   }
  // });


  // async viewUser(req, res) {
  //   try {
  //     const response = await axios.get(`https://reqres.in/api/users/${req.params.id}`);
  //     res.status(200).send({ status: 200, id: req.params.id, ...response.data })
  //   } catch (error) {
  //     events.emit('notify', error);
  //     res.status(200).send({ status: 400 })
  //   }
  // }

  // async createUser(req, res) {
  //   try {
  //     const response = await axios.post(`https://reqres.in/api/users`, {
  //       "name": "morpheus",
  //       "job": "leader"
  //     });
  //     res.status(200).send({ status: 200, ...response.data, msg: 'User Created' })
  //   } catch (error) {
  //     events.emit('notify', error);
  //     res.status(200).send({ status: 400 })
  //   }
  // }
  // async updateUser(req, res) {
  //   try {
  //     const response = await axios.put(`https://reqres.in/api/user/${req.params.id}`, {
  //       "name": "morpheus",
  //       "job": "zion resident"
  //     });
  //     res.status(200).send({ status: 200, id: req.params.id, ...response.data, msg: 'User Updated' })
  //   } catch (error) {
  //     events.emit('notify', error);
  //     res.status(200).send({ status: 400 })
  //   }
  // }
  // async deleteUser(req, res) {
  //   try {
  //     const response = await axios.delete(`https://reqres.in/api/users/${req.params.id}`);
  //     res.status(200).send({ status: 200, id: req.params.id, ...response, msg: 'User Deleted' })
  //   } catch (error) {
  //     events.emit('notify', error);
  //     res.status(200).send({ status: 400 })
  //   }
  // }

  // async register(req, res) {
  //   try {
  //     const response = await axios.post(`https://reqres.in/api/register`, {
  //       "email": "eve.holt@reqres.in",
  //       "password": "pistol"
  //     });
  //     res.status(200).send({ status: 200, ...response.data, msg: 'User Register' })
  //   } catch (error) {
  //     events.emit('notify', error);
  //     res.status(200).send({ status: 400 })
  //   }
  // }

  // async login(req, res) {
  //   try {
  //     const response = await axios.post(`https://reqres.in/api/login`, {
  //       "email": "eve.holt@reqres.in",
  //       "password": "cityslicka"
  //     });
  //     const token = JWT.createJWTToken({
  //       email: 'eve.holt@reqres.in',
  //       password: 'cityslicka',
  //       token: response.data.token
  //     })
  //     res.set({
  //       'token': token
  //     })
  //     res.status(200).send({ status: 200, ...response.data, msg: 'User Login' })
  //   } catch (error) {
  //     events.emit('notify', error);
  //     res.status(200).send({ status: 400 })
  //   }
  // }

}
module.exports = new Users();
