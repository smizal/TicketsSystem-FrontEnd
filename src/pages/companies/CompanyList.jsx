import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import companiesService from '../../services/companiesService'
import CompanyRow from './CompanyRow'

const CompanyList = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [companies, setCompanies] = useState(null)

  const getList = async () => {
    const data = await companiesService.index()
    setCompanies(data ? (data.length > 0 ? data : null) : null)
  }

  const handleDelete = async (e) => {
    const data = await companiesService.deleting(e.target.id)
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({ msg: data.message?data.message:"Company Deleted Successfully", type: 'alert alert-info' })
      }
      getList()
    }
  }

  const handleStatus = async (e) => {
    const data = await companiesService.update(e.target.id, {
      status: e.target.name
    })
    if (data) {
      if (data.error) {
        setMessage({ msg: data.error, type: 'alert alert-danger' })
      } else {
        setMessage({ msg: data.message?data.message:"Company status changed successfully", type: 'alert alert-info' })
      }
      getList()
    }
  }

  useEffect(() => {
    const fetchDefaultList = async () => {
      const data = await companiesService.index()
      setCompanies(data ? (data.length > 0 ? data : null) : null)
    }
    fetchDefaultList()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h1>Companies List</h1>
        <div className="container table-container">
          <div className="text-end">
            <Link to={`/companies/new`} className="btn btn-primary btn-sm mb-4">
              New Company
            </Link>
          </div>
          {message ? <div className={message.type}>{message.msg}</div> : null}
          {companies ? (
            <table className="table table-bordered table-hover text-center">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>CR</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="servicesTableBody">
                {companies.length > 0 ? (
                  companies.map((company, index) => (
                    <CompanyRow
                      key={company._id}
                      company={company}
                      index={index}
                      getList={getList}
                      handleDelete={handleDelete}
                      handleStatus={handleStatus}
                    />
                  ))
                ) : (
                  <tr>
                    <td colspan="8">No company found</td>
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

export default CompanyList
