import logoSvg from "../../components/logo.svg"
const MainNav = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand" href="#">
          <img
            class="mb-4"
            src={logoSvg}
            alt=""
            width="72"
            height="57"
            className="align-middle"
          />
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/status">
                Ticket Status
              </a>
            </li>
          </ul>
          <div class="text-end d-flex flex-wrap align-items-center justify-content-center">
            <a class="nav-link" href="/create">
              <button type="button" class="btn btn-outline-light me-2">
                Create Ticket
              </button>
            </a>
            <a class="nav-link" href="/login">
              <button type="button" class="btn btn-primary me-2">
                Login
              </button>
            </a>
            <a class="nav-link" href="/register">
              <button type="button" class="btn btn-warning">
                Register Company
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
