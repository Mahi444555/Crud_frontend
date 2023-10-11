import React, { useState, useEffect } from "react";
import stylesReg from "./stylesReg.module.css";
import Nabaar from "../Nabaar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  console.log(userData);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/routers/getuser/${id}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Nabaar />
      <div className={stylesReg.login_container}>
        <div className={stylesReg.login_form_container}>
          <div className={stylesReg.left}>
            <div className="card-body">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginLeft: "-55px",
                }}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAY1BMVEX////MzMxNTU3JycnPz8/S0tL7+/tCQkJISEjv7+/09PTs7Ow7Ozvj4+NFRUU/Pz++vr5SUlJqamqAgICmpqbZ2dmvr680NDSenp6RkZFwcHBYWFiLi4tfX1+1tbWXl5d4eHgbcYzUAAAEIklEQVRoge2a13KsMAyGA8iUpRmWsrtse/+njCFtA5KNKJkzc/xfZZLAh2RJlsvbm5WVlZWVlZWV1f8j/xDFStHB/1tulNbgvQjqNPoT8CEVCueMpH4l0sO+ZD8WzgT8/QGOiPcbAj8FkvzJh3QnfEob/Wp+ugM6noP+wMcbo30xEz3gxaa+jxnoAb+h8SmTrehbjbxfE2wAIQAIer2J64nhVuD76fE43dUHoHTYgO7jlonmGSRZlgVJ8GwI/Go6zhayC0L3U2HQSYH+20q6j9kkvLP7jR7w7tnD8Cs9j8QawKkI3JGC4oyFXr2GjeQYyDIbowd8Kaf0NRmH1BaQQYix+6FHRn55tfExdoKje7V3xPalw47EEFwIuwd10wccsYyNOf2ea9hu3iCmL3M8YobecDe8YJm5hI3NJhIN9B9lcvrMkojHShtUkwQf+b3CTOfHHGa4OGq9rvx+RIKUbzpeV/VDruDlJlUW7V3ETc923RsGZwc8Pk11JjiW6excP6Av8QojHG96eGsZvGvzzJbjz/FCDve6MMPxlo7nd9x7olwU7cp0Djsi4MY8fxJwzgqaaNTF2VRezwScM+g1+goHTobyGpyINp7TT1GvMMNxyx1gwAmvX/XoXtfVEYf0T8MbDCM+jDrx6PzyfsAXSM0cONLM9PD5NQ7PNDDF+gDH452Ra/hy3JjlvdAZnTWxEfDrHMvxiFsNh2oOHG2k1sMdb47biUfnw6nS/jTSNyjueKqZm1dV4nCvc1KNKDKONPsdadwHOKOHJODimutXLDlRXVkTOjGxqCKnayfCEi9vDm9iIaZUZbtu2IOKsJs3pZK7ftr1eYLsTXx6ndNMELnWv6al4S39FOsggnyN0I056XVWA0m0zo620FAFxuG2zvSg0xFHFRj2ogFfLg1G0JaThjOXSxq/n4i5LaOaR/6mELm9D3fKcjrRuEtkdHNgkCTh1BP8LVgy5NjwBTtCxD67ehcFJ2vDgk1IynQgdggK6sBj0eYvYYeg4MLB8UvY6Pan48mGcnsjPQS/dN95nLcAp7Jz6QrndmU12fJfuPE76qZE3dz0jUzfytya+tc3Lz/leXG88B6FZir/UVI8Xs5b1hwtfkW88K7hjBXDh7Lw+oVfd7DYH/CAQruz0QPeVXjojxXXsFWVBZDH6WmSSUFxlABrT5P9pgxYVn9bH5TN6iPFOJuxQsMUZhucY0c3ttN7BbdNbq9Ez1k59lvJc6ObM/6DTU8e291ckKbS9lthLjdDK8UXzWJhrPay9X0R6WrP836Uu5ua/SG/Cmfg87Da545QVHWJfn2edNV+18MOsgyp2FN/KOXOF8PSpmzz8Rl6GORJ2exxK2oi36mORdu2ySD1Q3Gs1l7OYCqqwZPSg/pvLgFaWVlZWVlZWVn9G3oHYxs7xB+nFu4AAAAASUVORK5CYII="
                  alt="profile"
                />
                <p
                  style={{
                    fontWeight: 400,
                    color: "blue",
                    fontSize: "25px",
                    fontWeight: "500",
                    marginTop: "40px",
                    marginLeft: "-85px",
                  }}
                >
                  Welcome {userData ? userData.userindividual.name : ""}
                </p>
              </div>
              <div className={stylesReg.input}>
                <i className="fa-regular fa-envelope"></i> Name:{" "}
                <span>{userData && userData.userindividual.name}</span>
              </div>

              <div className={stylesReg.input}>
                <i className="fa-regular fa-envelope"></i> Email:{" "}
                <span>{userData && userData.userindividual.email}</span>
              </div>

              <div className={stylesReg.input}>
                <i className="fa-solid fa-phone"></i> Phone:{" "}
                <span>{userData && userData.userindividual.phone}</span>
              </div>

              <div style={{ marginLeft: "180px" }}>
                <Link to="/">
                  {" "}
                  <button
                    className="btn btn-primary"
                    style={{
                      marginTop: "25px",
                      width: "75px",
                      marginRight: "10px",
                    }}
                  >
                    Home
                  </button>
                </Link>
                <Link to="/">
               
                  <button
                    className="btn btn-danger"
                    style={{ marginTop: "25px", width: "75px" }}
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
