import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import userContext from "./userContext";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";

//TODO: in docstring, specify exactly what context is
/** renders our routes when navigated to
 * 
 * Props
 * -login(): for logging in user
 * -signUp(): for signing up users
 * -editProfile(): for editing profiles
 * 
 * State
 * -none
 * 
 * App -> RoutesList
*/
function RoutesList({ signUp, login, editProfile }) {
    const { user } = useContext(userContext);

    if(!user) {
        return (
            <Routes>
                <Route path="/login" element={<LoginForm login={login}/>} />
                <Route path="/signup" element={<SignUpForm signUp={signUp}/>} />
                <Route path="/" element={<Homepage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        );
    } else {
        return (
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/companies/:handle" element={<CompanyDetail />} />
                <Route path="/companies/" element={<CompanyList />} />
                <Route path="/jobs/" element={<JobList />} />
                <Route path="/profile" element={<ProfileForm editProfile={editProfile} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        );
    }
}


export default RoutesList;