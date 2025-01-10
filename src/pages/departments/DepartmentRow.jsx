import { Link, useNavigate } from 'react-router-dom'
import departmentsService from '../../services/departmentsService'

const DepartmentRow = ({
  department,
  index,
  getList,
  handleDelete,
  handleStatus
}) => {
  return (
    <tr key={department._id}>
      <td>{index + 1}</td>
      <td>{department.companyId.name}</td>
      <td>{department.name}</td>
      <td>{department.description}</td>
      <td>
        <span
          class={
            department.status === 'active'
              ? 'badge text-bg-success'
              : 'badge text-bg-warning'
          }
        >
          {department.status}
        </span>
      </td>
      <td>
        {/* <Link
          to={`/departments/${department._id}`}
          className="btn btn-primary btn-sm me-2"
        >
          View
        </Link> */}
        <button
          className="btn btn-danger btn-sm me-2"
          id={department._id}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className={
            department.status === 'active'
              ? 'btn btn-warning btn-sm'
              : 'btn btn-success btn-sm'
          }
          id={department._id}
          name={department.status === 'active' ? 'suspended' : 'active'}
          onClick={handleStatus}
        >
          {department.status === 'active' ? 'Suspend' : 'Activate'}
        </button>
      </td>
    </tr>
  )
}

export default DepartmentRow
