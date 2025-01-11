import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ticketsService from '../../services/ticketsService'
import TicketAdminRow from './TicketAdminRow'

const TicketsList = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [tickets, setTickets] = useState(null)

  const getList = async () => {
    const data = await ticketsService.index()
    setTickets(data)
  }

  const handleDelete = async (e) => {
    const data = await ticketsService.deleting(e.target.id)
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({
          msg: 'Ticket Deleted Successfully',
          type: 'alert alert-info'
        })
      }
      getList()
    }
  }

  const handleStatus = async (e) => {
    const data = await ticketsService.update(e.target.id, {
      status: e.target.name
    })
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({
          msg: 'Ticket Status Changed Successfully',
          type: 'alert alert-info'
        })
      }
      getList()
    }
  }

  useEffect(() => {
    const fetchDefaultList = async () => {
      const data = await ticketsService.index()
      setTickets(data)
    }
    fetchDefaultList()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h1>Tickets List</h1>
        <div className="container table-container">
          <div className="text-end">
            <Link to={`/tickets/new`} className="btn btn-primary btn-sm mb-4">
              New Ticket
            </Link>
          </div>
          {message ? <div className={message.type}>{message.msg}</div> : null}
          {tickets ? (
            <table className="table table-bordered table-hover text-center">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Department</th>
                  <th>Customer</th>
                  <th>Type</th>
                  <th>Date Created</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="servicesTableBody">
                {tickets.length > 0 ? (
                  tickets.map((ticket, index) => (
                    <TicketAdminRow
                      key={ticket._id}
                      ticket={ticket}
                      index={index}
                      getList={getList}
                      handleDelete={handleDelete}
                      handleStatus={handleStatus}
                    />
                  ))
                ) : (
                  <tr>
                    <td colspan="9">No tickets found</td>
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

export default TicketsList
