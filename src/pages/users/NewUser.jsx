import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import usersService from '../../services/usersService'
import frontService from '../../services/frontService'
import UserRaw from './UserRaw'
import CompaniesSelector from '../../components/CompaniesSelector'
import DepartmentsSelector from '../../components/DepartmentsSelector'

const initialFormData = {
  name: '',
  username: '',
  password: '',
  confirmPassword: '',
  cpr: '',
  role: 'super',
  phone: '',
  email: '',
  companyId: '0',
  departmentId: '0',
  status: 'active'
}

const NewUser = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [formData, setFormData] = useState(initialFormData)
  const [companies, setCompanies] = useState(null)
  const [departments, setDepartments] = useState(null)
  const [userRole, setUserRole] = useState('super')
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    } else if (event.target.id === 'role' && event.target.value === 'super') {
      formData['companyId'] = '0'
      formData['departmentId'] = '0'
      setFormData({ ...formData })
      setUserRole('super')
    } else if (event.target.id === 'role' && event.target.value === 'admin') {
      formData['departmentId'] = '0'
      setFormData({ ...formData })
      setUserRole('admin')
    } else if (event.target.id === 'role' && event.target.value === 'staff') {
      setUserRole('staff')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      if (formData.role === 'super') {
        delete formData['companyId']
        delete formData['departmentId']
      } else if (formData.role === 'admin') {
        delete formData['departmentId']
      }
      const data = await usersService.create(formData)
      if (data) {
        if (data.error) {
          setMessage({ msg: data.error, type: 'alert alert-danger' })
        } else {
          setMessage({
            msg: data.message ? data.message : 'User created Successfully',
            type: 'alert alert-success'
          })
          setFormData(initialFormData)
        }
      }
    } catch (error) {
      console.error(error)
      setMessage({
        msg: 'There is an error, please contact the administrator',
        type: 'alert alert-danger'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormInvalid = () => {
    const checkStaff =
      formData.role === 'staff' &&
      formData.companyId !== '0' &&
      formData.departmentId !== '0'
    const checkAdmin = formData.role === 'admin' && formData.companyId !== '0'
    const checkSuper = formData.role === 'super' ? true : false
    return !(
      formData.name &&
      formData.username &&
      formData.password &&
      formData.confirmPassword &&
      formData.cpr &&
      formData.role &&
      formData.phone &&
      formData.email &&
      formData.status &&
      (checkStaff || checkAdmin || checkSuper)
    )
  }

  return (
    <>
      <div className="container">
        <div
          className="form-signin mx-auto"
          style={{ maxWidth: '600px', padding: '20px' }}
        >
          <h1 className="mb-4 text-center">New User</h1>
          {message ? <div className={message.type}>{message.msg}</div> : null}
          <form onSubmit={handleSubmit}>
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
                id="username"
                placeholder="Username"
                onChange={handleChange}
                value={formData.username}
                required
              />
              <label htmlFor="username">Username</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                required
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="cpr"
                placeholder="cpr"
                onChange={handleChange}
                value={formData.cpr}
                required
              />
              <label htmlFor="cpr">CPR</label>
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
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
              <select
                onChange={handleChange}
                className="form-select"
                id="role"
                name="role"
                defaultValue={formData.role}
              >
                <option value="super">Super Admin</option>
                <option value="admin">Company Admin</option>
                <option value="staff">Company Staff</option>
              </select>
              <label htmlFor="role">User Role</label>
            </div>
            {userRole !== 'super' ? (
              <div className="form-floating mb-3">
                <CompaniesSelector
                  companies={companies}
                  formData={formData}
                  handleChange={handleChange}
                />
              </div>
            ) : null}

            {userRole === 'staff' ? (
              <div className="form-floating mb-3">
                <DepartmentsSelector
                  departments={departments}
                  formData={formData}
                  handleChange={handleChange}
                />
              </div>
            ) : null}

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
                  Create User
                </>
              ) : (
                'Create User'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewUser
