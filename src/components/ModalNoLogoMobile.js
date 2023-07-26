import React from 'react';
import phukien from "../images/phukien.png";
import TButtonAdvise from "./TButtonAdvise";
import pk1 from "../images/pk1.jpg";
import pk5 from "../images/pk5.jpg";
import pk3 from "../images/pk3.jpg";
import pk6 from "../images/pk6.jpg";
import pk4 from "../images/pk4.jpg";
import pk7 from "../images/pk7.jpg";
import pk2 from "../images/pk2.jpg";
import pk8 from "../images/pk8.jpg";
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

const ModalNoLogoMobile = () => {
    return (<div id="myModalNoLogoM" className="modal--thanghn">
        <div className="modal-content--thanghn21">
            <div style={{display: 'flex', flex: 1, gap: 10, flexDirection: 'column', position: 'relative'}}>
                <div style={{padding: 20, display: 'flex', flexDirection: 'row', flex: 1, backgroundColor: '#061F4D'}}>
                    <img src={phukien} style={{
                        height: 110, width: 'auto', backgroundColor: 'white', borderRadius: 10, overflow: 'hidden'
                    }}/>
                    <div style={{
                        marginLeft: 20, display: 'flex', flexDirection: 'column', flex: 3, alignItems: 'start'
                    }}>
                        <h4 style={{color: 'white', fontWeight: 'bold', textAlign: 'left'}}>Mẫu không logo có sẵn</h4>
                        <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>CHFootball cung cấp các sản phẩm
                            các thương hiệu
                            Việt Nam như Kamito, Bulbal, Riki, CP, Wika.... với nhiều mẫu mã, chất liệu đa dạng.</p>
                        <TButtonAdvise/>
                    </div>
                    <span style={{paddingRight: 5, paddingLeft: 5, position: 'absolute', top: 0, right: 10}}
                          className="close" onClick={() => {
                        var modal = document.getElementById("myModalNoLogoM");
                        modal.style.display = "none";
                    }}>&times;</span>
                </div>
                {/*<div className="container-products" style={{margin: 10}}>*/}
                {/*    <div className='iteamcard'>*/}
                {/*        <img src={pk1} className={"container-customer-img"} alt={'customer'}/>*/}
                {/*        <img src={pk5} className={"container-customer-img"} alt={'customer'}/>*/}
                {/*    </div>*/}
                {/*    <div className='iteamcard'>*/}
                {/*        <img src={pk3} className={"container-customer-img"} alt={'customer'}/>*/}
                {/*        <img src={pk6} className={"container-customer-img"} alt={'customer'}/>*/}
                {/*    </div>*/}
                {/*    <div className='iteamcard'>*/}
                {/*        <img src={pk4} className={"container-customer-img"} alt={'customer'}/>*/}
                {/*        <img src={pk7} className={"container-customer-img"} alt={'customer'}/>*/}
                {/*    </div>*/}
                {/*    <div className='iteamcard'>*/}
                {/*        <img src={pk2} className={"container-customer-img"} alt={'customer'}/>*/}
                {/*        <img src={pk8} className={"container-customer-img"} alt={'customer'}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div style={{display: 'flex', flexDirection: 'column',}}>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
                        <img src={nologo1} className={"container-customer-img"} alt={'customer'}/>
                        <img src={nologo2} className={"container-customer-img"} alt={'customer'}/>
                        <img src={nologo3} className={"container-customer-img"} alt={'customer'}/>
                        <img src={nologo4} className={"container-customer-img"} alt={'customer'}/>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center'}}>
                    <img src={nologo5} className={"container-customer-img"} alt={'customer'}/>
                    <img src={nologo6} className={"container-customer-img"} alt={'customer'}/>
                    <img src={nologo7} className={"container-customer-img"} alt={'customer'}/>
                    <img src={nologo8} className={"container-customer-img"} alt={'customer'}/>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    marginBottom: 10
                }}>
                    <img src={nologo9} className={"container-customer-img"} alt={'customer'}/>
                    <img src={nologo10} className={"container-customer-img"} alt={'customer'}/>
                    <div className={"container-customer-img"}/>
                    <div className={"container-customer-img"}/>
                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalNoLogoMobile);