import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NewTicket = () => {
  const initTicketForm = {
    name: "",
    email: "",
    phone: "",
    cpr: "",
    company: "",
    department: "",
    title: "",
    type: "complain",
    description: "",
  }
  const [ticketForm, setTicketForm] = useState({ initTicketForm })

  const handleChange = (event) => {
    console.log(event.target.id, event.target.value)
    console.log(ticketForm)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(ticketForm)
    setTicketForm(initTicketForm)
    useNavigate("/")
  }

  return (
    <>
      <div className="container">
        <div
          className="form-signin mx-auto"
          style={{ maxWidth: "600px", padding: "20px" }}
        >
          <h1 className="mb-4 text-center">New Ticket</h1>

          <form onSubmit={handleSubmit}>
            <input type="hidden" id="source" name="source" value="web" />

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={handleChange}
                value={ticketForm.name}
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
                value={ticketForm.email}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={ticketForm.phone}
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
                value={ticketForm.cpr}
                required
              />
              <label htmlFor="cpr">CPR</label>
            </div>

            <div className="form-floating mb-3">
              <select
                onChange={handleChange}
                className="form-select"
                id="companyId"
                name="companyId"
                defaultValue={ticketForm.company}
                required
              >
                {/* Option rendering logic here */}
              </select>
              <label htmlFor="companyId">Company</label>
            </div>

            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="departmentId"
                name="departmentId"
                onChange={handleChange}
                defaultValue={ticketForm.department}
              >
                {/* Option rendering logic here */}
              </select>
              <label htmlFor="departmentId">Department</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
                onChange={handleChange}
                value={ticketForm.title}
              />
              <label htmlFor="title">Title</label>
            </div>

            <div className="form-floating mb-3">
              <select
                onChange={handleChange}
                className="form-select"
                id="type"
                name="type"
                defaultValue={ticketForm.type}
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
                value={ticketForm.description}
                rows="4"
              />
              <label htmlFor="description">Description</label>
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

export default NewTicket
