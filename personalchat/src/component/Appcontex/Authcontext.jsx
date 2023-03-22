const { createContext } = require("react");


const Authcontext=createContext()
const init={
    isAuth:false,
    
}
export default function Auth({children}){

    return(
        <Authcontext.Provider>{children}</Authcontext.Provider>
    )
}