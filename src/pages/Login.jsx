const Login = () => {
  return (
    <div class="form-signin w-100 m-auto">
      <form onSubmit>
        <img
          class="mb-4"
          src="../assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="username"
            class="form-control"
            id="floatingInput"
            placeholder="username / CPR"
          />
          <label for="username">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="password"
          />
          <label for="password">Password</label>
        </div>

        <button
          class="btn btn-primary w-100 py-2"
          id="submitButton"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Login
