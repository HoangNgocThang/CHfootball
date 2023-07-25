import React from "react";
import '../css/home.css';
import detailtech31 from "../images/detailtech31.png";
import detailtech32 from "../images/detailtech32.jpg";
import detailtech21 from "../images/detailtech21.jpg";
import detailtech22 from "../images/detailtech22.jpeg";

const ModalInTheuMobile = () => {
    // return (
    //     <div id="myModalInTheuM" className="modal--thanghn">
    //         <div className="modal-content--thanghn2">
    //             <span style={{paddingRight: 5, paddingLeft: 5}}
    //                   className="close2" onClick={() => {
    //                 var modal = document.getElementById("myModalInTheuM");
    //                 modal.style.display = "none";
    //             }}>&times;</span>
    //             <div style={{display: 'flex', flex: 1, gap: 10}}>
    //                 <div style={{
    //                     display: 'flex',
    //                     flex: 1,
    //                     textAlign: 'left',
    //                     flexDirection: 'column',
    //                     justifyContent: "flex-start", // position: 'relative'
    //                 }}>
    //                     <div style={{
    //                         display: 'flex',
    //                         justifyContent: 'center',
    //                         alignItems: 'center',
    //                         backgroundColor: "rgb(5, 31, 77)", // position: 'absolute',
    //                         // top: 10, left: 10,
    //                         // padding: 20,
    //                     }}>
    //                         <p style={{fontSize: 30, color: 'white', margin: 0, padding: 0}}>CÔNG NGHỆ IN-THÊU</p>
    //                     </div>
    //                     <p style={{marginTop: 30}}>Ngoài in ấn logo; tên; số, CHF còn cung cấp thêm các sản phẩm thêu,
    //                         đáp ứng đầy đủ nhu cầu của khách hàng.
    //                         Các công nghệ in chủ yếu được CHF sử dụng:</p>
    //                     <div style={{display: 'flex', flexDirection: 'row'}}>
    //                         <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
    //                             <p>- In decal</p>
    //                             <p>- In pet</p>
    //                             <p>- In mực chuyển nhiệt</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div style={{display: 'flex', flex: 1, flexDirection: 'column', gap: 10}}>
    //                     <img src={detailtech31} style={{width: 219, height: 219, alignSelf: 'end'}}/>
    //                     <img src={detailtech32} style={{width: 219, height: 219, alignSelf: "start"}}/>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )

    return (<div id="myModalInTheuM" className="modal--thanghn">
        <div className="modal-content--thanghn2">
                <span style={{marginLeft: 15, cursor: 'pointer'}}
                      className="close2" onClick={() => {
                    var modal = document.getElementById("myModalInTheuM");
                    modal.style.display = "none";
                }}>X</span>
            <div style={{display: 'flex', flex: 1, gap: 10, flexDirection: 'column',}}>
                <div style={{
                    display: 'flex', flex: 1, textAlign: 'left', flexDirection: 'column', justifyContent: "flex-start", // position: 'relative'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "rgb(5, 31, 77)", // position: 'absolute',
                        // top: 10, left: 10,
                        // padding: 20,
                    }}>
                        <p style={{fontSize: 14, color: 'white', margin: 0, padding: 0}}>CÔNG NGHỆ IN-THÊU</p>
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
                    <div style={{display: 'flex', flex: 1, flexDirection: 'column', gap: 10}}>
                        <img src={detailtech31} style={{width: 119, height: 119, alignSelf: 'end'}}/>
                        <img src={detailtech32} style={{width: 119, height: 119, alignSelf: "start"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalInTheuMobile);