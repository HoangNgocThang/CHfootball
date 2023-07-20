import '../css/home.css';
import React, {useState, useRef} from 'react';
import chamsockhachhang from '../images/cham-soc-khach-hang.png';
import maumadadang from '../images/mau-ma-da-dang.png';
import nhieuchatlieuvai from '../images/nhieu-chat-lieu-vai.png';
import tuvantantam from '../images/tu-van-tan-tam.png';
import tuvanthietkeW from '../images/tu-van-thiet-ke-white.png';
import baogiaW from '../images/bao-gia-white.png';
import giaohangfix from '../images/giao-hang-fix.png';
import tiepnhanfix from '../images/tiep-nhan-fix.png';
import icArrowDown from '../images/down-arrow-white.png';
import maucaulacbocosan from '../images/maucaulacbocosan.png';
import maukhonglogocosan from '../images/maukhonglogocosan.png';
import mauthietke from '../images/mauthietke.png';
import phukien from '../images/phukien.png';
import TCarousel from "../components/TCarousel";
import TButtonOrder from "../components/TButtonOrder";
import shb from '../images/shb.jpg';
import bothongtin from '../images/bothongtin.png';
import congdoan from '../images/congdoan.png';
import bosch from '../images/bosch2.png';
import vnpdt from '../images/vnpdt.jpg';
import coopbank from '../images/coopbank.png';
import pv from '../images/pv.png';
import buuchinhvienthong from '../images/buuchinhvienthong.jpg';

import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.png';
import c4 from '../images/c4.jpg';
import c5 from '../images/c5.jpg';
import c6 from '../images/c6.jpg';
import c7 from '../images/c7.jpg';
import c8 from '../images/c8.jpg';
import c9 from '../images/c9.jpg';
import c10 from '../images/c10.jpg';
import c11 from '../images/c11.jpg';
import c12 from '../images/c12.jpg';
import c13 from '../images/c13.jpg';
import c14 from '../images/c14.jpg';

function Home() {
    const windowWidth = useRef(window.innerWidth);
    const windowHeight = useRef(window.innerHeight);

    console.log('width: ', windowWidth.current);
    console.log('height: ', windowHeight.current);

    return (<div>
        <TCarousel/>
        {/*Mobile* ---start */}
        <div style={{marginTop: 20}}
             className={"d-flex flex-column d-md-none"}>
            <h1 style={{color: 'black', fontWeight: 'bold'}}>Vì sao lựa chọn</h1>
            <h1 style={{color: 'black', fontWeight: 'bold'}}>CHFoootball ?</h1>
        </div>
        {/*Mobile ---end*/}
        {/*Desktop ---start*/}
        <div style={{marginTop: 20}}
             className={"d-none d-md-flex flex-row align-items-center justify-content-center"}>
            <h1 className={"text-center"} style={{color: 'black', fontWeight: 'bold'}}>Vì sao lựa chọn CHFoootball
                ?</h1>
        </div>
        {/*Desktop ---end*/}

        {/*Mobile service ---start*/}
        <div className={'d-md-none container-service'}>
            <div className={"service-row"}>
                <div className={"service-item"}>
                    <div style={{marginBottom: 12}}>
                        <img src={tuvantantam} className={"service-img"} alt={"tư vấn"}/>
                    </div>
                    <div style={{display: "flex", flexDirection: 'column'}}>
                        <p className={"service-title"}>Tư vấn tận tâm</p>
                        <p className={"service-sub-title"}>
                            {`CHFootball có đội ngũ nhân viên có kinh nghiệm trong lĩnh vực thiết kế đồng phục sẽ tận tình tư vấn và đề xuất các ý tưởng thiết kế phù hợp với yêu cầu của bạn.`}
                        </p>
                    </div>
                </div>
                <div className={"service-item"}>
                    <div style={{marginBottom: 12}}>
                        <img src={maumadadang} className={"service-img"} alt={"mẫu mã"}/>
                    </div>
                    <div style={{display: "flex", flexDirection: 'column'}}>
                        <p className={"service-title"}>Mẫu mã đa dạng</p>
                        <p className={"service-sub-title"}>
                            {`CHFootball có đa dạng các mẫu mã đồng phục để bạn lựa chọn, giúp bạn tìm được thiết kế và kiểu dáng phù hợp với nhu cầu và phong cách cho đội bóng/ doanh nghiệp của mình.`}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"service-row"}>
                <div className={"service-item"}>
                    <div style={{marginBottom: 12}}>
                        <img src={nhieuchatlieuvai} className={"service-img"} alt={"chất liệu vải"}/>
                    </div>
                    <div style={{display: "flex", flexDirection: 'column'}}>
                        <p className={"service-title"}>Nhiều chất liệu vải</p>
                        <p className={"service-sub-title"}>
                            {`CHFootball có nhiều dòng vải từ bình dân đến cao cấp, phù hợp với nhu cầu của hầu hết các khách hàng. Chất lượng in ấn sắc nét, tươi sáng. Đường may chắc chắn.`}
                        </p>
                    </div>
                </div>
                <div className={"service-item"}>
                    <div style={{marginBottom: 12}}>
                        <img src={chamsockhachhang} className={"service-img"} alt={"chăm sóc khách hàng"}/>
                    </div>
                    <div style={{display: "flex", flexDirection: 'column'}}>
                        <p className={"service-title"}>Chương trình ưu đãi</p>
                        <p className={"service-sub-title"}>
                            {`CHFootball có các chương trình khuyến mãi cho khách hàng tuỳ thuộc vào số lượng.
Các phần quà đặc biệt cho khách hàng quay lại/ khách hàng thân thiết`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/*Mobile service ---end*/}
        {/*Desktop service ---start*/}
        <div className={"d-none d-md-flex container-service__desktop"}>
            <div className={"service-item"}>
                <div style={{marginBottom: 12}}>
                    <img src={tuvantantam} className={"service-img"} alt={"tư vấn"}/>
                </div>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <p className={"service-title"}>Tư vấn tận tâm</p>
                    <div style={{display: "flex", flex: 1, minHeight: 90}}>
                        <p className={"service-sub-title"}>
                            {`CHFootball có đội ngũ nhân viên có kinh nghiệm trong lĩnh vực thiết kế đồng phục sẽ tận tình tư vấn và đề xuất các ý tưởng thiết kế phù hợp với yêu cầu của bạn.`}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"service-item"}>
                <div style={{marginBottom: 12}}>
                    <img src={maumadadang} className={"service-img"} alt={"mẫu mã"}/>
                </div>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <p className={"service-title"}>Mẫu mã đa dạng</p>
                    <div style={{display: "flex", flex: 1, minHeight: 90}}>
                        <p className={"service-sub-title"}>
                            {`CHFootball có đa dạng các mẫu mã đồng phục để bạn lựa chọn, giúp bạn tìm được thiết kế và kiểu dáng phù hợp với nhu cầu và phong cách cho đội bóng/ doanh nghiệp của mình.`}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"service-item"}>
                <div style={{marginBottom: 12}}>
                    <img src={nhieuchatlieuvai} className={"service-img"} alt={"chất liệu vải"}/>
                </div>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <p className={"service-title"}>Nhiều chất liệu vải</p>
                    <div style={{display: "flex", flex: 1, minHeight: 90}}>
                        <p className={"service-sub-title"}>
                            {`CHFootball có nhiều dòng vải từ bình dân đến cao cấp, phù hợp với nhu cầu của hầu hết các khách hàng. Chất lượng in ấn sắc nét, tươi sáng. Đường may chắc chắn.`}
                        </p>
                    </div>
                </div>
            </div>
            <div className={"service-item"}>
                <div style={{marginBottom: 12}}>
                    <img src={chamsockhachhang} className={"service-img"} alt={"chăm sóc khách hàng"}/>
                </div>
                <div style={{display: "flex", flexDirection: 'column'}}>
                    <p className={"service-title"}>Chương trình ưu đãi</p>
                    <div style={{display: "flex", flex: 1, minHeight: 90}}>
                        <p className={"service-sub-title"}>
                            {`CHFootball có các chương trình khuyến mãi cho khách hàng tuỳ thuộc vào số lượng.
Các phần quà đặc biệt cho khách hàng quay lại/ khách hàng thân thiết`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/*Desktop service ----end*/}

        {/*Mobile procedure ---start*/}
        <div className={"d-flex d-md-none container-procedure"}>
            <div className={"procedure-header"}>
                <h3 className={"procedure-header-text"}>CHFootball</h3>
                <h3 className={"procedure-header-text"}>hoạt động như thế nào ?</h3>
                <div>
                    <TButtonOrder/>
                </div>
            </div>
            <div className={"procedure-item"}>
                <div className={"procedure-icon"}>
                    <img src={tiepnhanfix} className={"procedure-icon-img"} alt={"tiếp nhận"}/>
                </div>
                <div className={"procedure-content"}>
                    <b>Tiếp nhận yêu cầu</b>
                    <p>Khách hàng gửi yêu cầu trực tiếp qua Hotline/Zalo : 037 484 1234</p>
                </div>
            </div>
            <div>
                <img
                    src={icArrowDown}
                    style={{width: 20, height: 20, marginBottom: 10, marginTop: 10}}
                    alt={"mũi tên"}
                />
            </div>
            <div className={"procedure-item"}>
                <div className={"procedure-icon"}>
                    <img src={tuvanthietkeW} className={"procedure-icon-img"} alt={"thiết kế"}/>
                </div>
                <div className={"procedure-content"}>
                    <b>Tư vấn thiết kế</b>
                    <p>CHFootball tư vấn mẫu, màu sắc và lên market để khách hàng duyệt và chỉnh sửa.</p>
                </div>
            </div>
            <div>
                <img
                    src={icArrowDown}
                    style={{width: 20, height: 20, marginBottom: 10, marginTop: 10}}
                    alt={"mũi tên"}
                />
            </div>
            <div className={"procedure-item"}>
                <div className={"procedure-icon"}>
                    <img src={baogiaW} className={"procedure-icon-img"} alt={"báo giá"}/>
                </div>
                <div className={"procedure-content"}>
                    <b>Báo giá</b>
                    <p>Sau khi khách hàng chốt mẫu, CHFootball sẽ tư vấn các loại vải và báo giá cho khách hàng</p>
                </div>
            </div>
            <div>
                <img
                    src={icArrowDown}
                    style={{width: 20, height: 20, marginBottom: 10, marginTop: 10}}
                    alt={"mũi tên"}
                />
            </div>
            <div className={"procedure-item"}>
                <div className={"procedure-icon"}>
                    <img src={giaohangfix} style={{width: 60, height: 60}} alt={"giao hàng"}/>
                </div>
                <div className={"procedure-content"}>
                    <b>Giao Hàng</b>
                    <p>Sau khi hoàn thiện sản phẩm, CHFootball sẽ giao hàng đến địa chỉ của khách hàng.</p>
                </div>
            </div>
        </div>
        {/*Mobile procedure ---end*/}
        {/*Desktop procedure ---start*/}
        <div className={"d-none d-md-flex container-procedure__desktop"}>
            <div className={"procedure-header__desktop"}>
                <h3 className={"procedure-header-text text-center"} style={{color: '#153870'}}>CHFootball</h3>
                <h3 className={"procedure-header-text text-center"} style={{color: '#153870'}}>hoạt động</h3>
                <h3 className={"procedure-header-text text-center"} style={{color: '#153870'}}>như thế nào ?</h3>
                <TButtonOrder/>
            </div>
            <div className="procedure-content__desktop">
                <div className={"procedure-item__desktop"}>
                    <div className={"procedure-item-wrap-img__desktop"}>
                        <img src={tiepnhanfix} className={"procedure-icon-img__desktop"} alt={"tiếp nhận"}/>
                    </div>
                    <div className="procedure-item-wrap-text__desktop">
                        <div style={{height: 45}}>
                            <b className={"procedure-item-title__desktop"}>Tiếp nhận yêu cầu</b>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <p className={"procedure-item-text__desktop"}>Khách hàng gửi yêu cầu trực tiếp qua
                                Hotline/Zalo:
                                037 484 1234</p>
                        </div>
                    </div>
                </div>
                <div className={"procedure-item-wrap-img__desktop"}>
                    <img
                        src={icArrowDown}
                        className={"procedure-item-icon-right"}
                        alt={"mũi tên"}
                    />
                </div>
                <div className={"procedure-item__desktop"}>
                    <div className={"procedure-item-wrap-img__desktop"}>
                        <img src={tuvanthietkeW} className={"procedure-icon-img__desktop"} alt={"thiết kế"}/>
                    </div>
                    <div className="procedure-item-wrap-text__desktop">
                        <div style={{height: 45}}>
                            <b className={"procedure-item-title__desktop"}>Tư vấn thiết kế</b>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <p className={"procedure-item-text__desktop"}>CHFootball tư vấn mẫu, màu sắc ... và lên
                                Market
                                để khách hàng duyệt và chỉnh sửa.</p>
                        </div>
                    </div>
                </div>
                <div className={"procedure-item-wrap-img__desktop"}>
                    <img
                        src={icArrowDown}
                        className={"procedure-item-icon-right"}
                        alt={"mũi tên"}
                    />
                </div>
                <div className={"procedure-item__desktop"}>
                    <div className={"procedure-item-wrap-img__desktop"}>
                        <img src={baogiaW} className={"procedure-icon-img__desktop"} alt={"báo giá"}/>
                    </div>
                    <div className="procedure-item-wrap-text__desktop">
                        <div style={{height: 45}}>
                            <b className={"procedure-item-title__desktop"}>Báo giá</b>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <p className={"procedure-item-text__desktop"}>Sau khi khách hàng chốt mẫu, CHFootball sẽ tư
                                vấn
                                các loại vải và báo giá cho khách hàng</p>
                        </div>
                    </div>
                </div>
                <div className={"procedure-item-wrap-img__desktop"}>
                    <img
                        src={icArrowDown}
                        className={"procedure-item-icon-right"}
                        alt={"mũi tên"}
                    />
                </div>
                <div className={"procedure-item__desktop"}>
                    <div className={"procedure-item-wrap-img__desktop"}>
                        <img src={giaohangfix} className={"procedure-icon-img__desktop"} alt={"giao hàng"}/>
                    </div>
                    <div className="procedure-item-wrap-text__desktop">
                        <div style={{height: 45}}>
                            <b className={"procedure-item-title__desktop"}>Giao Hàng</b>
                        </div>
                        <div style={{display: 'flex', flex: 1}}>
                            <p className={"procedure-item-text__desktop"}> Sau khi hoàn thiện sản phẩm, CHFootball sẽ
                                giao
                                hàng đến địa chỉ của khách hàng.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/*Desktop procedure ---end*/}

        {/*Mobile product type --- start*/}
        <div className={"d-flex d-md-none container-product-type"}>
            <h3 style={{fontWeight: 'bold'}}>{`Các sản phẩm của CHFootball`.toUpperCase()}</h3>
            <p style={{fontSize: 13, textAlign: 'center'}}>CHFootball có khả năng đa dạng sản xuất theo yêu cầu riêng
                của khách hàng</p>
            <div className={"container-product-type-row"}>
                <div className={"container-product-type-item"} style={{maxWidth: 180}}>
                    <div>
                        <img src={mauthietke} className={"container-product-type-img"} alt={"mẫu thiết kế"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <p className={"container-product-type-text"} style={{fontSize: 14}}>Mẫu thiết kế</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 7</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
                <div className={"container-product-type-item"} style={{maxWidth: 180}}>
                    <div>
                        <img src={maukhonglogocosan} className={"container-product-type-img"}
                             alt={"mẫu không logo"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <p className={"container-product-type-text"} style={{fontSize: 14}}>Mẫu không logo có sẵn</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 2</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
            </div>
            <div className={"container-product-type-row"}>
                <div className={"container-product-type-item"} style={{maxWidth: 180}}>
                    <div>
                        <img src={maucaulacbocosan} className={"container-product-type-img"}
                             alt={"mẫu câu lạc bộ"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <p className={"container-product-type-text"} style={{fontSize: 14}}>Mẫu câu lạc bộ có sẵn</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 2</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
                <div className={"container-product-type-item"} style={{maxWidth: 180}}>
                    <div>
                        <img src={phukien} className={"container-product-type-img"} alt={"phụ kiện"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <p className={"container-product-type-text"} style={{fontSize: 14}}>Phụ kiện</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 1</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
            </div>
        </div>
        {/*Mobile product type --- end*/}
        {/*Desktop product type --- start*/}
        <div className={"d-none d-md-flex container-product-type__desktop"}>
            <h3 style={{fontWeight: 'bold'}}>{`Các sản phẩm của CHFootball`.toUpperCase()}</h3>
            <p style={{fontSize: 13, textAlign: 'center'}}>CHFootball có khả năng đa dạng sản xuất theo yêu cầu riêng
                của khách hàng</p>
            <div className={"container-product-type-row"} style={{gap: 20}}>
                <div className={"container-product-type-item"}>
                    <div>
                        <img src={mauthietke} className={"container-product-type-img"} alt={"mẫu thiết kế"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <div style={{height: 48}} className={"d-xxl-none d-xl-none d-lg-none d-md-inline d-sm-none"}>
                            <p className={"container-product-type-text"}>Mẫu thiết kế</p>
                        </div>
                        <p className={"container-product-type-text d-xxl-inline d-xl-inline d-lg-inline d-md-none d-sm-none"}>Mẫu
                            thiết kế</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 7</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
                <div className={"container-product-type-item"}>
                    <div>
                        <img src={maukhonglogocosan} className={"container-product-type-img"}
                             alt={"mẫu không logo"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <div style={{height: 48,}} className={"d-xxl-none d-xl-none d-lg-none d-md-inline d-sm-none"}>
                            <p className={"container-product-type-text"}>Mẫu không logo có sẵn</p>
                        </div>
                        <p className={"container-product-type-text d-xxl-inline d-xl-inline d-lg-inline d-md-none d-sm-none"}>Mẫu
                            không logo có sẵn</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 2</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
                <div className={"container-product-type-item"}>
                    <div>
                        <img src={maucaulacbocosan} className={"container-product-type-img"}
                             alt={"mẫu câu lạc bộ"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <div style={{height: 48}} className={"d-xxl-none d-xl-none d-lg-none d-md-inline d-sm-none"}>
                            <p className={"container-product-type-text"}>Mẫu câu lạc bộ có sẵn</p>
                        </div>
                        <p className={"container-product-type-text d-xxl-inline d-xl-inline d-lg-inline d-md-none d-sm-none"}>Mẫu
                            câu lạc bộ có sẵn</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 2</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
                <div className={"container-product-type-item"}>
                    <div>
                        <img src={phukien} className={"container-product-type-img"} alt={"phụ kiện"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <div style={{height: 48}} className={"d-xxl-none d-xl-none d-lg-none d-md-inline d-sm-none"}>
                            <p className={"container-product-type-text"}>Phụ kiện</p>
                        </div>
                        <p className={"container-product-type-text d-xxl-inline d-xl-inline d-lg-inline d-md-none d-sm-none"}>Phụ
                            kiện</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 1</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
            </div>
        </div>
        {/*Desktop product type --- end*/}

        {/*Mobile customer ---start*/}
        <div className={"container-customer"}>
            <h3 style={{fontWeight: 'bold'}}>{`Khách hàng của CHFootball`}</h3>
            <div>
                <div style={{width: 100, height: 1, backgroundColor: 'black'}}></div>
            </div>
            <div className={"container-customer-wrap-imgs"}>
                <div style={{width: 35, height: 35}}>
                    <img src={shb} style={{width: 35, height: 35, backgroundColor: 'white'}} alt={"shb"}/>
                </div>
                <div style={{width: 35, height: 35}}>
                    <img src={bothongtin} style={{width: 35, height: 35, backgroundColor: 'white'}} alt={"bothongtin"}/>
                </div>
                <div style={{width: 35, height: 35}}>
                    <img src={bosch} style={{width: 35, height: 35, backgroundColor: 'white'}}/>
                </div>
                <div style={{width: 35, height: 35}}>
                    <img src={congdoan} style={{width: 35, height: 35, backgroundColor: 'white'}}/>
                </div>
                <div style={{width: 30, height: 30}}>
                    <img src={buuchinhvienthong} style={{width: 35, height: 35, backgroundColor: 'white'}}/>
                </div>
                <div style={{width: 35, height: 35}}>
                    <img src={vnpdt} style={{width: 35, height: 35, backgroundColor: 'white'}}/>
                </div>
                <div style={{width: 35, height: 35}}>
                    <img src={coopbank} style={{width: 35, height: 35, backgroundColor: 'white'}}/>
                </div>
                <div style={{width: 30, height: 30}}>
                    <img src={pv} style={{width: 35, height: 35, backgroundColor: 'white'}}/>
                </div>
            </div>

            <div className="container-products">
                <div className='iteamcard' >
                    <img src={c6} className={"container-customer-img"}/>
                    <img src={c1} className={"container-customer-img"}/>
                    <img src={c2} className={"container-customer-img"}/>
                </div>
                <div className='iteamcard'>
                    <img src={c3} className={"container-customer-img"}/>
                    <img src={c4} className={"container-customer-img"}/>
                    <img src={c5} className={"container-customer-img"}/>
                    <img src={c14} className={"container-customer-img"}/>
                </div>
                <div className='iteamcard'>
                    <img src={c7} className={"container-customer-img"}/>
                    <img src={c8} className={"container-customer-img"}/>
                    <img src={c7} className={"container-customer-img"}/>
                    <img src={c13} className={"container-customer-img"}/>
                </div>
                <div className='iteamcard'>
                    <img src={c9} className={"container-customer-img"}/>
                    <img src={c10} className={"container-customer-img"}/>
                    <img src={c11} className={"container-customer-img"}/>
                    <img src={c12} className={"container-customer-img"}/>
                </div>
            </div>
        </div>
        {/*Mobile customer ---end*/}



    </div>);
}

export default Home;
