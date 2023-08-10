



//defino authstate q info va a tener

import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string
}

// estado inicial

export const authInitialState: AuthState ={
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// lo usaremos para decirle a react como luce y que expone

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName:string) => void;
    logout: () => void;
    changeUsername: (userName:string) => void;
}

//crear el contescto

export const AuthContext = createContext({} as AuthContextProps)


//componente proveedor del estado

export const AuthProvider = ({children}: any) => {


    const [authState, dispatch] = useReducer(authReducer, authInitialState)


    const signIn = ()=>{
        dispatch({type:'signIn'})
    }

    const changeFavoriteIcon = (iconName: string)=>{
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const changeUserName = (userName: string)=>{
        dispatch({type: 'changeUsername', payload: userName})
    }
    const logout = ()=>{
        dispatch({type: 'logout'})
    }



    return(
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            changeFavoriteIcon,
            logout: logout,
            changeUsername: changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}