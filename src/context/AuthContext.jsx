import {  createContext, useState } from "react";


export const AuthContext=createContext();

function AuthContextProvider({children}){
    const [state,setState]=useState({
        isAuth:false,
        token:null
    })
 
    let providerState={
        state,
        login:(token)=>{
            setState({
                ...state,
                isAuth:true,
                token:token
            })
        },
        logout:()=>{
            setState({
                ...state,
                isAuth:false,
                token:null
            })
        }
    }
    

    return <AuthContext.Provider value={{providerState}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider