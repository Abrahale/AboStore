import jwtDecode from "jwt-decode";
export const isTokenValid = (token:string) =>{
    const currentTimestamp = Math.floor(Date.now() / 1000); 

    try {
        let decodedT = jwtDecode(token);
        if (currentTimestamp <= decodedT['exp']) {
            console.log('Token is still valid.');
            return true
        } 
        else {
            console.log('Token has expired.');
            return false
          }
      }
    catch(Error) {
        return false;
      }


}