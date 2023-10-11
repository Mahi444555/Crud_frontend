import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import 'home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Home = () => {
  const [userData, setUserData] = useState([]);
  const [usernameFilter, setUsernameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/routers/getdata");
      setUserData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUsernameFilterChange = (event) => {
    setUsernameFilter(event.target.value);
  };

  const handleEmailFilterChange = (event) => {
    setEmailFilter(event.target.value);
  };

  const handlePhoneFilterChange = (event) => {
    setPhoneFilter(event.target.value);
  };
  const filteredUserData = userData.filter((user) => {
    const usernameMatches = user.name.toLowerCase().includes(usernameFilter.toLowerCase());
    const emailMatches = user.email.toLowerCase().includes(emailFilter.toLowerCase());
    const phoneMatches = user.phone && user.phone.toString().toLowerCase().includes(phoneFilter.toLowerCase());
  
    return usernameMatches && emailMatches && phoneMatches;
  });
  

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/routers/delete/${id}`);
      console.log("Item deleted:", response.data);
      toast.error('🦄 deleted successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="mt-5">
      <div className="container">
      
        <div className="filter-section">
          
          <span >
         
        </span>
          
        </div>

       
        {filteredUserData.length === 0 ? (
          <div className="no-data-container">
          
          <Link to="/register">
                <button
                  type="button"
                  style={{ marginRight: "20px"  }}
                  className="btn btn-success"
                >
                  Add User
                </button>
         </Link>
            <img
              src="https://pbs.twimg.com/media/DDPKLHNVwAA87D5.jpg"
              alt="No data found"
              style={{ height: "250px", width: "100%", border: "1px solid black", marginTop: "25px", backgroundPosition: "center" }}
            />
            
            <h1 style={{ color: "red", fontFamily: "monospace" }}>Add New User</h1>
          </div>
        ) : (
          <table className="table table-striped  mt-2">
            <thead>
            <tr className="table-dark table-dark" >
                <th scope="col"> 
                <Link to="/register">
                <button
                  type="button"
                  style={{ marginRight: "20px"  }}
                  className="btn btn-success"
                >
                  Add User
                </button>
         </Link>
         </th>
                <th scope="col"> 
                <input type="text" placeholder='Filter by Username' class="form-control" id="exampleInputEmail1"
                 aria-describedby="emailHelp"
                 value={usernameFilter}
                 onChange={handleUsernameFilterChange}
                  />
                  </th>
                <th scope="col"><input
                type="text"
                class="form-control"
                placeholder="Filter by Email"
                value={emailFilter}
                onChange={handleEmailFilterChange}
              /></th>
                <th scope="col"><input
                type="text"
                placeholder="Filter by Phone"
                value={phoneFilter}
                class="form-control"
                onChange={handlePhoneFilterChange}
              /></th>
                <th><button className="form-control"  >Action</button> </th>
              </tr>
              <tr className="table-dark">
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUserData.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="d-flex justify-content-between">
                    <Link to={`view/${user._id}`}>
                      <button className="btn btn-success">
                        <i className="fas fa-eye"></i>
                      </button>
                    </Link>
                    <Link to={`/edit/${user._id}`}>
                      <button className="btn btn-primary">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                    </Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />

    </div>
  );
};

export default Home;
