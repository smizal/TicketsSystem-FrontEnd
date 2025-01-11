import { Link, useNavigate } from 'react-router-dom'

const TicketRow = ({ ticket, index, getList, handleDelete, handleStatus }) => {
  return (
    <tr key={ticket._id}>
      <td>{index + 1}</td>
      <td>{ticket.title}</td>
      <td>{ticket.companyId.name}</td>
      <td>{ticket.departmentId.name}</td>
      <td>{ticket.customerId.name}</td>
      <td>{ticket.type}</td>
      <td>{ticket.createdAt}</td>
      <td>
        <span
          className={
            ticket.status === 'new'
              ? 'badge text-bg-primary'
              : ticket.status === 'suspended'
              ? 'badge text-bg-danger'
              : ticket.status === 'inProgress'
              ? 'badge text-bg-warning'
              : 'badge text-bg-success'
          }
        >
          {ticket.status}
        </span>
      </td>
      <td>
        <Link
          to={`/tickets/${ticket._id}`}
          className="btn btn-primary btn-sm me-2"
        >
          View
        </Link>
        <button
          className="btn btn-danger btn-sm me-2"
          id={ticket._id}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className={
            ticket.status === 'new' || ticket.status === 'inProgress'
              ? 'btn btn-warning btn-sm'
              : 'btn btn-success btn-sm'
          }
          id={ticket._id}
          name={
            ticket.status === 'new' || ticket.status === 'inProgress'
              ? 'closed'
              : 'inProgress'
          }
          onClick={handleStatus}
        >
          {ticket.status === 'new' || ticket.status === 'inProgress'
            ? 'Close'
            : 'Open'}
        </button>
      </td>
    </tr>
  )
}

export default TicketRow
