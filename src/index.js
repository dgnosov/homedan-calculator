import * as React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import {createRoot} from "react-dom/client";


export default async function init(){

    const containerId = 'root'

    const container = document.getElementById(containerId)

    if (!container) {
        console.error(`Cannot init react app (frame). Cannot find container with id "${containerId}"`)
        return
    }
    const root = createRoot(container);
    
    root.render(
        <React.StrictMode>
            <App container={container}/>
        </React.StrictMode>
    );
}

init().then().catch(e=>{
    console.error('Error while init root', e)
})
