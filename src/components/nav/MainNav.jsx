import logoSvg from '../../components/logo.svg'
import { Link, useNavigate } from 'react-router-dom'

const MainNav = ({ user, logOut }) => {
  console.log('user: ', user)
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" to="#">
          <img
            className="mb-4 align-middle"
            src={logoSvg}
            alt=""
            width="72"
            height="57"
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/status">
                  Ticket Status
                </Link>
              </li>
            ) : (
              ''
            )}
            {user ? (
              user.role !== 'customer' ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/tickets">
                    Tickets
                  </Link>
                </li>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            {user ? (
              user.role !== 'customer' && user.role !== 'staff' ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/departments">
                    Departments
                  </Link>
                </li>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            {user ? (
              user.role !== 'customer' && user.role !== 'staff' ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/staff">
                    Staff
                  </Link>
                </li>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            {user ? (
              user.role === 'super' ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/companies">
                    Companies
                  </Link>
                </li>
              ) : (
                ''
              )
            ) : (
              ''
            )}
          </ul>
          <div className="text-end d-flex flex-wrap align-items-center justify-content-center">
            <Link className="nav-link" to="/create">
              <button type="button" className="btn btn-outline-light me-2">
                Create Ticket
              </button>
            </Link>
            {!user ? (
              <Link className="nav-link" to="/login">
                <button type="button" className="btn btn-primary me-2">
                  Login
                </button>
              </Link>
            ) : (
              <button
                type="button"
                className="btn btn-danger me-2"
                onClick={logOut}
              >
                Logout
              </button>
            )}
            <Link className="nav-link" to="/register">
              <button type="button" className="btn btn-warning">
                Register Company
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
