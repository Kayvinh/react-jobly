import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import "./Navigation.css";

/**Navigation
 * 
 * shows navigation bar
 * 
 * Props
 * -logout() handles logging out user
 * 
 * State
 * -none
 * 
 * uses context: user.username
 * 
 * App -> Navigation
 */
function Navigation({ logout }) {
    const { user } = useContext(userContext);

    return (
        <div className="Navigation">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md">
                    <NavLink className="navbar-brand" to="/">Jobly</NavLink>
                    <ul className="navbar-nav ms-auto">
                        {!user
                            ? <>
                                <li className="nav-item me-4">
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item me-4">
                                    <NavLink to="/signup">Signup</NavLink>
                                </li>
                            </>
                            : <>
                                <li className="nav-item me-4">
                                    <NavLink to="/companies">Companies</NavLink>
                                </li>
                                <li className="nav-item me-4">
                                    <NavLink to="/jobs">Jobs</NavLink>
                                </li>
                                <li className="nav-item me-4">
                                    <NavLink to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item me-4">
                                    <Link onClick={logout} to="/">Log out {user.username}</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;