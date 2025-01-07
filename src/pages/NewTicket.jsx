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
      <div class="form-signin w-100 m-auto">
        <h1>New Ticket</h1>

        <form onSubmit={handleSubmit}>
          <input type="hidden" id="source" name="source" value="web" />

          <div className="form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="name"
              onChange={handleChange}
              value={ticketForm.name}
              required
            />
            <label for="name">Name</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="email"
              onChange={handleChange}
              value={ticketForm.email}
              required
            />
            <label for="email">E-mail</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="phone"
              placeholder="phone"
              onChange={handleChange}
              value={ticketForm.phone}
              required
            />
            <label for="phone">Phone</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="cpr"
              placeholder="Enter your CPR"
              onChange={handleChange}
              value={ticketForm.cpr}
              required
            />
            <label for="cpr">CPR</label>
          </div>

          <div className="form-floating mb-2">
            <select
              onChange={handleChange}
              className="form-control"
              id="companyId"
              name="companyId"
              defaultValue={ticketForm.company}
              required
            ></select>
            <label for="companyId">Company</label>
          </div>

          <div className="form-floating mb-2">
            <select
              className="form-control"
              id="departmentId"
              name="departmentId"
              onChange={handleChange}
              defaultValue={ticketForm.department}
            ></select>
            <label for="departmentId">Department</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="title"
              onChange={handleChange}
              value={ticketForm.title}
            />
            <label for="title">Title</label>
          </div>
          <div class="form-floating mb-2">
            <select
              onChange={handleChange}
              className="form-control"
              id="type"
              name="type"
              defaultValue={ticketForm.type}
            >
              <option value="complain">Complain</option>
              <option value="suggestion">Suggestion</option>
              <option value="feedback">Feedback</option>
            </select>
            <label for="type">Type</label>
          </div>
          <div className="form-floating mb-2">
            <textarea
              className="form-control"
              id="description"
              name="description"
              placeholder="Write your Complain/Suggestion/Feedback in detail here"
              onChange={handleChange}
              value={ticketForm.description}
            ></textarea>
            <label for="description">Description</label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default NewTicket
