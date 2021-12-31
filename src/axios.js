import axios from "axios";

const instance = axios.create({
  baseURL: "https://react--expense-manager.herokuapp.com/",
});

export default instance;