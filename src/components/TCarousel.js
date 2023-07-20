import React from "react";
import '../../src/css/home.css';
import TButtonOrder from "./TButtonOrder";

const TCarousel = () => {
    return (<div id="carouselExampleCaptions" className="carousel slide">
        {/*<div className="carousel-indicators">*/}
        {/*    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"*/}
        {/*            aria-current="true" aria-label="Slide 1"></button>*/}
        {/*    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"*/}
        {/*            aria-label="Slide 2"></button>*/}
        {/*    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"*/}
        {/*            aria-label="Slide 3"></button>*/}
        {/*</div>*/}
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="d-none d-md-block w-100" style={{height: 'auto'}}>
                    <img src="https://picsum.photos/id/678/1200/400" alt="carousel-img"/>
                </div>
                <div className="d-block d-md-none w-100" style={{height: 'auto'}}>
                    <img src="https://picsum.photos/id/678/1200/600" alt="carousel-img"/>
                </div>
                {/*Mobile --- start*/}
                <div className="carousel-caption d-block d-md-none" style={{top: '25%', bottom: 0}}>
                    <h1 style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>CHFOOTBALL</h1>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center', marginTop: 20, fontSize: 12
                    }}>CHFootball đã có kinh
                        nghiệm trong thiết kết và sản xuất đồng phục
                        bóng đá</p>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center', fontSize: 12
                    }}>Nhận được nhiều sự tin
                        tưởng của khách hàng lớn như: Trường Đại Học
                        Công Đoàn, Ngân hàng SHB, Ngân hàng CoopBank, Ngân hàng PVCombank, Bộ Thông tin và Truyền
                        thông...</p>
                    <TButtonOrder/>
                </div>
                {/*Mobile --- end*/}
                {/*Desktop --- start*/}
                <div className="carousel-caption d-none d-md-block cus_bottom">
                    <h1 style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>CHFOOTBALL</h1>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center', marginTop: 20
                    }}>CHFootball đã có kinh
                        nghiệm trong thiết kết và sản xuất đồng phục
                        bóng đá</p>
                    <p style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>Nhận được nhiều sự tin
                        tưởng của khách hàng lớn như: Trường Đại Học
                        Công Đoàn, Ngân hàng SHB, Ngân hàng CoopBank, Ngân hàng PVCombank, Bộ Thông tin và Truyền
                        thông...</p>
                    <TButtonOrder/>
                </div>
                {/*Desktop --- end*/}
            </div>
            <div className="carousel-item">
                <div className="d-none d-md-block w-100" style={{height: 'auto'}}>
                    <img src="https://picsum.photos/id/123/1200/400" alt="carousel-img"/>
                </div>
                <div className="d-block d-md-none w-100" style={{height: 'auto'}}>
                    <img src="https://picsum.photos/id/123/1200/600" alt="carousel-img"/>
                </div>
                {/*Mobile --- start*/}
                <div className="carousel-caption d-block d-md-none" style={{top: '25%', bottom: 0}}>
                    <h1 style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>CHFOOTBALL</h1>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center', marginTop: 20
                    }}>CHFootball đã có kinh
                        nghiệm trong thiết kết và sản xuất đồng phục
                        bóng đá</p>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center'
                    }}>Nhận được nhiều sự tin
                        tưởng của khách hàng lớn như: Trường Đại Học
                        Công Đoàn, Ngân hàng SHB, Ngân hàng CoopBank, Ngân hàng PVCombank, Bộ Thông tin và Truyền
                        thông...</p>
                    <TButtonOrder/>
                </div>
                {/*Mobile --- end*/}
                {/*Desktop --- start*/}
                <div className="carousel-caption d-none d-md-block cus_bottom">
                    <h1 style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>CHFOOTBALL</h1>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center', marginTop: 20
                    }}>CHFootball đã có kinh
                        nghiệm trong thiết kết và sản xuất đồng phục
                        bóng đá</p>
                    <p style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>Nhận được nhiều sự tin
                        tưởng của khách hàng lớn như: Trường Đại Học
                        Công Đoàn, Ngân hàng SHB, Ngân hàng CoopBank, Ngân hàng PVCombank, Bộ Thông tin và Truyền
                        thông...</p>
                    <TButtonOrder/>
                </div>
                {/*Desktop --- end*/}
            </div>
            <div className="carousel-item">
                <div className="d-none d-md-block w-100" style={{height: 'auto'}}>
                    <img src="https://picsum.photos/id/456/1200/400" alt="carousel-img"/>
                </div>
                <div className="d-block d-md-none w-100" style={{height: 'auto'}}>
                    <img src="https://picsum.photos/id/456/1200/600" alt="carousel-img"/>
                </div>
                {/*Mobile --- start*/}
                <div className="carousel-caption d-block d-md-none" style={{top: '25%', bottom: 0}}>
                    <h1 style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>CHFOOTBALL</h1>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center', marginTop: 20
                    }}>CHFootball đã có kinh
                        nghiệm trong thiết kết và sản xuất đồng phục
                        bóng đá</p>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center'
                    }}>Nhận được nhiều sự tin
                        tưởng của khách hàng lớn như: Trường Đại Học
                        Công Đoàn, Ngân hàng SHB, Ngân hàng CoopBank, Ngân hàng PVCombank, Bộ Thông tin và Truyền
                        thông...</p>
                    <TButtonOrder/>
                </div>
                {/*Mobile --- end*/}
                {/*Desktop --- start*/}
                <div className="carousel-caption d-none d-md-block cus_bottom">
                    <h1 style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>CHFOOTBALL</h1>
                    <p style={{
                        color: 'white', padding: 0, margin: 0, textAlign: 'center', marginTop: 20
                    }}>CHFootball đã có kinh
                        nghiệm trong thiết kết và sản xuất đồng phục
                        bóng đá</p>
                    <p style={{color: 'white', padding: 0, margin: 0, textAlign: 'center'}}>Nhận được nhiều sự tin
                        tưởng của khách hàng lớn như: Trường Đại Học
                        Công Đoàn, Ngân hàng SHB, Ngân hàng CoopBank, Ngân hàng PVCombank, Bộ Thông tin và Truyền
                        thông...</p>
                    <TButtonOrder/>
                </div>
                {/*Desktop --- end*/}
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"/>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"/>
            <span className="visually-hidden">Next</span>
        </button>
    </div>)
}

export default TCarousel
