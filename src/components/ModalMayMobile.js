import React from 'react';
import '../css/home.css';
import detailtech21 from "../images/detailtech21.jpg";
import detailtech22 from "../images/detailtech22.jpeg";

const ModalMayMobile = () => {

    return (<div id="myModalMayM" className="d-md-none modal--thanghn">
        <div className="modal-content--thanghn2" style={{position:'relative'}}>
              <span style={{marginLeft: 15, cursor: 'pointer', position:'absolute', top:0, right:10}}
                    className="close2" onClick={() => {
                  var modal = document.getElementById("myModalMayM");
                  modal.style.display = "none";
              }}>X</span>
            <div style={{display: 'flex', flex: 1, gap: 10, flexDirection: 'column',}}>
                <div style={{
                    display: 'flex', flex: 1, textAlign: 'left', flexDirection: 'column', justifyContent: "flex-start",
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "rgb(5, 31, 77)"
                    }}>
                        <p style={{fontSize: 18, color: 'white', margin: 0, padding: 10}}>CÔNG NGHỆ VẢI</p>
                    </div>
                    <p style={{marginTop: 30,fontSize:14}}>Với đội ngũ thợ may nhiều kinh nghiệm cùng với nhiều máy móc hiện
                        đại, CHF tự tin mang đến khách hàng những sản phẩm có chất lượng tốt nhất từ số lượng nhỏ
                        đến số lượng lớn.</p>
                </div>
                <div style={{
                    display: 'flex', flex: 1,
                }}>
                    <div style={{display: 'flex', flex: 1, flexDirection: 'column', gap: 10}}>
                        <img src={detailtech21} style={{width: 219, height: 153, alignSelf: "start"}} alt={'công nghệ may'}/>
                        <img src={detailtech22} style={{width: 219, height: 153, alignSelf: 'end'}} alt={"công nghệ may"}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalMayMobile);
