import axios from 'axios'

const login = async(callback, errHandler, data) => {
  return await axios.post('/api/login', data)
    .then(callback)
    .catch(errHandler)
}

const getUser = async(callback, errHandler) => {
  return await axios.get('/api/user')
    .then(callback)
    .catch(errHandler)
}

export {
  login,
  getUser
}
