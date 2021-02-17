export const validateUserRegistration = (email: string, password: string ) => {
    if (!email.includes("@")) {
        return [
            {
              field: "email",
              message: "invalid email",
            },
          ]; 
    }
    
      if (password.length <= 2) {
        return [
          {
            field: "password",
            message: "length must be greater than 2",
          },
        ];
      }
    
      return null;
}