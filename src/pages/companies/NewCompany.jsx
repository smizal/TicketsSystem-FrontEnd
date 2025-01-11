import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import companiesService from "../../services/companiesService"

const initialFormData = {
  name: "",
  description: "",
  status: "active",
}

const NewCompany = ({ user }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setMessage("")
      const data = await companiesService.create(formData) // Use companiesService

      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: "alert alert-danger" })
        } else {
          setMessage({
            msg: "Company Added Successfully",
            type: "alert alert-success",
          })
          setFormData(initialFormData) // Reset the form
          navigate("/companies") // Redirect after adding
        }
      }
    } catch (error) {
      console.log(error)
      setMessage({
        msg: "There is an error, please contact the administrator",
        type: "alert alert-danger",
      })
    }
  }

  const isFormInvalid = () => {
    return !(formData.name && formData.description && formData.status)
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5">New Company</h1>
        {message ? <div className={message.type}>{message.msg}</div> : null}
        <div
          className="form-signin mx-auto"
          style={{ maxWidth: "600px", padding: "20px" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Company Name" // Change placeholder
                onChange={handleChange}
                value={formData.name}
                required
              />
              <label htmlFor="name">Company Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Description"
                onChange={handleChange}
                value={formData.description}
                required
              />
              <label htmlFor="description">Description</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-control"
                id="status"
                placeholder="Status" // Change placeholder
                onChange={handleChange}
                value={formData.status}
                required
              >
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>
              <label htmlFor="status">Status</label>
            </div>
            <button
              className="btn btn-primary w-100 py-2"
              disabled={isFormInvalid()}
            >
              Add Company
            </button>{" "}
            {/* Change button text */}
          </form>
        </div>
      </div>
    </>
  )
}

export default NewCompany
