const router = require('express').Router()
const httpUsers = require('./users.http')

//! router.get('/users', httpUsers.getAll)
//! router.post('/users')

//! router.get('/users/:id', httpUsers.getById)
//! router.put('/users/:id')
//! router.delete('/users/:id')

router.route('/users')
    .get(httpUsers.getAll)
    //.post()

router.route('/users/:id')
    .get(httpUsers.getById)
    .put(httpUsers.update)
    .delete(httpUsers.deleteById)


module.exports = {
    router
}

