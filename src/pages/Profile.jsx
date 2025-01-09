const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <br />
      <section>
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-6 col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <h6 class="f-w-600">Loay Mohammed</h6>
                        <p>Super Super Admin</p>
                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div class="col-sm-8 text-center">
                      <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                          Information
                        </h6>
                        <div class="text-center">
                          <div class="col-sm-12">
                            <p class="m-b-10 f-w-600">Name</p>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="col-sm-12">
                            <p class="m-b-10 f-w-600">Email</p>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="col-sm-12">
                            <p class="m-b-10 f-w-600">Phone</p>
                            <input
                              type="text"
                              class="form-control"
                              placeholder=""
                            />
                          </div>
                          <div class="card-block p-b-0">
                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                              Password
                            </h6>
                            <div class="col-sm-12">
                              <p class="m-b-10 f-w-600">Password</p>
                              <input
                                type="password"
                                class="form-control"
                                placeholder=""
                              />
                            </div>
                            <div class="col-sm-12">
                              <p class="m-b-10 f-w-600">Confirm Password</p>
                              <input
                                type="password"
                                class="form-control"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <button class="btn btn-primary">Save</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Profile
