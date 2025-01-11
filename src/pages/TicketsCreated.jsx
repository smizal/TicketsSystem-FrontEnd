import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import frontService from '../services/frontService'
import TicketRow from '../components/TicketRow'

const TicketsCreated = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [tickets, setTickets] = useState(null)

  const getList = async () => {
    const data = await frontService.ticketsList()
    setTickets(data)
  }

  useEffect(() => {
    const fetchDefaultList = async () => {
      const data = await frontService.ticketsList()
      setTickets(data)
    }
    fetchDefaultList()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h1>Tickets Created List</h1>
        <br />
        <div className="container table-container">
          {tickets ? (
            <table className="table table-bordered table-hover text-center">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Department</th>
                  <th>Created Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="servicesTableBody">
                {tickets.length > 0 ? (
                  tickets.map((ticket, index) => (
                    <TicketRow key={ticket._id} ticket={ticket} index={index} />
                  ))
                ) : (
                  <tr>
                    <td colspan="6">No departments found</td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </>
  )
}

export default TicketsCreated
