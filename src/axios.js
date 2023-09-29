

import axios from "axios";

const instance = axios.create({
    baseURL : "https://whatsapp-backend-three.vercel.app/",
});

export default instance;
