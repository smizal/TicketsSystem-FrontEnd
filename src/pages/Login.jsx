import logoSvg from '../components/logo.svg'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../services/authService'

const initialFormData = {
  username: '',
  password: ''
}

const Login = ({ setUser }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setMessage('')
      const response = await signIn(formData)

      if (response.token) {
        setMessage('Login successful')
        setFormData(initialFormData)
        setUser(response.user)
        if (response.user.role === 'customer') {
          navigate('/')
        } else {
          navigate('/dashboard')
        }
      } else {
        setMessage(`Login failed: ${response.error}`)
      }
    } catch (error) {
      console.log(error)
      setMessage('There is an error, please contact the administrator')
    }
  }

  const isFormInvalid = () => {
    return !(formData.username && formData.password)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Full viewport height
      }}
    >
      <div className="m-auto form-group-lg" style={{ width: '20%' }}>
        <form
          onSubmit={handleSubmit}
          className="form-horizontal"
          style={{ marginTop: '-70%' }}
        >
          <img className="mb-4" src={logoSvg} alt="" width="100" height="100" />
          <h1 className="h3 mb-3 fw-normal">Welcome Back 👋🏻</h1>
          <div className="text-danger">{message}</div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username / CPR"
              onChange={handleChange}
              value={formData.username}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              onChange={handleChange}
              value={formData.password}
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            className="btn btn-primary w-100 py-2"
            disabled={isFormInvalid()}
          >
            Sign in 🔓
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
