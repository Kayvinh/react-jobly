import { NavLink } from "react-router-dom/dist";

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
        <nav>
        <NavLink to="/">Jobly</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        </nav>
    )
}

export default Navigation;