import jwtDecode from "jwt-decode";
export const isTokenValid = (token:string) =>{
    const currentTimestamp = Math.floor(Date.now() / 1000); 

    try {
        let decodedT = jwtDecode(token);
        return currentTimestamp <= decodedT['exp']
      }
    catch(Error) {
        return false;
      }


}