import React from 'react';
import '../css/home.css';
import detailtech1 from "../images/detailtech1.jpg";
import dtailtech1111 from '../images/dtailtech1111.png';

const ModalVaiDesktop = () => {

    return (<div id="myModalVai" className="modal--thanghn">
        <div className="modal-content--thanghn-hieu">
            <div style={{display: 'flex', flex: 2, gap: 10}}>
                <div style={{
                    display: 'flex',
                    flex: 1,
                    textAlign: 'left',
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "rgb(5, 31, 77)",
                        height: 76,
                        width: 368
                    }}>
                        <p style={{
                            fontSize: 30, fontWeight: 'bold', lineHeight: 1.2, color: 'white', margin: 0, padding: 10
                        }}>CÔNG NGHỆ VẢI</p>
                    </div>
                    <p style={{marginTop: 30, fontSize: 14}}>Dây chuyền sản xuất của CHF có nhiều loại vải phù hợp đặc
                        thù khí hậu
                        ở Việt Nam với
                        chất liệu co dãn, thấm hút mồ hôi. Các loại vải phổ biến sử dụng nhiều như:</p>
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
                    display: 'flex',
                    flex: 1,
                    position: 'relative',
                    flexDirection: 'column',
                    gap: 10
                }}>
                       <span style={{paddingRight: 5, paddingLeft: 5, position: 'absolute', top: 0, right: 10}}
                             className="close" onClick={() => {
                           var modal = document.getElementById("myModalVai");
                           modal.style.display = "none";
                       }}>&times;</span>
                    <img src={detailtech1} style={{width: 250, height: 250}} alt={'công nghệ vải'}/>
                    <img src={dtailtech1111} style={{width: 250, height: 150}} alt={"công nghệ vải"}/>
                </div>
            </div>
        </div>
    </div>)

}

export default React.memo(ModalVaiDesktop);
