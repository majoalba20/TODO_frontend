import axios from "axios";

export default axios.create({
    baseURL: "https://todolistmern-app.herokuapp.com"
});