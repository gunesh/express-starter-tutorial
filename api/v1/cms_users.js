// let models = require('../../models');
let errorCodes = require('../../lib/v1/utils/error_codes.json');
// let users = models.cmsUsers;
const axios = require('axios');
let JWT = require('../../lib/v1/utils/jwt');


class Users {

    // get All Users
    async getAllUsers(req, res) {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${req.params.page}&per_page=${req.params.per_page}`);
            res.status(200).send({ status: 200, ...response.data })
        } catch (error) {
            events.emit('notify', error);
            res.status(200).send({ status: 400 })
        }
    }

    async viewUser(req, res) {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${req.params.id}`);
            res.status(200).send({ status: 200, id: req.params.id, ...response.data })
        } catch (error) {
            events.emit('notify', error);
            res.status(200).send({ status: 400 })
        }
    }

    async createUser(req, res) {
        try {
            const response = await axios.post(`https://reqres.in/api/users`, {
                "name": "morpheus",
                "job": "leader"
            });
            res.status(200).send({ status: 200, ...response.data, msg: 'User Created' })
        } catch (error) {
            events.emit('notify', error);
            res.status(200).send({ status: 400 })
        }
    }
    async updateUser(req, res) {
        try {
            const response = await axios.put(`https://reqres.in/api/user/${req.params.id}`, {
                "name": "morpheus",
                "job": "zion resident"
            });
            res.status(200).send({ status: 200, id: req.params.id, ...response.data, msg: 'User Updated' })
        } catch (error) {
            events.emit('notify', error);
            res.status(200).send({ status: 400 })
        }
    }
    async deleteUser(req, res) {
        try {
            const response = await axios.delete(`https://reqres.in/api/users/${req.params.id}`);
            res.status(200).send({ status: 200, id: req.params.id, ...response, msg: 'User Deleted' })
        } catch (error) {
            events.emit('notify', error);
            res.status(200).send({ status: 400 })
        }
    }

    async register(req, res) {
        try {
            const response = await axios.post(`https://reqres.in/api/register`, {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            });
            res.status(200).send({ status: 200, ...response.data, msg: 'User Register' })
        } catch (error) {
            events.emit('notify', error);
            res.status(200).send({ status: 400 })
        }
    }

    async login(req, res) {
        try {
            const response = await axios.post(`https://reqres.in/api/login`, {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            });
            const token = JWT.createJWTToken({
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
                token: response.data.token
            })
            res.set({
                'token': token
            })
            res.status(200).send({ status: 200, ...response.data, msg: 'User Login' })
        } catch (error) {
            events.emit('notify', error);
            res.status(200).send({ status: 400 })
        }
    }

}
module.exports = new Users();
