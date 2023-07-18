import './App.css';
import React from 'react';
import menu from '../src/images/menu.png';
import logoCHFootballBL from '../src/images/logoCHFootballBL.png';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Home/>
        ),
    },
    {
        path: "/detail",
        element: (
            <Detail/>
        )
    },
]);

function App() {
    return (
        <div className="container">
            <div className="App">
                <div className={"header-app"}>
                    <div className={"header-app-content-lr"}>
                        {/*<img src={menu} className={"header-app-icon"} alt={"menu"}/>*/}
                    </div>
                    <div className="header-app-logo">
                        <img src={logoCHFootballBL}
                             alt="Logo CHFootball"
                             className={"sub-header-app-logo"}/>
                    </div>
                    <div className={"header-app-content-lr"}>
                    </div>
                </div>
                <div style={{display: 'flex', width: '100%', height: 5, marginTop: 58}}/>
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
