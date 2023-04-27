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


/** renders our routes when navigated to
 * 
 * Props
 * -none
 * 
 * State
 * -none
 * 
 * App -> RoutesList
*/
function RoutesList() {
    const { user } = useContext(userContext);

    if(!user) {
        return (
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpForm />} />
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
                <Route path="/profile" element={<ProfileForm />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        );
    }
}


export default RoutesList;