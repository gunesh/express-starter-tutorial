'use strict';
const userAPI = require('../api/v1/cms_users');
let JWT = require('../lib/utils/jwt');

module.exports = function (app) {
    // app.post('/api/v1/user/register', userAPI.register);
    // app.post('/api/v1/user/login', userAPI.login);
    // app.get('/api/v1/users/:page/:per_page', JWT.checkForAuthorizationToken, userAPI.getAllUsers);
    // app.get('/api/v1/user/:id', userAPI.viewUser);
    // app.post('/api/v1/user', userAPI.createUser);
    // app.put('/api/v1/user/:id', userAPI.updateUser);
    // app.delete('/api/v1/user/:id', userAPI.deleteUser);


    app.get('/api/v1/users', userAPI.getAllUsers);
};