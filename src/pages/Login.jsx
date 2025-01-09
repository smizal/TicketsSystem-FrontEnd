import logoSvg from "../components/logo.svg"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signIn } from "../services/authService"

const initialFormData = {
  username: "",
  password: "",
}

const Login = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const response = await signIn(formData)
      console.log(response)

      if (response.token) {
        setMessage("Login successful")
        setFormData(initialFormData)
        navigate("/tickets-list")
      } else {
        setMessage("Login failed")
      }
    } catch (error) {
      console.log(error)
      setMessage("There is an error")
    }
  }

  return (
    <div className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src={logoSvg} alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Welcome Back 👋🏻</h1>
        <div className="text-danger">{message}</div>
        <div className="form-floating">
          <input
            type="username"
            className="form-control"
            id="username"
            placeholder="username / CPR"
            onChange={handleChange}
            value={formData.username}
          />
          <label for="username">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
          />
          <label for="password">Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" id="submitButton">
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Login
