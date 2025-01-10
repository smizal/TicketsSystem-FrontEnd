const DepartmentsList = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>Department List</h1>
        <br />
        <div className="container table-container">
          <br />

          <table className="table table-bordered table-hover text-center">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Notes</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody id="servicesTableBody">
              <tr>
                <td>Test ID</td>
                <td>Test Name</td>
                <td>Test Description</td>
                <td>Test Status</td>
                <td>Test Notes</td>

                <td>
                  <button className="btn btn-primary btn-block edit-button">
                    Edit
                  </button>

                  <button
                    type="submit"
                    className="btn btn-block btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DepartmentsList
