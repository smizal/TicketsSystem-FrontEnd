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

const deleting = async (id) => {
  try {
    const response = await client.delete(`/departments/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const update = async (id, data) => {
  try {
    const response = await client.put(`/departments/edit/${id}`, data)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default { companiesList, departmentsList, update, create }
