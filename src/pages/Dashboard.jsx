const Dashboard = () => {
  return (
    <>
      <div className="container mt-5">
        <h1>Tickets History</h1>
        <br />
        <div className="container table-container">
          <br />

          <table className="table table-bordered table-hover text-center table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Department</th>
                <th>Create Date</th>
                <th>Last Update</th>
                <th>Status</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody id="servicesTableBody">
              <tr>
                <td>Test Title</td>
                <td>Test Company</td>
                <td>Test Department</td>
                <td>Test Create Date</td>
                <td>Test Last Update</td>
                <td>Test Status</td>

                <td>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block ms-2"
                  >
                    View
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

export default Dashboard
