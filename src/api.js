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


    /////////////////////// Companies /////////////////////////////

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
        let res = await this.request(`companies/`, { nameLike });
        return res.companies;
    }

    ////////////////////////// Jobs ///////////////////////////////

    /** Get list of jobs. */

    static async getJobs() {
        let res = await this.request(`jobs/`);
        return res.jobs;
    }

    /** Get list of jobs filtering by title */

    static async searchJobs(title) {
        let res = await this.request(`jobs/`, { title });
        return res.jobs;
    }


    ////////////////////////// Users ///////////////////////////////

    /** Signs up a user given user data 
     * user like {username, password, firstName, lastName, email}
     * 
     * sets token for future requests.
     * returns user info.
     * 
     * returns {username, firstName, lastName, email, applications[]}
    */
    static async signUp(user) {
        let res = await this.request(`auth/register/`, user, "post");
        JoblyApi.token = res.token;
        localStorage.setItem("token", JoblyApi.token);
        return await JoblyApi.getSignedInUser();
    }

    /** logs in a user, setting token for future requests.
     * 
     * credentials like {username, password}
     * 
     * returns {username, firstName, lastName, email, applications[]}
     */
    static async login(credentials) {
        let res = await this.request(`auth/token/`, credentials, "post");
        JoblyApi.token = res.token;
        localStorage.setItem("token", JoblyApi.token);
        return await JoblyApi.getSignedInUser();
    }

    /** edits a user's profile and returns the user.
     * 
     * profileData like {username, firstName, lastName, email}
     * 
     * returns {username, firstName, lastName, email, applications[]}
     */
    static async editProfile(profileData) {
        let user = profileData;
        const { username, ...restOfUser } = user;
        await this.request(`users/${username}`, restOfUser, "patch")
        let res = await this.getSignedInUser();
        return res
    }

    /** gets data about the currently signed in user
     * 
     * returns {username, firstName, lastName, email, applications[]}
     */
    static async getSignedInUser() {
        const decoded = jwt_decode(this.token);
        let res = await this.request(`users/${decoded.username}`)
        return res.user;
    }

    /** clears login token */
    static clearToken() {
        JoblyApi.token = '';
    }

    /** applies to job with specified id and returns that job Id
     * 
     */
    static async applyToJob(jobId) {
        const decoded = jwt_decode(this.token);
        let res = await this.request(
            `users/${decoded.username}/jobs/${jobId}`,
            {},
            "post")
        return res.applied;
    }

    // obviously, you'll add a lot here ...
}


export default JoblyApi;