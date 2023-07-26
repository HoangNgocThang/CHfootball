import React from "react";
import TButtonAdvise from "./TButtonAdvise";
import clb1 from "../images/clb1.jpg";
import clb2 from "../images/clb2.jpg";
import clb4 from "../images/clb4.jpg";
import clb5 from "../images/clb5.jpg";
import clb6 from "../images/clb6.jpg";
import clb7 from "../images/clb7.jpg";
import clb3 from '../images/clb3.jpg';
import phukien from "../images/phukien.png";

const ModalClubMobile = () => {

    return (<div id="myModalClubM" className="modal--thanghn">
        <div className="modal-content--thanghn21">
            <div style={{display: 'flex', flex: 1, gap: 10, flexDirection: 'column', position: 'relative'}}>
                <div style={{padding: 20, display: 'flex', flexDirection: 'row', flex: 1, backgroundColor: '#061F4D'}}>
                    <img src={phukien} style={{
                        height: 110, width: 'auto', backgroundColor: 'white', borderRadius: 10, overflow: 'hidden'
                    }}/>
                    <div style={{
                        marginLeft: 20, display: 'flex', flexDirection: 'column', flex: 3, alignItems: 'start'
                    }}>
                        <h3 style={{color: 'white', fontWeight: 'bold'}}>Mẫu câu lạc bộ có sẵn</h3>
                        <p style={{color: 'white', textAlign: 'left', fontSize: 10}}>CHFootball có các mẫu áo của các
                            câu lạc bộ bóng
                            đá ở các giải đấu trên thế giới như Ngoại hạng Anh, La Liga, Seri A, League 1,
                            Bundesliga,... cũng như các đội tuyển quốc gia. Ngoài ra, CHF cũng cung cấp các mẫu áo thi
                            đấu của các câu lạc bộ thi đấu ở V-League.</p>
                        <TButtonAdvise/>
                    </div>
                    <span style={{paddingRight: 5, paddingLeft: 5, position: 'absolute', top: 0, right: 10}}
                          className="close" onClick={() => {
                        var modal = document.getElementById("myModalClubM");
                        modal.style.display = "none";
                    }}>&times;</span>
                </div>
                <div className="container-products" style={{margin: 10}}>
                    <div className='iteamcard'>
                        <img src={clb1} className={"container-customer-img"} alt={'customer'}/>
                    </div>
                    <div className='iteamcard'>
                        <img src={clb2} className={"container-customer-img"} alt={'customer'}/>
                        <img src={clb3} className={"container-customer-img"} alt={'customer'}/>
                    </div>
                    <div className='iteamcard'>
                        <img src={clb4} className={"container-customer-img"} alt={'customer'}/>
                        <img src={clb5} className={"container-customer-img"} alt={'customer'}/>
                    </div>
                    <div className='iteamcard'>
                        <img src={clb6} className={"container-customer-img"} alt={'customer'}/>
                        <img src={clb7} className={"container-customer-img"} alt={'customer'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>)

}

export default  React.memo(ModalClubMobile);