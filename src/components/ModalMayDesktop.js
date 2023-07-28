import React from 'react';
import '../css/home.css'
import detailtech21 from "../images/detailtech21.jpg";
import detailtech22 from "../images/detailtech22.jpeg";

const ModalMayDesktop = ()=> {
    return (
        <div id="myModalMay" className="modal--thanghn">
            <div className="modal-content--thanghn">
                <span style={{paddingRight: 5, paddingLeft: 5}}
                      className="close" onClick={() => {
                    var modal = document.getElementById("myModalMay");
                    modal.style.display = "none";
                }}>&times;</span>
                <div style={{display: 'flex', flex: 1, gap: 10}}>
                    <div style={{
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: "flex-start",
                        flex: 1
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: "rgb(5, 31, 77)",
                        }}>
                            <p style={{    fontSize: 30, fontWeight: 'bold', lineHeight: 1.2, color: 'white', margin: 0, padding: 10}}>CÔNG NGHỆ MAY</p>
                        </div>
                        <p style={{marginTop: 30}}>Với đội ngũ thợ may nhiều kinh nghiệm cùng với nhiều máy móc hiện
                            đại, CHF tự tin mang đến khách hàng những sản phẩm có chất lượng tốt nhất từ số lượng nhỏ
                            đến số lượng lớn.</p>
                    </div>
                    <div style={{display: 'flex', flex: 1, flexDirection: 'column', gap: 10}}>
                        <img src={detailtech21} style={{width: 219, height: 153, alignSelf: "start"}} alt={'công nghệ may'}/>
                        <img src={detailtech22} style={{width: 219, height: 153, alignSelf: 'end'}} alt={'công nghệ may'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ModalMayDesktop);
