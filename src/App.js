import './App.css';
import React from 'react';
import {createBrowserRouter, RouterProvider, createHashRouter} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import THeader from "./components/THeader";
import Admin from "./pages/admin";
import TFooter from "./components/TFooter";

const router = createBrowserRouter([{
    path: "/", element: (<Home/>),
}, {
    path: "/mauthietke", element: (<Detail/>)
}, {
    path: "/xadmin", element: (<Admin/>)
}]);

// const router = createHashRouter([{
//     path: "/", element: (<Detail/>),
// },
// {
//     path: "/mauthietke", element: (<Detail/>)
// },
// ]);

function App() {

    return (<>
        <div className="container">
            <div className="App">
                <THeader/>
                <div style={{display: 'flex', width: '100%', height: 5, marginTop: 58}}/>
                <RouterProvider router={router}/>
                {/*Desktop footer --- end*/}
            </div>
        </div>
        <div style={{width: '100%'}}>
          <TFooter/>
        </div>
    </>);
}

export default App;
