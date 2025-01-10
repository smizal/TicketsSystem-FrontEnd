const NewCompany = () => {
  return (
    <>
      <div className="container">
        <h1 className="mt-5">New Company</h1>
        <div
          className="form-signin mx-auto"
          style={{ maxWidth: "600px", padding: "20px" }}
        >
          <form onSubmit="">
            <input type="hidden" id="source" name="source" value="web" />

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                // onChange=""
                // value={ticketForm.name}
                required
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="phone"
                className="form-control"
                id="phone"
                placeholder="Description"
                // onChange={handleChange}
                // value={ticketForm.email}
                required
              />
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                // onChange={handleChange}
                // value={ticketForm.email}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="address"
                // onChange={handleChange}
                // value={ticketForm.phone}
                required
              />
              <label htmlFor="address">Address</label>
            </div>

            <div class="mb-3">
              <input class="form-control" type="file" id="photo" />
            </div>

            <div className="form-floating mb-3">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  placeholder="Status"
                  // onChange={handleChange}
                  // value={ticketForm.phone}
                  required
                />
                <label htmlFor="status">Status</label>
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="notes"
                placeholder="Notes"
                // onChange={handleChange}
                // value={ticketForm.cpr}
                required
              />
              <label htmlFor="notes">Notes</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewCompany
