const auth = {
    isAuthenticated() {
      // Check if the user is authenticated (e.g., by checking the presence of a token)
      //  here based on your authentication setup
      return localStorage.getItem('token') !== null;
    },
  
    login(token) {
      localStorage.setItem('token', token);
    },
  
    logout() {
      localStorage.removeItem('token');
    },
  };
  
  export default auth;