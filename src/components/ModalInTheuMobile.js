import React from "react";
import '../css/home.css';
import detailtech31 from "../images/detailtech31.png";
import detailtech32 from "../images/detailtech32.jpg";

const ModalInTheuMobile = () => {

    return (<div id="myModalInTheuM" className="d-md-none modal--thanghn">
        <div className="modal-content--thanghn2" style={{position: 'relative'}}>
                <span style={{cursor: 'pointer', position: 'absolute', top: 0, right: 10}}
                      className="close2" onClick={() => {
                    var modal = document.getElementById("myModalInTheuM");
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
                        backgroundColor: "rgb(5, 31, 77)",
                    }}>
                        <p style={{fontSize: 18, color: 'white', margin: 0, padding: 10}}>CÔNG NGHỆ IN-THÊU</p>
                    </div>
                    <p style={{marginTop: 30, fontSize: 14}}>Ngoài in ấn logo; tên; số, CHF còn cung cấp thêm các sản
                        phẩm thêu,
                        đáp ứng đầy đủ nhu cầu của khách hàng.
                        Các công nghệ in chủ yếu được CHF sử dụng:</p>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                            <p style={{fontSize: 14}}>- In decal</p>
                            <p style={{fontSize: 14}}>- In pet</p>
                            <p style={{fontSize: 14}}>- In mực chuyển nhiệt</p>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex', flex: 1,
                }}>
                    <div style={{display: 'flex', flex: 1, flexDirection: 'row', gap: 10}}>
                        <img src={detailtech31} style={{width: 119, height: 119, alignSelf: 'end'}}
                             alt={'công nghệ in thêu'}/>
                        <img src={detailtech32} style={{width: 119, height: 119, alignSelf: "start"}}
                             alt={'công nghệ in thêu'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalInTheuMobile);
