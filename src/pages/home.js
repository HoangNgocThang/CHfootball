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

// const items = [{
//     src: 'https://picsum.photos/id/123/1200/400', altText: 'CHFOOTBALL', caption: 'CHFOOTBALL', key: 1,
// }, {
//     src: 'https://picsum.photos/id/456/1200/400', altText: 'CHFOOTBALL', caption: 'Slide 2', key: 2,
// }, {
//     src: 'https://picsum.photos/id/678/1200/400', altText: 'CHFOOTBALL', caption: 'Slide 3', key: 3,
// }];

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

        {/*Mobile product type --- d-flex d-md-none start*/}
        <div className={"d-flex d-md-none container-product-type"}>
            <h3 style={{fontWeight: 'bold'}}>{`Các sản phẩm của CHFootball`.toUpperCase()}</h3>
            <p style={{fontSize: 13, textAlign: 'center'}}>CHFootball có khả năng đa dạng sản xuất theo yêu cầu riêng
                của khách hàng</p>
            <div className={"container-product-type-row"}>
                <div className={"container-product-type-item"}>
                    <div>
                        <img src={mauthietke} className={"container-product-type-img"} alt={"mẫu thiết kế"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <p className={"container-product-type-text"}>Mẫu thiết kế</p>
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
                        <p className={"container-product-type-text"}>Mẫu không logo có sẵn</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 2</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
            </div>
            <div className={"container-product-type-row"}>
                <div className={"container-product-type-item"}>
                    <div>
                        <img src={maucaulacbocosan} className={"container-product-type-img"}
                             alt={"mẫu câu lạc bộ"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <p className={"container-product-type-text"}>Mẫu câu lạc bộ có sẵn</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 2</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
                <div className={"container-product-type-item"}>
                    <div>
                        <img src={phukien} className={"container-product-type-img"} alt={"phụ kiện"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <p className={"container-product-type-text"}>Phụ kiện</p>
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
                        <p className={"container-product-type-text"}>Mẫu thiết kế</p>
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
                        <p className={"container-product-type-text"}>Mẫu không logo có sẵn</p>
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
                        <p className={"container-product-type-text"}>Mẫu câu lạc bộ có sẵn</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 2</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
                <div className={"container-product-type-item"}>
                    <div>
                        <img src={phukien} className={"container-product-type-img"} alt={"phụ kiện"}/>
                    </div>
                    <div className={"container-product-type-wraptext"}>
                        <p className={"container-product-type-text"}>Phụ kiện</p>
                        <p className={"container-product-type-text2"}>Số lượng tối thiểu: 1</p>
                    </div>
                    <div style={{width: '100%', height: 20}}/>
                </div>
            </div>
        </div>
        {/*Desktop product type --- end*/}

        {/*<div className="container-products">*/}
        {/*    {data.map((e, i) => {*/}
        {/*        if (i === 0) {*/}
        {/*            return <div className='iteamcard' key={i + ""}>*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/342972352_747609960370931_4792094069670198249_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cFH3RlTRPMEAX_Csl_c&_nc_ht=scontent.fhan3-3.fna&oh=00_AfD2OutI2WpFWf0Kqe_CYqpl39mp3C3ilrLP4OWU0IzRIQ&oe=64A93409"*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/301953345_126103930171998_7526762796660612478_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=wXxJ3DgAyVMAX89mXua&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCed9CmMAHYZgD6fEfF6J00EomLM_uXNqwxrIQRbDbSRQ&oe=64AA3752"}*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/307703674_129639756485082_3073392131615707292_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=NIlpQ88bx2IAX8cdmEw&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBF5AGBE_XaH9IC5c1TJ9v4C_wPkRJAWD2Guqti90H0Ng&oe=64A99904"}*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*        }*/}
        {/*        if (i === 1) {*/}
        {/*            return <div className='iteamcard' key={i + ""}>*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/306355429_129393236509734_7510365682179228330_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=kkkVXgxXot4AX-7_wqc&_nc_ht=scontent.fhan4-1.fna&oh=00_AfCCvLKkTeRPT_erRg24oW9q1JwfDtYc46cMqtBafL_eNg&oe=64A9FDB7"*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/306000102_127792343336490_8860810274989650270_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eScOzB8skOwAX-EeiPh&_nc_ht=scontent.fhan3-4.fna&oh=00_AfA5JoEELj-4b_zTMdvS7TJ6y6AvPCiDIiNURD2itbO3WA&oe=64AA1175"}*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/306086195_127385943377130_4820730886942250421_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YpFpePIGmwwAX_A5Kb8&_nc_ht=scontent.fhan3-4.fna&oh=00_AfAEmdUHEEUhY9MyTeLDuT0Yl0RAxBljs_EwdUH3HQ8T1w&oe=64AAA4CC"}*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*        }*/}
        {/*        if (i === 2) {*/}
        {/*            return <div className='iteamcard' key={i + ""}>*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/299111645_120607507388307_3699044204930310152_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=jEsDUerkpWsAX_biCKS&_nc_ht=scontent.fhan3-2.fna&oh=00_AfBFjSbvo4IT_QExoJ1eiexqh8r43Zmxbn4QaYLIbpbP2w&oe=64A9A7E2"}*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/342982898_935689507745872_1801466322926761694_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_L0cvfHY484AX81sb2i&_nc_ht=scontent.fhan4-3.fna&oh=00_AfCPf3Jxxn8X4HmakZDkSnD10ipe_gB7iAnibckXwT61sA&oe=64AA5CAE"}*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/306948536_129999626449095_62413514750212951_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4g7C72RiVEUAX8L5Z1M&_nc_ht=scontent.fhan4-2.fna&oh=00_AfA556fLUeVitWjfsSeXxNsHaNdrcDTaI1JcmKK-3loxNA&oe=64AA0403"}*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*        }*/}
        {/*        if (i === 3) {*/}
        {/*            return <div className='iteamcard' key={i + ""}>*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/305979129_127792336669824_4878188787227361786_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fGqVMztiG8kAX8NVRxd&_nc_ht=scontent.fhan3-1.fna&oh=00_AfAZ1G0YFwZs-VAMgOhZpa8Ms1j9sQQpLS1nUSQIHSoHbQ&oe=64A9CB17"*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/300969367_123442587104799_760124374553361034_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=6ZdBNc8iomkAX_Ifmno&_nc_ht=scontent.fhan4-1.fna&oh=00_AfByNvThxU6LMxuBXm1mEULjP1KICnxwAKhVxyYMp4Cm5g&oe=64A93319"}*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://firebasestorage.googleapis.com/v0/b/tintucmoi24h-6c17a.appspot.com/o/347589927_2256513847854980_3155375348178503441_n.jpg?alt=media&token=bbea583b-90a6-4ad3-855d-a1537e883d57"}*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*        }*/}
        {/*        if (i === 4) {*/}
        {/*            return <div className='iteamcard' key={i + ""}>*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src="https://firebasestorage.googleapis.com/v0/b/tintucmoi24h-6c17a.appspot.com/o/v.png?alt=media&token=d6b80be7-b2b0-4a6f-ae65-f4757c3172d8"*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/309224583_132556372860087_3199277604602885980_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XFUeOLeSIp4AX_KRHtK&_nc_ht=scontent.fhan3-4.fna&oh=00_AfAnp6_ouPw0rvaqKZ1gSVGzvfirgV8lvsJA1bI7pcGnLQ&oe=64AAEF0C"}*/}
        {/*                />*/}

        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/347621983_240535082062215_7841174145727718490_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ihrGPtyZ7LUAX91_Jxj&_nc_ht=scontent.fhan4-2.fna&oh=00_AfAm_zcF60k9JfDYT5evi9QxR93wVTmdtnnW3GNHkmG-TA&oe=64A9AFA1"}*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*        }*/}
        {/*        if (i === 5) {*/}
        {/*            return <div className='iteamcard' key={i + ""}>*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/314958447_145141584934899_4660768754789138922_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d_j14U3efYsAX8xnYAB&_nc_ht=scontent.fhan4-3.fna&oh=00_AfBWEV3gE4HOELufgbjEDOjZjllsXw3gDtcPF1avEkbUBA&oe=64AA7F76"*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/315889205_146744751441249_9082638654701276282_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=rZpIq3ol4ugAX-mA4yk&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBf0jmZHTIlu-yz9Itwkb7k_4tOUbHctC11N4n4bP04JQ&oe=64AB0C61"}*/}
        {/*                />*/}
        {/*                <img*/}
        {/*                    className={'itemcard-img'}*/}
        {/*                    alt="Sample"*/}
        {/*                    src={"https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/316414969_148190024630055_2555280542635369633_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uhj7tD4eZaMAX_QVhRI&_nc_ht=scontent.fhan3-1.fna&oh=00_AfCj4etg21dY2uInC96BfzUcqoTeEj9lV-DLC7jpLngfJg&oe=64AA585D"}*/}
        {/*                />*/}
        {/*            </div>*/}
        {/*        }*/}
        {/*        return <></>*/}
        {/*    })}*/}
        {/*</div>*/}

        <div style={{width: '100%', height: 200}}>
            <a href={"https://zalo.me/0374841234"}>Website</a>
        </div>
    </div>);
}

export default Home;
