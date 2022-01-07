import { createContext } from "react"

 let defaultValue = {
   user: null,
   setUserLogin: () => {},
   setUserLogout: () => {}
 }
 const UserContext = createContext(defaultValue)

 export default UserContext;