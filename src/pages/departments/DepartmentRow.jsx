import { Link, useNavigate } from 'react-router-dom'
import departmentsService from '../../services/departmentsService'

const DepartmentRow = ({ department, index, getList, handleDelete }) => {
  return (
    <tr key={department._id}>
      <td>{index + 1}</td>
      <td>{department.name}</td>
      <td>{department.description}</td>
      <td>{department.status}</td>
      <td>
        <Link
          to={`/departments/${department._id}`}
          className="btn btn-primary btn-sm"
        >
          View
        </Link>
        <button
          className="btn btn-danger btn-sm"
          id={department._id}
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default DepartmentRow
