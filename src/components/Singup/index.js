import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
	gender:"",
	options: "", 
	city: "",
	state: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //toaster body...
    toast.success('account created successful!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    ////
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sing in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="FirstName"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
<div className={styles.first0}></div>
            <input
              type="number" // Set the input type to "number"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              required
              className={styles.input}
            />
			<select
			name="options"
			onChange={handleChange}
			value={data.options}
			required
			className={styles.input}
		  >
			<option value="" disabled>
			  How did you hear about this?
			</option>
			<option value="linkedin">LinkedIn</option>
			<option value="friends">Friends</option>
			<option value="portal">Portal</option>
			<option value="other">Other</option>
		  </select>

            <select
              name="gender"
              onChange={handleChange}
              value={data.gender}
              required
              className={styles.input}
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>


	<div className={styles.first1}>
			<select
			name="city"
			onChange={handleChange}
			value={data.city}
			required
			className={styles.input1}
		  >
			<option value="" disabled>
			  Select a city
			</option>
			<option value="Mumbai">Mumbai</option>
			<option value="Pune">Pune</option>
			<option value="Ahmedabad">Ahmedabad</option>
		  </select>


		  <select
              name="state"
              onChange={handleChange}
              value={data.state}
              required
              className={styles.input1}
            >
              <option value="" disabled>
                Select a state
              </option>
              <option value="Gujarat">Gujarat</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnataka">Karnataka</option>
            </select>
		</div>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
            <ToastContainer />
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
