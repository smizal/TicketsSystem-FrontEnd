const Register = () => {
  return (
    <div class="container-register m-auto text-left">
      <main>
        <div class="py-5 text-center">
          <img
            class="d-block mx-auto mb-4"
            src="../assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h2>Register a company</h2>
          <p class="lead">
            Submit a request to review and approve by filling the below form
            built entirely for easy submit and fast review/approve by submitting
            it, you are approving all the data and it's validity.
          </p>
        </div>

        <div class="row g-5 text-start">
          <div class="col-md-12 col-lg-12">
            <h4 class="mb-3">Company Details</h4>
            <form class="needs-validation" novalidate>
              <div class="row g-3">
                <div class="col-sm-12">
                  <label for="CompanyName" class="form-label">
                    Company name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid Company name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label for="companyEmail" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="companyEmail"
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label for="phone" class="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="+973-12345678"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid phone number for receiving further
                    updates.
                  </div>
                </div>

                <div class="col-12">
                  <label for="address" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your company address.
                  </div>
                </div>

                <div class="col-12">
                  <label for="logo" class="form-label">
                    Logo
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="photo"
                    placeholder="logo"
                  />
                </div>
              </div>

              <hr class="my-4" />
              <h4 class="mb-3">Admin User Details</h4>
              <div class="row g-3">
                <div class="col-sm-12">
                  <label for="adminName" class="form-label">
                    Admin Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="adminName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid Company name is required.
                  </div>
                </div>

                <div class="col-12">
                  <label for="adminEmail" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="adminEmail"
                    placeholder="you@example.com"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label for="cpr" class="form-label">
                    CPR
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="cpr"
                    placeholder="CPR"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid username.
                  </div>
                </div>

                <div class="col-12">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                  />
                  <div class="invalid-feedback">
                    Please enter a valid username.
                  </div>
                </div>

                <div class="col-12">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="********"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your password.
                  </div>
                </div>

                <div class="col-12">
                  <label for="confirmPassword" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="confirmPassword"
                    placeholder="********"
                    required
                  />
                  <div class="invalid-feedback">
                    Please enter your confirm password.
                  </div>
                </div>
              </div>

              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
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
