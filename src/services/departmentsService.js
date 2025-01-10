import client from './config'

const index = async () => {
  try {
    const response = await client.get('/departments')
    console.log(response.data)
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

export default { index, deleting }
