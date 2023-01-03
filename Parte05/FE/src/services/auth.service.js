class AuthService {
  logout() {
    localStorage.removeItem("client");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('client'));
    //return console.log(localStorage.getItem('user'));
  }
}

export default new AuthService();