const NewTicket = () => {
  const handleSubmit = (event) => {}
  return (
    <>
      <div class="form-signin w-100 m-auto">
        <h1>New Ticket</h1>

        <form onSubmit>
          <input type="hidden" id="source" name="source" value="web" />

          <div className="form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="name"
            />
            <label for="name">Name</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="cpr"
              placeholder="Enter your CPR"
            />
            <label for="cpr">CPR</label>
          </div>

          <div className="form-floating mb-2">
            <select className="form-control" id="company" name="company">
              <option value="">000</option>
              <option value="">001</option>
            </select>
            <label for="company">Company</label>
          </div>

          <div className="form-floating mb-2">
            <select className="form-control" id="department" name="department">
              <option value="">aaa</option>
              <option value="">bbb</option>
            </select>
            <label for="department">Department</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="title"
            />
            <label for="title">Title</label>
          </div>
          <div class="form-floating mb-2">
            <select className="form-control" id="type" name="type">
              <option value="complain">Complain</option>
              <option value="suggestion">Suggestion</option>
              <option value="feedback">Feedback</option>
            </select>
            <label for="type">Type</label>
          </div>
          <div className="form-floating mb-2">
            <textarea
              className="form-control"
              id="description"
              name="description"
              placeholder="Write your Complain/Suggestion/Feedback in detail here"
            ></textarea>
            <label for="description">Description</label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default NewTicket
