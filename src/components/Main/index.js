import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nabaar from '../Nabaar';
import Home from '../Home';

const Main = () => {
  return (
    <div>
      <Nabaar />
      <Home />
    </div>
  );
};

export default Main;









// import styles from './styles.module.css'

// const Main = () =>{

// const handleLogout = ()=>{
//     localStorage.removeItem("token");
//     window.location.reload();
// }

//     return(
//         <div className={styles.main_container}>
//         <nav className={styles.navbar}>
        
//         <h1>Home </h1>
//         <button className={styles.white_btn} onClick={handleLogout}>Logout</button>
//         </nav> 

//         {/**........add new component hre dashbord */}
//         </div>
//     )
// }

// export default Main;