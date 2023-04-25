import { Routes, Route, Navigate } from "react-router-dom/dist";

import Homepage from "./Homepage"
import CompanyList from "./CompanyList"
import CompanyDetail from "./CompanyDetail"
import JobList from "./JobList"


/** holds our routes 
 * 
 * App -> RoutesList
*/


function RoutesList() {
    return(
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/companies/:handle" element={<CompanyDetail />}/>
            <Route path="/companies/" element={<CompanyList />}/>
            <Route path="/jobs/" element={<JobList />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}


export default RoutesList;