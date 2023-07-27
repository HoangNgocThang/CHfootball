import './App.css';
import React from 'react';
import {createBrowserRouter, RouterProvider, createHashRouter, useNavigate} from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import THeader from "./components/THeader";
import logoFootballFooter from '../src/images/logoFootballFooter.png';
import mail from '../src/images/mail.png';
import phone from '../src/images/phone.png';
import location from '../src/images/location.png';
import pin from '../src/images/pin.png';

const router = createBrowserRouter([{
    path: "/", element: (<Home/>),
}, {
    path: "/detail", element: (<Detail/>)
},]);

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
            {/*Mobile footer --- start*/}
            <div className={'d-md-none d-flex container-footer'}>
                <img src={logoFootballFooter} style={{width: 119, height: 41, marginBottom: 20}}
                     alt={"Logo CHFootball"}/>
                <div className={'item-footer'}>
                    <img src={phone} style={{width: 22, height: 22, marginRight: 10}} alt={"phone"}/>
                    <p className={'text-footer'}>Hotline: 037 484 1234</p>
                </div>
                <div className={'item-footer'}>
                    <img src={mail} style={{width: 22, height: 22, marginRight: 10}} alt={"mail"}/>
                    <p className={'text-footer'}>Email: chfootballstore@gmail.com</p>
                </div>
                <div className={'item-footer'}>
                    <img src={location} style={{width: 22, height: 22, marginRight: 10}}/>
                    <p className={'text-footer'} style={{fontSize: 12.5}}>41/62 Nguyễn Chí Thanh, Láng Thượng, Đống
                        Đa, Hà Nội</p>
                </div>
                <div className={'item-footer'} style={{marginBottom: 20}}>
                    <img src={pin} style={{width: 22, height: 22, marginRight: 10}}/>
                    <p className={'text-footer'} style={{fontSize: 12.5}}>123 Đường Thăng Long, Nghi Liên, Vinh,
                        Nghệ An</p>
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
            {/*Desktop footer --- start*/}
            <div className={'d-none d-md-flex container-footer__desktop'}>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
                    <img src={logoFootballFooter} style={{width: 119, height: 41, marginBottom: 20}}
                         alt={"Logo CHFootball"}/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div className={'item-footer'}>
                            <img src={phone} style={{width: 22, height: 22, marginRight: 10}}/>
                            <p className={'text-footer'}>Hotline: 037 484 1234</p>
                        </div>
                        <div className={'item-footer'}>
                            <img src={mail} style={{width: 22, height: 22, marginRight: 10}}/>
                            <p className={'text-footer'}>Email: chfootballstore@gmail.com</p>
                        </div>
                        <div className={'item-footer'}>
                            <img src={location} style={{width: 22, height: 22, marginRight: 10}}/>
                            <p className={'text-footer'}>41/62 Nguyễn Chi Thanh, Láng Thượng, Đống Đa, Hà Nội</p>
                        </div>
                        <div className={'item-footer'} style={{marginBottom: 20}}>
                            <img src={pin} style={{width: 22, height: 22, marginRight: 10}}/>
                            <p className={'text-footer'}>123 Đường Thăng Long, Nghi Liên, Vinh, Nghệ An</p>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: 20}}
                     className="fb-page" data-href="https://www.facebook.com/chfootballvn" data-tabs="timeline"
                     data-width="" data-height="" data-small-header="false" data-adapt-container-width="true"
                     data-hide-cover="false" data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/chfootballvn" className="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/chfootballvn">CH Football - Chuyên quần áo bóng đá, phụ kiện,
                        dịch vụ in ấn, thêu logo</a></blockquote>
                </div>
            </div>
        </div>
    </>);
}

export default App;
