import React from "react";
import TButtonAdvise from "./TButtonAdvise";
import phukien from "../images/phukien.png";
import clb1 from "../images/clb1.jpg";
import clb2 from "../images/clb2.jpg";
import clb3 from "../images/clb3.jpg";
import clb4 from "../images/clb4.jpg";
import clb5 from "../images/clb5.jpg";
import clb6 from "../images/clb6.jpg";
import clb7 from "../images/clb7.jpg";

import pk1 from '../images/pk1.jpg';
import pk2 from '../images/pk2.jpg';
import pk3 from '../images/pk3.jpg';
import pk4 from '../images/pk4.jpg';
import pk5 from '../images/pk5.jpg';
import pk6 from '../images/pk6.jpg';
import pk7 from '../images/pk7.jpg';
import pk8 from '../images/pk8.jpg';

const ModalAccessoryDesktop = () => {

    return (<div id="myModalAccessory" className="modal--thanghn">
        <div className="modal-content--thanghn4">
            <div style={{display: 'flex', flex: 1, gap: 10, flexDirection: 'column', position: 'relative'}}>
                <div style={{padding: 20, display: 'flex', flexDirection: 'row', flex: 1, backgroundColor: '#061F4D'}}>
                    <img src={phukien} style={{
                        height: 160, width: 'auto', backgroundColor: 'white', borderRadius: 10, overflow: 'hidden'
                    }}/>
                    <div style={{
                        marginLeft: 20, display: 'flex', flexDirection: 'column', flex: 3, alignItems: 'start'
                    }}>
                        <h3 style={{color: 'white', fontWeight: 'bold'}}>Mẫu câu lạc bộ có sẵn</h3>
                        <p style={{color: 'white', textAlign: 'left', fontSize: 12}}>Phụ kiện là thứ không thể thiếu mỗi
                            khi ra sân thi đấu. Ở CHF, chúng tôi có sẵn các mẫu balo, tất vớ, băng cuốn, bóng thi
                            đấu,... Ngoài ra, CHF cũng hỗ trợ việc in ấn/ thêu logo, tên, số lên các sản phẩm phụ kiện
                            như tất, balo, mũ nón....</p>
                        <TButtonAdvise/>
                    </div>
                    <span style={{paddingRight: 5, paddingLeft: 5, position: 'absolute', top: 0, right: 10}}
                          className="close" onClick={() => {
                        var modal = document.getElementById("myModalAccessory");
                        modal.style.display = "none";
                    }}>&times;</span>
                </div>
                <div className="container-products" style={{margin: 10}}>
                    <div className='iteamcard'>
                        <img src={pk1} className={"container-customer-img3"} alt={'customer'}/>
                        <img src={pk5} className={"container-customer-img3"} alt={'customer'}/>
                    </div>
                    <div className='iteamcard'>
                        <img src={pk3} className={"container-customer-img3"} alt={'customer'}/>
                        <img src={pk6} className={"container-customer-img3"} alt={'customer'}/>
                    </div>
                    <div className='iteamcard'>
                        <img src={pk4} className={"container-customer-img3"} alt={'customer'}/>
                        <img src={pk7} className={"container-customer-img3"} alt={'customer'}/>
                    </div>
                    <div className='iteamcard'>
                        <img src={pk2} className={"container-customer-img3"} alt={'customer'}/>
                        <img src={pk8} className={"container-customer-img3"} alt={'customer'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalAccessoryDesktop);