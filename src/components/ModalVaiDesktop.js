import React from 'react';
import '../css/home.css';
import detailtech1 from "../images/detailtech1.jpg";

const ModalVaiDesktop = () => {

    return (<div id="myModalVai" className="modal--thanghn">
            <div className="modal-content--thanghn">
                <span style={{paddingRight: 5, paddingLeft: 5}}
                      className="close" onClick={() => {
                    var modal = document.getElementById("myModalVai");
                    modal.style.display = "none";
                }}>&times;</span>
                <div style={{display: 'flex', flex: 1, gap: 10}}>
                    <div style={{
                        display: 'flex',
                        flex: 1,
                        textAlign: 'left',
                        flexDirection: 'column',
                        justifyContent: "flex-start", // position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: "rgb(5, 31, 77)", // position: 'absolute',
                            // top: 10, left: 10,
                            // padding: 20,
                        }}>
                            <p style={{fontSize: 30, color: 'white', margin: 0, padding: 0}}>CÔNG NGHỆ VẢI</p>
                        </div>
                        <p style={{marginTop: 30}}>Dây chuyền sản xuất của CHF có nhiều loại vải phù hợp đặc thù khí hậu
                            ở Việt Nam với
                            chất liệu co dãn, thấm hút mồ hôi. Các loại vải phổ biến sử dụng nhiều như:</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                                <p>- Vải thun lạnh</p>
                                <p>- Vải mè thái</p>
                                <p>- Vải adidas vuông</p>
                                <p>- Vải adidas mịn</p>
                                <p>- Vải kim cương 4 chiều</p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex', flex: 1,
                    }}>
                        <img src={detailtech1} style={{width: 400, height: 400}}/>
                    </div>
                </div>
            </div>
        </div>)

}

export default React.memo(ModalVaiDesktop);