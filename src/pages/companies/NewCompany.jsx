import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import companiesService from '../../services/companiesService'

const initialFormData = {
  name: '',
  phone: '',
  cr: '',
  email: '',
  address: '',
  status: 'active'
}

const NewCompany = ({ user }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    console.log(formData)
    try {
      event.preventDefault()
      setMessage('')
      const data = await companiesService.create(formData)

      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: 'alert alert-danger' })
        } else {
          setMessage({
            msg: 'Company Added Successfully',
            type: 'alert alert-success'
          })
          setFormData(initialFormData)
          /* navigate('/companies') */
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
      formData.phone &&
      formData.cr &&
      formData.email &&
      formData.address &&
      formData.status
    )
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5">New Company</h1>
        {message ? <div className={message.type}>{message.msg}</div> : null}
        <div
          className="form-signin mx-auto"
          style={{ maxWidth: '600px', padding: '20px' }}
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
                id="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={formData.phone}
                required
              />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                onChange={handleChange}
                value={formData.address}
                required
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="cr"
                placeholder="cr"
                onChange={handleChange}
                value={formData.cr}
                required
              />
              <label htmlFor="cr">CR Number</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-control"
                id="status"
                placeholder="Status"
                onChange={handleChange}
                defaultValue={formData.status}
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
            </button>{' '}
            {/* Change button text */}
          </form>
        </div>
      </div>
    </>
  )
}

export default NewCompany
