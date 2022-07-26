const userDB = [
  {
    id: 1,
    name: "",
    age: 20,
    email: "",
    country: "",
    phone: "",
  },
];
/*
 *    {
 *        id: 1,
 *        name: "",
 *        age: 20,
 *        email: "",
 *        country: "",
 *        phone: ""
 *    }
 */

//? El controlador para retornar todos mis usuarios
const getAllUsers = () => {
  return userDB;
};

const getUserById = (id) => {
  const filteredDB = userDB.filter((user) => user.id === id);
  return filteredDB[0];
};

const createUser = (userObj) => {
  if (userDB.length === 0) {
    const newUser = {
      id: 1,
      name: userObj.name,
      age: userObj.age,
      email: userObj.email,
      country: userObj.country,
      phone: userObj.phone,
    };
    userDB.push(newUser);
    return newUser;
  }
  const newUser = {
    id: userDB[userDB.length - 1].id + 1,
    name: userObj.name,
    age: userObj.age,
    email: userObj.email,
    country: userObj.country,
    phone: userObj.phone,
  };
  userDB.push(newUser);
  return newUser;
};
// TODO : hacer controladores de Delete y update

const deleteUser = (id) => {
  const index = userDB.findIndex((item) => item.id === id);
  if (index !== -1){
    userDB.splice(index, 1)
    return true
  }
  return false
}

const editUser = (id, data) => {
  const index = userDB.findIndex((item) => item.id === id);
  if (index !== -1){
    userDB[index] = data
    return userDB[index]
  } else {
    createUser(data)
    return userDB.at(-1)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  editUser
};
