const express = require('express');

const app = express()

const userDB = [{
    id: 1,
    name: "",
    age: 20,
    email: "",
    country: "",
    phone: ""
}]
/*
    {
        id: 1,
        name: "",
        age: 20,
        email: "",
        country: "",
        phone: ""
    }
*/


app.use(express.json())

app.use('/hola', (req, res) => {
    res.json({message: 'Peticion con use', method: req.method})
})
//? Ruta para obtener todos mis usuarios
app.get('/users', (req, res) => {
    res.status(200).json(userDB)
})
//? Ruta para obtener un usuario en especifico
app.get('/users/:id', (req,res) => {
    const id = Number(req.params.id)
    const filteredDB = userDB.filter(item => item.id === id)

    if(filteredDB.length > 0){
        res.status(200).json(filteredDB[0])
    } else {
        res.status(400).json({message: "Este id no es valido"})
    }
})

app.post('/users', (req, res) => {
    const data = req.body

    if(userDB.length === 0){
        const newUser = {
            id: 1,
            ...data
        }
        userDB.push(newUser)
    } else {
        const newUser = {
            id: userDB[userDB.length - 1].id + 1,
            ...data
        }
        userDB.push(newUser)
    }

    res.status(201).json(userDB)
})

// todo : Delete Update

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = userDB.findIndex(item => item.id === id)

    if(index !== -1){
        userDB.splice(index, 1)
        res.status(204).json()
    }
    res.status(400).json({message: 'Invalid ID'})
})

app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const data = req.body;
    const index = userDB.findIndex(item => item.id === id)

    if(index === -1){
        res.status(400).json({message: 'Invalid ID'})
    }
    if(data.name && data.age && data.email && data.country && data.phone){
        userDB[index] = {
            id,
            name: data.name,
            age: data.age,
            email: data.email,
            country: data.country,
            phone: data.phone
        }
        res.status(200).json(userDB)
    } else {
        res.status(400).json({message: 'Missing data'})
    }
});



app.listen(8000, () =>{
    console.log('Server started at port 8000')
})




