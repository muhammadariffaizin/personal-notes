import axios from '../axios';
import Token from '../token';

class UserApi {
  static async withHeader() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${Token.getToken()}`;
  }

  static async getAuthenticatedUser() {
    this.withHeader();
    const response = await axios.get('/users/me');
    return response.data;
  }
}

export default UserApi;
