import React from 'react';
import '../css/home.css';
import detailtech1 from "../images/detailtech1.jpg";
import dteailtech112 from '../images/dteailtech112.jpg';

const ModalVaiMobile = () => {

    return (<div id="myModalVaiM" className="d-md-none modal--thanghn">
        <div className="modal-content--thanghn2" style={{position: 'relative'}}>
                <span style={{marginLeft: 15, cursor: 'pointer', position: 'absolute', top: 0, right: 10}}
                      className="close2" onClick={() => {
                    var modal = document.getElementById("myModalVaiM");
                    modal.style.display = "none";
                }}>X</span>
            <div style={{display: 'flex', flex: 1, gap: 10, flexDirection: 'column',}}>
                <div style={{
                    display: 'flex', flex: 1, textAlign: 'left', flexDirection: 'column', justifyContent: "flex-start"
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "rgb(5, 31, 77)",
                    }}>
                        <p style={{fontSize: 18, color: 'white', margin: 0, padding: 10}}>CÔNG NGHỆ VẢI</p>
                    </div>
                    <p style={{marginTop: 30, fontSize: 14}}>Dây chuyền sản xuất của CHF có nhiều loại vải phù hợp đặc
                        thù khí hậu ở Việt Nam với chất liệu co dãn, thấm hút mồ hôi. Các loại vải phổ biến sử dụng
                        nhiều như:</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                            <p style={{fontSize: 14}}>- Vải thun lạnh</p>
                            <p style={{fontSize: 14}}>- Vải mè thái</p>
                            <p style={{fontSize: 14}}>- Vải adidas vuông</p>
                            <p style={{fontSize: 14}}>- Vải adidas mịn</p>
                            <p style={{fontSize: 14}}>- Vải kim cương 4 chiều, mè KOREA, mè sọc mịn, ...</p>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex', flex: 1, flexDirection: "row", gap: 10
                }}>
                    <img src={detailtech1} style={{width: 150, height: 150}} alt={'công nghệ vải'}/>
                    <img src={dteailtech112} style={{width: 150, height: 150}} alt={'công nghệ vải'}/>

                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalVaiMobile);
