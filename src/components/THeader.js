import React from 'react';
import '../App.css';
import logoCHFootballBL from "../images/logoCHFootballBL.png";
// import menu from '../images/menu.png';

const THeader = () => {

    return (<div className={"header-app"}>
        <div className={"header-app-content-lr"}>
            {/*<img src={menu} className={"header-app-icon"} alt={"menu"}/>*/}
        </div>
        <div className="header-app-logo">
            <a href={"/"}
               style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img
                    id={"logoHeader"}
                    src={logoCHFootballBL}
                    alt="Logo CHFootball"
                    className={"sub-header-app-logo"}/>
            </a>
        </div>
        <div className={"header-app-content-lr"}>
        </div>
    </div>)

}

export default React.memo(THeader)