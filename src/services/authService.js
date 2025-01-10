import client from './config'

export const signUp = async (data) => {
  const response = await client.post('/auth/signup', data)
  const token = response.data.token
  localStorage.setItem('authToken', token)
  return response.data
}

export const signIn = async (data) => {
  try {
    const response = await client.post('/auth/login', data)
    if (response.data.token) {
      const token = response.data.token
      localStorage.setItem('authToken', token)
    }
    return response.data
  } catch (error) {
    console.log(error)
  }
}
