import { useState } from "react"

const TicketStatus = () => {
  const initFormData = { notes: "" }

  const [formData, setFormData] = useState({ initFormData })

  const handleChange = (event) => {
    setCompanyForm({ ...formData, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    setFormData(initFormData)
  }

  return (
    <>
      <div className="container mt-5 text-start">
        <section>
          <h5>Ticket #1</h5>
          <h2>Title: </h2>
        </section>
        <section className="row">
          <div className="col-md-12 col-lg-6">
            <h5 className="title">Status: </h5>
            <h5 className="title">Company:</h5>
            <h5 className="title">Department:</h5>
            <h5 className="title">Date created:</h5>
            <h5 className="title">Last updated:</h5>
          </div>
          <div className="col-md-12 col-lg-6">
            <h5 className="title">Customer name:</h5>
            <h5 className="title">Phone:</h5>
            <h5 className="title">Email:</h5>
            <h5 className="title">Source:</h5>
            <h5 className="title">Type:</h5>
          </div>
        </section>
        <hr className="my-4" />
        <section>
          <div className="bg-primary text-white p-2">
            <h5>Issuer Name {"--->"} Date</h5>
          </div>
          <div className="border p-2">
            <p>Comment</p>
          </div>
          <div className="bg-secondary text-white p-2">
            <h5>Issuer Name {"--->"} Date</h5>
          </div>
          <div className="border p-2">
            <p>Comment</p>
          </div>
        </section>
        <hr className="my-4" />
        <section>
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="notes">
              <h5>Notes</h5>
              <textarea
                className="form-control"
                id="notes"
                rows="3"
                placeholder="Add notes here"
                onChange={handleChange}
                value={formData.notes}
              ></textarea>
              <input
                type="hidden"
                id="customerId"
                name="customerId"
                value="customerId"
              />
              <input
                type="hidden"
                id="ticketId"
                name="ticketId"
                value="ticketId"
              />
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default TicketStatus
