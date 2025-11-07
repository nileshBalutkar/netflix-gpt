

export const checkValidData = (email , password)=>{
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

     if (!emailValid) return "Please Enter Correct Email Address"
     if (!passwordValid) return "Please Enter Strong password"
     return null




};