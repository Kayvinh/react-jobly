import axios from "axios";
import jwt_decode from "jwt-decode";
// const axios = require("axios");

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//         "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//         "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc

class JoblyApi {
    // Remember, the backend needs to be authorized with a token
    // We're providing a token you can use to interact with the backend API
    // DON'T MODIFY THIS TOKEN
    static token = "";

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const headers = JoblyApi.token ? { Authorization: `Bearer ${JoblyApi.token}` } : {};
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    /** Get details on a company by handle. */

    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }

    /** Get list of companies. */

    static async getCompanies() {
        let res = await this.request(`companies/`);
        return res.companies;
    }

    /** Get list of companies filtering by name */

    static async searchCompany(nameLike) {
        let res = await this.request(`companies/`, {nameLike});
        return res.companies;
    }

    /** Get list of jobs. */

    static async getJobs() {
        let res = await this.request(`jobs/`);
        return res.jobs;
    }

    /** Get list of jobs filtering by title */

    static async searchJobs(title) {
        let res = await this.request(`jobs/`, {title});
        return res.jobs;
    }

    /** Signs up a user given user data 
     * user like {username, password, firstName, lastName, email}
     * 
     * sets token for further requests.
     * returns user info.
     * 
     * returns {user}
    */
    static async signUp(user) {
        let res = await this.request(`auth/register/`, user, "post");
        JoblyApi.token = res.token;
        const decoded = jwt_decode(JoblyApi.token)
        return await JoblyApi.getSignedInUser(decoded.username);
    }

    /** logs in a user, setting token for future requests.
     * 
     * credentials like {username, password}
     * 
     * returns {user}
     */
    static async logIn(credentials) {
        let res = await this.request(`auth/token/`, credentials, "post");
        JoblyApi.token = res.token;
        const decoded = jwt_decode(JoblyApi.token)
        return await JoblyApi.getSignedInUser(decoded.username);
    }

    static async getSignedInUser(username) {
        let res = await this.request(`users/${username}`)
        console.log("Signed in as: ", res.user);
        return res.user;
    }

    // obviously, you'll add a lot here ...
}


export default JoblyApi;