import logoSvg from "../components/logo.svg"

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
      }}
    >
      <div className="m-auto form-group-lg" style={{ width: "20%" }}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form-horizontal"
          style={{ marginTop: "-70%" }}
        >
          <img className="mb-4" src={logoSvg} alt="" width="100" height="100" />
          <h1 className="h3 mb-3 fw-normal">Welcome Back 👋🏻</h1>

          <div className="form-floating mb-3">
            <input
              type="username"
              className="form-control"
              id="floatingInput"
              placeholder="username / CPR"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            className="btn btn-primary w-100 py-2"
            id="submitButton"
            type="submit"
          >
            Sign in 🔓
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
