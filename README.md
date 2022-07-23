# Orden

1. Definir las rutas
2. Definir los verbos de cada ruta

/users
- GET (obtener todos los usuarios)
- POST (crear un nuevo usuario)
/users/:id
- GET (obtener usuario en especifico)
- PUT (editar usuario)
- PATCH (editar usuario)
- DELETE (eliminar usuario)

3. Crear los controladores
```javascript
    const getAllUsers = () => {
        return userDB
    }
```

4. Crear los servicios
5. Crear las rutas
