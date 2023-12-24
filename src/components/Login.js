import React from "react";
import { Link } from "react-router-dom";
import "../login.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center height-100vh">
      <section className="login-form">
        <div className="row gx-12 align-items-center">
          <div className="col-lg-12 mb-5 mb-lg-0">
            <div className="card">
              <div className="card-body py-5 px-md-5">
                <form>
                  <h1
                    className="text-uppercase text-primary m-3 p-4"
                    id="heading"
                  >
                    LOGIN NOW
                  </h1>
                  {/* ... rest of your form content */}
                  <div class="form-outline mb-4">
                    <input
                      type="Phone"
                      id="number"
                      class="form-control"
                      placeholder="98********"
                    />
                    <label class="form-label" for="phoneNumber">
                      Phone Number
                    </label>
                  </div>

                  {/*<!-- Password input -->*/}
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      placeholder="your password"
                    />
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  {/*<!-- Submit button -->*/}
                  <div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-block mb-4"
                    >
                      LOGIN
                    </button>
                  </div>

                  <span class="px-2">Not signed up yet ?</span>
                  <button
                    type="signup-btn"
                    class="btn btn-outline-success btn-block mb-4 my-3"
                  >
                    <Link
                      to="/signup"
                      class="text-decoration-none fs-6 fw-bold"
                    >
                      SIGN UP
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
