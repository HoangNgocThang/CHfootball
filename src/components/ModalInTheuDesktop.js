import React from "react";
import '../css/home.css'
import detailtech31 from "../images/detailtech31.png";
import detailtech32 from "../images/detailtech32.jpg";

const ModalInTheuDesktop = () => {
    return (<div id="myModalInTheu" className="modal--thanghn">
            <div className="modal-content--thanghn">
                <span style={{paddingRight: 5, paddingLeft: 5}}
                      className="close" onClick={() => {
                    var modal = document.getElementById("myModalInTheu");
                    modal.style.display = "none";
                }}>&times;</span>
                <div style={{display: 'flex', flex: 1, gap: 10}}>
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
                        }}>
                            <p style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                lineHeight: 1.2,
                                color: 'white',
                                margin: 0,
                                padding: 10
                            }}>CÔNG NGHỆ IN-THÊU</p>
                        </div>
                        <p style={{marginTop: 30}}>Ngoài in ấn logo; tên; số, CHF còn cung cấp thêm các sản phẩm thêu,
                            đáp ứng đầy đủ nhu cầu của khách hàng.
                            Các công nghệ in chủ yếu được CHF sử dụng:</p>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                                <p>- In decal</p>
                                <p>- In pet</p>
                                <p>- In mực chuyển nhiệt</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flex: 1, flexDirection: 'column', gap: 10}}>
                        <img src={detailtech31} style={{width: 219, height: 219, alignSelf: 'end'}}
                             alt={'công nghệ in thêu'}/>
                        <img src={detailtech32} style={{width: 219, height: 219, alignSelf: "start"}}
                             alt={'công nghệ in thêu'}/>
                    </div>
                </div>
            </div>
        </div>)
}

export default React.memo(ModalInTheuDesktop);
