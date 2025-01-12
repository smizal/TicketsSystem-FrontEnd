const DepartmentDetails = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>Department Details</h1>
        <br />
        <div className="container table-container">
          <br />

          <table className="table table-bordered table-hover text-center">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Company Name</th>
                <th>Departement Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Notes</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody id="servicesTableBody">
              <tr>
                <td>Test ID</td>
                <td>Test Company Name</td>
                <td>Test Department Name</td>
                <td>Test Description</td>
                <td>Test Status</td>
                <td>Test Notes</td>

                <td>
                  <button className="btn btn-outline-primary btn-block btn-sm edit-button">
                    Edit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-block btn-outline-danger btn-sm ms-2"
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="btn btn-block btn-outline-warning btn-sm ms-2"
                  >
                    Suspend
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

export default DepartmentDetails
