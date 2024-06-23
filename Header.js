import { LOGO_URL } from "../common/constant";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
//import Grocery from "./Grocery";

const Header = () =>{
    const [btnname, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between mt-2 bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-20 ml-2" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-bold">
                        Online Status: {onlineStatus? "✅" : "🔴"}
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="login font-bold" onClick={()=>{
                        btnname === "Login"?setBtnName("Logout"):setBtnName("Login")
                    }}>{btnname}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;