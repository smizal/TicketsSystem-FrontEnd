import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import departmentsService from '../../services/departmentsService'
import companiesService from '../../services/companiesService'

const initialFormData = {
  companyId: '',
  name: '',
  description: '',
  status: 'active'
}

const NewDepartment = ({ user }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormData)
  const [companies, setCompanies] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const companiesList = async () => {
      const data = await companiesService.index()
      setCompanies(data)
      if (user.role !== 'super') {
        formData.companyId = user.companyId
      } else {
        formData.companyId = data[0]._id
      }
    }
    companiesList()
  }, [user.role])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    try {
      const data = await departmentsService.create(formData)

      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: 'alert alert-danger' })
        } else {
          setMessage({
            msg: data.message ? data.message : 'Department Added Successfully',
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
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormInvalid = () => {
    return !(
      formData.companyId &&
      formData.name &&
      formData.description &&
      formData.status
    )
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5">New Department</h1>
        {message ? <div className={message.type}>{message.msg}</div> : null}
        <div
          className="form-signin mx-auto"
          style={{ maxWidth: '600px', padding: '20px' }}
        >
          <form onSubmit={handleSubmit}>
            {user.role === 'admin' ? (
              <input
                type="hidden"
                id="companyId"
                name="companyId"
                value={formData.name}
              />
            ) : (
              <div className="form-floating mb-3">
                {companies ? (
                  <select
                    className="form-control"
                    id="companyId"
                    placeholder="Company Name"
                    onChange={handleChange}
                    defaultValue={formData.companyId}
                    required
                  >
                    {companies.map((company, index) => (
                      <option key={index} value={company._id}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>
            )}

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
              type="submit"
              disabled={isFormInvalid() || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{' '}
                  Submitting...
                </>
              ) : (
                'Add Department'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewDepartment
