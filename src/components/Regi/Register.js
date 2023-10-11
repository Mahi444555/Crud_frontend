import React, { useState } from "react";
import Nabaar from "../Nabaar";
import { Link } from "react-router-dom";
import stylesReg from "./stylesReg.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setINP({ ...inpval, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation for name field
    if (inpval.name.trim() === "") {
      toast.error("Name is required", { theme: "light" });
      return;
    }

    // Validation for email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inpval.email)) {
      toast.error("Invalid email format", { theme: "light" });
      return;
    }

    // Validation for phone field
    const phoneRegex = /^\d{10}$/; // Assuming phone should be 10 digits
    if (!phoneRegex.test(inpval.phone)) {
      toast.error("Phone must be 10 digits", { theme: "light" });
      return;
    }

    try {
      const url = "http://localhost:5000/api/routers/register";
      const response = await axios.post(url, inpval);

      console.log("Response:", response.data);
      //console.log("Message:", response.data.message);
      toast.success("Data added successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Error:", error);
      //toaster error
      toast.error("🦄 something went wrong...!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message); // Assuming the error message is in the response data
      }
    }
  };

  return (
    <div>
      <Nabaar />
      <div className={stylesReg.login_container}>
        <div className={stylesReg.login_form_container}>
          <div className={stylesReg.left}>
            <form className={stylesReg.form_container}>
              <h1>Add new user</h1>

              <input
                type="text"
                placeholder="userName"
                name="name"
                onChange={handleChange}
                value={inpval.name}
                required
                className={stylesReg.input}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={inpval.email}
                required
                className={stylesReg.input}
              />

              <input
                type="number"
                placeholder="Phone"
                name="phone"
                onChange={handleChange}
                value={inpval.phone}
                required
                className={stylesReg.input}
              />
            </form>
            <div className="btns" style={{ display: "flex", padding: "10px" }}>
              <Link to="/">
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{ marginRight: "20px", width: "75px" }}
                  className="btn btn-success"
                >
                  Save
                </button>
              </Link>
              <Link to="/">
                <button type="button" style={{ marginRight: "20px" }} className="btn btn-danger">
                  Cancel
                </button>
              </Link>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
