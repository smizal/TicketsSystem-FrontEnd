import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import usersService from '../../services/usersService'

const initialFormData = {
  name: '',
  password: '',
  confirmPassword: '',
  phone: '',
  email: ''
}

const UserDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState(initialFormData)
  const [userData, setUserData] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const userShow = async () => {
      const data = await usersService.show(id)
      setUserData(data)
      const userFormData = {
        name: data.name,
        phone: data.phone,
        email: data.email
      }
      setFormData({ ...formData, userFormData })
    }
    userShow()
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      if (!formData.password) {
        delete formData['password']
        delete formData['confirmPassword']
      }

      setMessage('')
      const data = await usersService.update(id, formData)

      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: 'alert alert-danger' })
        } else {
          setMessage({
            msg: 'Thread added Successfully',
            type: 'alert alert-success'
          })
          setFormData(initialFormData)
          navigate(`/users`)
        }
      }
    } catch (error) {
      console.log(error)
      setMessage({
        msg: 'There is an error, please contact the administrator',
        type: 'alert alert-danger'
      })
    }
  }

  const isFormInvalid = () => {
    return !(
      formData.name &&
      formData.password === formData.confirmPassword &&
      formData.phone &&
      formData.email
    )
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <form onSubmit={handleSubmit} style={{ flex: 1 }}>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Phone Number:
              <input
                type="text"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </>
  )
}

export default UserDetails
