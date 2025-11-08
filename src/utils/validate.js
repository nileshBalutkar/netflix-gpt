

export const checkValidData = (email , password)=>{
     const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
          const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     const passwordValid = regularExpression.test(password);

     if (!emailValid) return "Please Enter Correct Email Address"
     if (!passwordValid) return "Please Enter Strong password"
     return null
};