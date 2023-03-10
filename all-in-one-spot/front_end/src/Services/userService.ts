import axios from "axios";
import { authHeader } from "./authHeader";

const API_URL = "http://localhost:5000";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "products", { headers: authHeader() });
  }
}

export default new UserService();
