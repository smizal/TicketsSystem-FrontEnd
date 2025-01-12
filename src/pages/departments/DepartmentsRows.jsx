import DepartmentRow from './DepartmentRow'

const DepartmentRows = ({ departments, getlist, handleDelete, handleStatus }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {departments ? (
        <table className="table table-bordered table-hover text-center">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Company</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="servicesTableBody">
            {departments.length > 0 ? (
              departments.map((department, index) => (
                <DepartmentRow
                  key={department._id}
                  department={department}
                  index={index}
                  getList={getList}
                  handleDelete={handleDelete}
                  handleStatus={handleStatus}
                />
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
    </>
  )
}

export default DepartmentRows