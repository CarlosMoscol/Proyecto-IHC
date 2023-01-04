class AuthService {
  logout() {
    localStorage.removeItem("client");
    localStorage.removeItem("alojamiento");
    localStorage.removeItem("transporte");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('client'));
    //return console.log(localStorage.getItem('user'));
  }
}

export default new AuthService();