import client from './config'

const index = async () => {
  try {
    const response = await client.get('/tickets')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const deleting = async (id) => {
  try {
    const response = await client.delete(`/tickets/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const update = async (id, data) => {
  try {
    const response = await client.put(`/tickets/edit/${id}`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const create = async (data) => {
  try {
    const response = await client.post(`/tickets`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const response = await client.get(`/tickets/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const addThread = async (id, data) => {
  try {
    const response = await client.post(`/tickets/${id}`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default { index, deleting, update, create, show, addThread }
