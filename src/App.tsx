import * as React from "react"
import {AppProvider} from './context/AppContext'
import './App.sass'
import Main from "./components/Main/Main";

function App() {
    return (
        <AppProvider>
            <Main />
        </AppProvider>
    )
}

export default App
