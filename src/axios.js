

import axios from "axios";

const instance = axios.create({
    baseURL : "https://zahar-whatsapp.herokuapp.com",
});

export default instance;