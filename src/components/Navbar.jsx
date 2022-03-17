import React, {useContext} from "react"
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = (event) => {
        event.preventDefault()
        let confirmAction = window.confirm("Are you sure you want to exit");
        if(confirmAction){
            let confirmAction2 = window.confirm("Then say Good Bye Boss:):):) and click OK")
            if (confirmAction2) {
                auth.logout()
                history.push("/")
            }
        }
    }

    return(
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: "0 2rem"}}>
                <a href="/" className="brand-logo">Service of shortening links</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Create</NavLink></li>
                    <li><NavLink to="/links">Links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Log out</a></li>
                </ul>
            </div>
        </nav>
    )
}