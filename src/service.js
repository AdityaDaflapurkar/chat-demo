import axios from 'axios';

export const registerUser = (user) => {
    axios.post('http://localhost:5000/users/register', user).then(res => {
      console.log(res)
    }).catch(e => {
      console.log('hhh')
    })
}

export const loginUser = (username, password) => axios.post('http://localhost:5000/users/login', {
  email: username,
  password
})

export const getUsers = () => axios.get('http://localhost:5000/users')

export const getRooms = () => axios.get('http://localhost:5000/rooms')