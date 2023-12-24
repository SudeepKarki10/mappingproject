// Signup.js
import React, { useState } from "react";
import "../bootstrap.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://192.168.56.1:8000/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("User registered successfully!");

        // Log the response data (optional)
        const responseData = await response.json();
        console.log("Response Data:", responseData);

        // Optionally, you can redirect the user or perform other actions.
      } else {
        console.error("Failed to register user:", response.statusText);
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <div
      class="d-flex justify-content-center align-items-center mx-2 "
      style={{ height: "150vh" }}
    >
      <section class="login-form">
        <div class="row gx-12 align-items-center">
          <div class="col-lg-12 mb-5 mb-lg-0">
            <div class="card">
              <div class="card-body py-4 px-md-5">
                <form>
                  <h1 class="text-uppercase text-primary m-1 p-4" id="heading">
                    SIGN UP NOW
                  </h1>
                  {/* ... rest of your form content */}
                  {/* Your form fields and submit button */}
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="name"
                      class="form-control"
                      placeholder=""
                    />
                    <label class="form-label" for="name">
                      Bussiness Name
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="email"
                      class="form-control"
                      placeholder="your@gmail.com"
                    />
                    <label class="form-label" for="email">
                      E-mail
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="Phone"
                      id="contact"
                      class="form-control m-1"
                      placeholder="98********"
                    />
                    <label class="form-label" for="phoneNumber">
                      Phone Number
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="address"
                      class="form-control"
                      placeholder="eg: Koteshwor"
                    />
                    <label class="form-label" for="Address">
                      Address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      placeholder="eg: xyz@1234"
                    />
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    SIGN UP
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

export default Signup;
