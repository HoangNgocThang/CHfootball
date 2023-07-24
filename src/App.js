import './App.css';
import React from 'react';
// import menu from '../src/images/menu.png';
import logoCHFootballBL from '../src/images/logoCHFootballBL.png';
import {
    createBrowserRouter, RouterProvider, createHashRouter, Route, Link,
} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import logoFootballFooter from '../src/images/logoFootballFooter.png';
import mail from '../src/images/mail.png';
import phone from '../src/images/phone.png';

const router = createHashRouter([{
    path: "/", element: (<Home/>),
}, {
    path: "/detail", element: (<Detail/>)
},]);

function App() {
    return (<div className="container">
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
            <RouterProvider router={router}/>
            {/*Mobile footer --- start*/}
            <div className={'container-footer'}>
                <img src={logoFootballFooter} style={{width: 119, height: 41, marginBottom: 20}}/>
                <div className={'item-footer'}>
                    <img src={phone} style={{width: 22, height: 22, marginRight: 10}}/>
                    <p className={'text-footer'}>Hotline: 037 484 1234</p>
                </div>
                <div className={'item-footer'} style={{marginBottom: 20}}>
                    <img src={mail} style={{width: 22, height: 22, marginRight: 10}}/>
                    <p className={'text-footer'}>Email: chfootballstore@gmail.com</p>
                </div>
                <div className="fb-page" data-href="https://www.facebook.com/chfootballvn" data-tabs="timeline"
                     data-width="" data-height="" data-small-header="false" data-adapt-container-width="true"
                     data-hide-cover="false" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/chfootballvn" className="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/chfootballvn">CH Football - Chuyên quần áo bóng đá, phụ kiện,
                        dịch vụ in ấn, thêu logo</a></blockquote>
                </div>
            </div>
            {/*Mobile footer --- end */}
        </div>
    </div>);
}

export default App;
