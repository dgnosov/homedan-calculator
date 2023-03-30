import * as React from 'react'
import {useContext, useReducer} from "react"
import AppActions from "./AppActions";
import reducer from '../context/AppReducers'

const AppContext = React.createContext(null)

export const useApp = () => {
    return useContext(AppContext)
}

interface AppProvider {
    children: JSX.Element | JSX.Element[]
}

export const AppProvider = ({children}: AppProvider) => {

    const [state, dispatch] = useReducer(reducer, {
        test: null,
    })

    const setNum = num => dispatch({type: AppActions.UPDATE_NUM, num})

    return (
        <AppContext.Provider value={{
            test: state.test,
            setNum
        }}>
            {children}
        </AppContext.Provider>
    )

}
