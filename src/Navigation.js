import { NavLink } from "react-router-dom/dist";
import "./Navigation.css";

/**Navigation
 * 
 * shows navigation bar
 * 
 * Props
 * -none
 * 
 * State
 * -none
 * 
 * App -> Navigation
 */
function Navigation() {
    return (
        <div className="Navigation">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md">
                    <NavLink className="navbar-brand" to="/">Jobly</NavLink>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <NavLink to="/companies">Companies</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink to="/jobs">Jobs</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;