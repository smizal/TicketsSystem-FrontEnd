import client from './config'

const index = async () => {
  try {
    const response = await client.get('/users')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const deleting = async (id) => {
  try {
    const response = await client.delete(`/users/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const update = async (id, data) => {
  try {
    const response = await client.put(`/users/edit/${id}`, data)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const create = async (data) => {
  try {
    const response = await client.post(`/users`, data)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const response = await client.get(`/users/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default { index, deleting, update, create }
