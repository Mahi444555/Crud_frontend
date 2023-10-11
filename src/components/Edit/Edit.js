import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Nabaar from "../Nabaar";
import stylesReg from "./stylesReg.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Edit = () => {
  const { id } = useParams();


  const [inpval, setINP] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/routers/getuser/${id}`
      );
      setINP(response.data.userindividual);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    // Add logic to save changes to the server using axios
    console.log("Saving changes:", inpval);

    toast.success('🦄 Successfully updated !', {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			});
  };

  const history = useNavigate();

const updateuser = async (e) => {
  e.preventDefault();
  const { name, email, phone } = inpval;

  const res2 = await fetch(`http://localhost:5000/api/routers/updateuser/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name, email, phone
    })
  });

  const data2 = await res2.json();
  console.log(data2);

  if (res2.status === 422 || !data2) {
    alert("Fill in the data.");
    
  } else {
    alert("successfully updated")
    history("/");  // Redirect to another page after successful update
  }
};

  

  return (
    <div>
      <Nabaar />
      <div className={stylesReg.login_container}>
        <div className={stylesReg.login_form_container}>
          <div className={stylesReg.left}>
            <form className={stylesReg.form_container}>
              <h1 style={{ marginTop: "-20px", marginBottom: "px" }}>
                Update the user...
              </h1>

              <input
                type="text"
                placeholder="UserName"
                name="name"
                onChange={setdata}
                value={inpval.name}
                required
                className={stylesReg.input}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={setdata}
                value={inpval.email}
                required
                className={stylesReg.input}
              />

              <input
                type="number"
                placeholder="Phone"
                name="phone"
                onChange={setdata}
                value={inpval.phone}
                required
                className={stylesReg.input}
              />
            </form>
            <div className="btns" style={{ display: "flex", padding: "10px" }}>
              <button
                type="button"
                style={{ marginRight: "20px", width: "75px" }}
                className="btn btn-success"
                onClick={saveChanges}
              >
                Save
              </button>

              <Link to="/">
                <button
                  type="button"
                  style={{ marginRight: "20px" }}
                  className="btn btn-danger"
                  onClick={updateuser}
                >
                  Submit
                </button>
              </Link>
              <ToastContainer />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;













