import { Routes, Route } from "react-router-dom/dist";

import Homepage from "./Homepage"
import CompanyList from "./CompanyList"
import CompanyDetail from "./CompanyDetail"
import JobList from "./JobList"


/** holds our routes */


function RoutesList() {
    return(
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/companies/:handle" element={<CompanyDetail />}/>
            <Route path="/companies" element={<CompanyList />}/>
            <Route path="*" element={<Homepage />}/>
        </Routes>
    )
}


export default RoutesList;