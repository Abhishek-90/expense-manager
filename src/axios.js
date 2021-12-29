import axios from "axios";

const instance = axios.create({
  baseURL: "https://expense-manager-abhi.herokuapp.com/",
});

export default instance;