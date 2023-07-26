import React from "react";
import maukhonglogocosan from "../images/maukhonglogocosan.png";
import TButtonAdvise from "./TButtonAdvise";
import nologo1 from "../images/nologo1.png";
import nologo2 from "../images/nologo2.png";
import nologo3 from "../images/nologo3.jpg";
import nologo4 from "../images/nologo4.jpg";
import nologo5 from "../images/nologo5.jpg";
import nologo6 from "../images/nologo6.jpg";
import nologo7 from "../images/nologo7.jpg";
import nologo8 from "../images/nologo8.jpg";
import nologo9 from "../images/nologo9.jpg";
import nologo10 from "../images/nologo10.jpg";

const ModalAccessoryDesktop = () => {

    return (<div id="myModalAccessory" className="modal--thanghn">
        <div className="modal-content--thanghn3">
            <div style={{display: 'flex', flex: 1, gap: 10, flexDirection: 'column', position: 'relative'}}>
                <div style={{display: 'flex', flexDirection: 'row', flex: 1, backgroundColor: '#061F4D'}}>
                    <img src={maukhonglogocosan} style={{height: 160, width: 'auto'}}/>
                    <div style={{display: 'flex', flexDirection: 'column', flex: 3, alignItems: 'start'}}>
                        <p style={{color: 'white'}}>Mẫu không logo có sẵn</p>
                        <p style={{color: 'white', textAlign: 'left'}}>1CHFootball cung cấp các sản phẩm các thương hiệu
                            Việt Nam như Kamito, Bulbal, Riki, CP, Wika.... với nhiều mẫu mã, chất liệu đa dạng.</p>
                        <TButtonAdvise/>
                    </div>
                    <span style={{paddingRight: 5, paddingLeft: 5, position: 'absolute', top: 0, right: 10}}
                          className="close" onClick={() => {
                        var modal = document.getElementById("myModalAccessory");
                        modal.style.display = "none";
                    }}>&times;</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center'}}>
                        <img src={nologo1} style={{
                            width: 190.521,
                            height: 253.773
                        }}/>
                        <img src={nologo2} style={{
                            width: 190.521,
                            height: 253.773
                        }}/>
                        <img src={nologo3} style={{
                            width: 190.521,
                            height: 253.773
                        }}/>
                        <img src={nologo4} style={{
                            width: 190.521,
                            height: 253.773
                        }}/>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center'}}>
                    <img src={nologo5} style={{
                        width: 190.521,
                        height: 253.773
                    }}/>
                    <img src={nologo6} style={{
                        width: 190.521,
                        height: 253.773
                    }}/>
                    <img src={nologo7} style={{
                        width: 190.521,
                        height: 253.773
                    }}/>
                    <img src={nologo8} style={{
                        width: 190.521,
                        height: 253.773
                    }}/>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center'}}>
                    <img src={nologo9} style={{
                        width: 190.521,
                        height: 253.773
                    }}/>
                    <img src={nologo10} style={{
                        width: 190.521,
                        height: 253.773
                    }}/>
                    <div style={{
                        width: 190.521,
                        height: 253.773
                    }}/>
                    <div src={nologo4} style={{
                        width: 190.521,
                        height: 253.773
                    }}/>
                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalAccessoryDesktop);