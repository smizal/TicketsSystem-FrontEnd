import client from './config'

const index = async () => {
  try {
    const response = await client.get('/companies')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const deleting = async (id) => {
  try {
    const response = await client.delete(`/companies/${id}`)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const update = async (id, data) => {
  try {
    const response = await client.put(`/companies/edit/${id}`, data)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const create = async (data) => {
  try {
    const response = await client.post(`/companies`, data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default { index, deleting, update, create }
