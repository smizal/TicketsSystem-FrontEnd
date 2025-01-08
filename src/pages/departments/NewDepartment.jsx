const NewDepartment = () => {
  return (
    <>
      <div className="container">
        <h1>New Department</h1>
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
                type="email"
                className="form-control"
                id="email"
                placeholder="Description"
                // onChange={handleChange}
                // value={ticketForm.email}
                required
              />
              <label htmlFor="email">Description</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Phone"
                // onChange={handleChange}
                // value={ticketForm.phone}
                required
              />
              <label htmlFor="phone">Status</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="notes"
                placeholder="Enter your CPR"
                // onChange={handleChange}
                // value={ticketForm.cpr}
                required
              />
              <label htmlFor="notes">Notes</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                // onChange={handleChange}
                className="form-control"
                id="companyName"
                name="companyName"
                placeholder="Enter your Company Name"
                // defaultValue={ticketForm.company}
                required
              />
              <label htmlFor="companyName">Company Name</label>
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

export default NewDepartment
