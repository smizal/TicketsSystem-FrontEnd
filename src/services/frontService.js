import client from './config'

const create = async (data) => {
  try {
    const response = await client.post(`/create-ticket`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const companiesList = async () => {
  try {
    const response = await client.get('/companies-list')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const departmentsList = async (id) => {
  try {
    const response = await client.get(`/departments-list/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const ticketsList = async () => {
  try {
    const response = await client.get(`/tickets-list`)
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
    console.log(id, data)
    const response = await client.post(`/add-thread/${id}`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  companiesList,
  departmentsList,
  ticketsList,
  create,
  show,
  addThread
}
