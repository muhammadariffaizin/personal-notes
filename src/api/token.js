class Token {
  static getToken() {
    return localStorage.getItem("accessToken");
  }
  static setToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  static removeToken() {
    localStorage.removeItem("accessToken");
  }
}
export default Token;
