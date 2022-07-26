const { createUser, getAllUsers, getUserById, deleteUser, editUser } = require('./users.controllers')

//? Servicio donde servimos la peticion que require todos los usuarios
//? Aqui unicamente les pasamos el req y el res
const getAll = (req, res) => {
    const data = getAllUsers()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)

    if (id) {
        const data = getUserById(id)
        if (data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if (typeof id === 'number') {
        const deleted = deleteUser(id)
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(400).json({ message: 'Try with another ID' })
        }
    } else {
        res.status(400).json({ message: 'Invalid ID' })
    }
}

const create = (req, res) => {
    const data = req.body
    if (data.name && data.age && data.email && data.country && data.phone) {
        const response = createUser(data)
        res.status(201).json(response)
    }
    else {
        res.status(400).json({ message: "Invalid Arguments" })
    }
}

const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if (data.name && data.age && data.email && data.country && data.phone) {
        const response = editUser(id, data)
        res.status(201).json({ message: "User edited succesfully", data: response })
    }
    else {
        res.status(400).json({ message: "Invalid Arguments" })
    }
}

module.exports = {
    getAll,
    getById,
    deleteById,
    update, create
}
