// Signup.js
import React, { useState } from "react";
import "../signup.css"; // Import your custom CSS file

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
      const response = await fetch("http://127.0.0.1:8000/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
    <div className="signup-container">
      <section className="login-form">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h1 className="text-uppercase text-primary heading">
                    SIGN UP NOW
                  </h1>
                  {/* Your form fields and labels */}
                  <div className="form-group">
                    <label htmlFor="name">Business Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="your@gmail.com"
                      onChange={handleChange}
                    />
                  </div>
                  {/* ... Repeat the same structure for other form fields */}

                  <div class="form-outline mb-4">
                    <label class="form-label" for="phoneNumber">
                      Phone Number
                    </label>
                    <input
                      type="Phone"
                      id="contact"
                      class="form-control m-1"
                      placeholder="98********"
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="Address">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      class="form-control"
                      placeholder="eg: Koteshwor"
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      class="form-control"
                      placeholder="eg: xyz@1234"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
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
