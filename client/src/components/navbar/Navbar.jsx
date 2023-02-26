import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./navbar.css";
// import env from "dotenv";

const Navbar = () => {

  const {user} = useContext(AuthContext)
  const logo = process.env.REACT_APP_LOGO;

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}><img src={logo + "logo-white.svg"} className="logo"/></Link>
        <div className="navItems">
          {user ? <div className="loginname"> <img src={user.img || logo + "no-avatar.jpg"} className="avatar"/> {user.username} </div>: <>
            <img src={logo + "no-avatar.jpg"} className="avatar"/>
            <Link to="/auth/register" style={{color:"inherit",textDecoration:"none"}}><button  className="navButton">Register</button></Link>
            <Link to="/auth/login" style={{color:"inherit",textDecoration:"none"}}><button className="navButton">Login</button></Link>
          </>}
        </div>
      </div>
    </div>
  )
}

export default Navbar