import axios from "axios";

export default axios.create ({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: '0f65464d8cb94bea851bdd5497e3ae2e'
    }
})