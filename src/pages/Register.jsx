import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logoSvg from '../components/logo.svg'
const Register = () => {
  const initCompanyForm = {
    companyName: '',
    companyEmail: '',
    phone: '',
    address: '',
    logo: '',
    adminName: '',
    adminEmail: '',
    cpr: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  const [companyForm, setCompanyForm] = useState(initCompanyForm)

  const handleChange = (event) => {
    setCompanyForm({ ...companyForm, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setCompany(initCompanyForm)
    useNavigate('/login')
  }
  return (
    <div className="container-register m-auto text-left">
      <main>
        <div className="py-5 text-center">
          {/* <img class="mb-4" src={logoSvg} alt="" width="72" height="57" /> */}
          <h2>Register a company</h2>
          <p className="lead">
            Submit a request to review and approve by filling the below form
            built entirely for easy submit and fast review/approve by submitting
            it, you are approving all the data and it's validity.
          </p>
        </div>

        <div className="row g-5 text-start">
          <div className="col-md-12 col-lg-12">
            <h4 className="mb-3">Company Details</h4>
            <form
              className="needs-validation"
              novalidate
              onSubmit={handleSubmit}
            >
              <div className="row g-3">
                <div className="col-sm-12">
                  <label for="companyName" className="form-label">
                    Company name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    placeholder=""
                    value={companyForm.companyName}
                    required
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Valid Company name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label for="companyEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="companyEmail"
                    placeholder="you@example.com"
                    onChange={handleChange}
                    value={companyForm.companyEmail}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label for="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="+973-12345678"
                    onChange={handleChange}
                    value={companyForm.phone}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid phone number for receiving further
                    updates.
                  </div>
                </div>

                <div className="col-12">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                    onChange={handleChange}
                    value={companyForm.address}
                  />
                  <div className="invalid-feedback">
                    Please enter your company address.
                  </div>
                </div>

                <div className="col-12">
                  <label for="logo" className="form-label">
                    Logo
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="photo"
                    placeholder="logo"
                    onChange={handleChange}
                    value={companyForm.logo}
                  />
                </div>
              </div>

              <hr className="my-4" />
              <h4 className="mb-3">Admin User Details</h4>
              <div className="row g-3">
                <div className="col-sm-12">
                  <label for="adminName" className="form-label">
                    Admin Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="adminName"
                    placeholder=""
                    value={companyForm.adminName}
                    required
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Valid Company name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label for="adminEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="adminEmail"
                    placeholder="you@example.com"
                    onChange={handleChange}
                    value={companyForm.adminEmail}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label for="cpr" className="form-label">
                    CPR
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cpr"
                    placeholder="CPR"
                    onChange={handleChange}
                    value={companyForm.cpr}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid username.
                  </div>
                </div>

                <div className="col-12">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={companyForm.username}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid username.
                  </div>
                </div>

                <div className="col-12">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="********"
                    required
                    onChange={handleChange}
                    value={companyForm.password}
                  />
                  <div className="invalid-feedback">
                    Please enter your password.
                  </div>
                </div>

                <div className="col-12">
                  <label for="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="********"
                    required
                    onChange={handleChange}
                    value={companyForm.confirmPassword}
                  />
                  <div className="invalid-feedback">
                    Please enter your confirm password.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Submit register request
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register
