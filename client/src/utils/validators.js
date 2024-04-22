export const validateSignUp = (data) => {
    const { name, email, password, repassword } = data;
  
    if (!name || !email || !password || !repassword) {
      return false;
    }
  
    const emailRegex = /^\S+@\S+$/i;
    if (!emailRegex.test(email)) {
      return false;
    }
  
    if (password !== repassword) {
      alert('Password and Re-enter Password should match');
      return false;
    }
  
    return true;
  };
  
  export const validateLogin = (data) => {
    const { email, password } = data;
  
    if (!email || !password) {
      return false;
    }
  
    const emailRegex = /^\S+@\S+$/i;
    if (!emailRegex.test(email)) {
      return false;
    }
  
    return true;
  };