class TransportService {
    logout() {
      localStorage.removeItem("transport");
    }
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('transport'));
      //return console.log(localStorage.getItem('user'));
    }
  }
  
  export default new TransportService();