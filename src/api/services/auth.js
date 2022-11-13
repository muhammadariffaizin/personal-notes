import axios from '../axios';
class AuthApi {
  static async register(payload) {
    const response = await axios.post('/register', payload);
    return response.data;
  }

  static async login(payload) {
    const response = await axios.post('/login', payload);
    return response.data;
  }
}

export default AuthApi;
