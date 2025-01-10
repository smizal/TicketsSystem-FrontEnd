import { Link, useNavigate } from 'react-router-dom'

const TicketRow = ({ ticket, index }) => {
  return (
    <tr key={ticket._id}>
      <td>{index + 1}</td>
      <td>{ticket.companyId.name}</td>
      <td>{ticket.departmentId.name}</td>
      <td>{ticket.title}</td>
      <td>
        <span
          class={
            ticket.status === 'new'
              ? 'badge text-bg-primary'
              : ticket.status === 'suspended'
              ? 'badge text-bg-danger'
              : ticket.status === ''
              ? 'badge text-bg-warning'
              : 'badge text-bg-success'
          }
        >
          {ticket.status}
        </span>
      </td>
      <td>
        <Link
          to={`/tickets-show/${ticket._id}`}
          className="btn btn-primary btn-sm me-2"
        >
          View
        </Link>
      </td>
    </tr>
  )
}

export default TicketRow