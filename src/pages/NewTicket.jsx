import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import frontService from '../services/frontService'
import CompaniesSelector from '../components/CompaniesSelector'
import DepartmentsSelector from '../components/DepartmentsSelector'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  cpr: '',
  companyId: '0',
  departmentId: '0',
  title: '',
  type: 'complain',
  description: ''
}

const NewTicket = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  const [companies, setCompanies] = useState(null)
  const [departments, setDepartments] = useState(null)

  useEffect(() => {
    const companiesList = async () => {
      const data = await frontService.companiesList()
      setCompanies(data)
    }
    companiesList()
  }, [])

  const handleChange = async (event) => {
    formData[event.target.id] = event.target.value
    setFormData({ ...formData })
    if (event.target.id === 'companyId') {
      const data = await frontService.departmentsList(event.target.value)
      setDepartments(data)
    }
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setMessage('')
      const data = await frontService.create(formData)

      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: 'alert alert-danger' })
        } else {
          setMessage({
            msg: 'Ticket opened Successfully',
            type: 'alert alert-success'
          })
          setFormData(initialFormData)
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
      formData.email &&
      formData.phone &&
      formData.cpr &&
      formData.companyId !== '0' &&
      formData.departmentId !== '0' &&
      formData.title &&
      formData.description
    )
  }

  return (
    <>
      <div className="container">
        <div
          className="form-signin mx-auto"
          style={{ maxWidth: '600px', padding: '20px' }}
        >
          <h1 className="mb-4 text-center">New Ticket</h1>
          {message ? <div className={message.type}>{message.msg}</div> : null}
          <form onSubmit={handleSubmit}>
            <input type="hidden" id="source" name="source" value="web" />
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <label htmlFor="name">Name</label>
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
                type="text"
                className="form-control"
                id="cpr"
                placeholder="Enter your CPR"
                onChange={handleChange}
                value={formData.cpr}
                required
              />
              <label htmlFor="cpr">CPR</label>
            </div>

            <div className="form-floating mb-3">
              <CompaniesSelector
                companies={companies}
                formData={formData}
                handleChange={handleChange}
              />
            </div>

            <div className="form-floating mb-3">
              <DepartmentsSelector
                departments={departments}
                formData={formData}
                handleChange={handleChange}
              />
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                onChange={handleChange}
                value={formData.title}
              />
              <label htmlFor="title">Title</label>
            </div>

            <div className="form-floating mb-3">
              <select
                onChange={handleChange}
                className="form-select"
                id="type"
                name="type"
                defaultValue={formData.type}
              >
                <option value="complain">Complain</option>
                <option value="suggestion">Suggestion</option>
                <option value="feedback">Feedback</option>
              </select>
              <label htmlFor="type">Type</label>
            </div>

            <div className="form-floating mb-4">
              <textarea
                className="form-control"
                id="description"
                name="description"
                placeholder="Write your Complain/Suggestion/Feedback in detail here"
                onChange={handleChange}
                value={formData.description}
                rows="4"
              />
              <label htmlFor="description">Description</label>
            </div>

            <button
              className="btn btn-primary w-100 py-2"
              disabled={isFormInvalid()}
            >
              Open Ticket
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewTicket
