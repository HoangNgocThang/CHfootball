import './App.css';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  //CardText,
  CardTitle,
  Button,
  CardSubtitle
} from 'reactstrap';
import menu from '../src/images/menu.png';
import logoCHFootballBL from '../src/images/logoCHFootballBL.png';
// import banner1 from '../src/images/banner1.jpg';
// import ic_right from '../src/images/ic_right.png';
// import abc from '../src/images/11.png';
import chamsockhachhang from '../src/images/cham-soc-khach-hang.png';
import maumadadang from '../src/images/mau-ma-da-dang.png';
import nhieuchatlieuvai from '../src/images/nhieu-chat-lieu-vai.png';
import tuvantantam from '../src/images/tu-van-tan-tam.png';
import giaohang from '../src/images/giao-hang.png';
import tuvanthietke from '../src/images/tu-van-thiet-ke.png';
import baogia from '../src/images/bao-gia.png';
import tiepnhanyeucau from '../src/images/tiep-nhan-yeu-cau.png';
import giaohangW from '../src/images/giao-hang-white.png';
import tuvanthietkeW from '../src/images/tu-van-thiet-ke-white.png';
import baogiaW from '../src/images/bao-gia-white.png';
import tiepnhanyeucauW from '../src/images/tiep-nhan-yeu-cau-white.png';
import icArrowDown from '../src/images/down-arrow-white.png';
import user from '../src/images/user.png';
import userWhite from '../src/images/userWhite.png';

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
  {
    src: 'https://aressport.vn/wp-content/uploads/2020/04/Banner-Official.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4',
    key: 4,
  },
];

function App() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: '100%', height: 250 }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const [data
    // ,setData
  ] = useState([{}, {}, {}, {}]);

  return (
    <div className="App">
      <div className={"header-app"}>
        <div className={"header-app-content-lr"}>
          <img src={menu} className={"header-app-icon"} />
        </div>
        <div className="header-app-logo">
          <img src={logoCHFootballBL}
            alt="Logo CH Foootball"
            className={"sub-header-app-logo"} />
        </div>
        <div className={"header-app-content-lr"}>
        </div>
      </div>
      <div style={{ display: 'flex', width: '100%', height: 5 }}></div>
       <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      <div>
        <h1>Vì sao lựa chọn</h1>
        <h1>CH Foootball ?</h1>
      </div>

      <div className={'container-service'}>
        <div className={"service-row"}>
          <div className={"service-item"}>
              <div style={{marginBottom:12}}>
                 <img src={tuvantantam} className={"service-img"}/>
             </div>
              <div style={{display:"flex", flexDirection: 'column'}}>
                  <p className={"service-title"}>Tư vấn tận tâm</p>
                  <p className={"service-sub-title"}>
                      {`CHFootball có đội ngũ nhân viên có kinh nghiệm trong lĩnh vực thiết kế đồng phục.
                Chúng tôi có thể tư vấn và đề xuất các ý tưởng thiết kế phù hợp với yêu cầu của bạn cho đến khi ưng ý, giúp bạn tạo ra đồng phục độc đáo và phù hợp với thương hiệu của bạn.`}
                  </p>
              </div>
          </div>
          <div className={"service-item"}>
              <div style={{marginBottom:12}}>
                  <img src={maumadadang} className={"service-img"}/>
              </div>
              <div style={{display:"flex", flexDirection: 'column'}}>
                  <p className={"service-title"}>Mẫu mã đa dạng</p>
                  <p className={"service-sub-title"}>
                      {`CHFootball có đa dạng các mẫu mã đồng phục để bạn lựa chọn.
                Điều này giúp bạn tìm được thiết kế và kiểu dáng phù hợp với nhu cầu và phong cách cho đội bóng, doanh nghiệp của mình.`}
                  </p>
              </div>
          </div>
        </div>
          <div className={"service-row"}>
              <div className={"service-item"}>
                  <div style={{marginBottom:12}}>
                      <img src={nhieuchatlieuvai} className={"service-img"}/>
                  </div>
                  <div style={{display:"flex", flexDirection: 'column'}}>
                      <p className={"service-title"}>Nhiều chất liệu vải</p>
                      <p className={"service-sub-title"}>
                          {`CHFootball có nhiều dòng vải từ bình dân đến cao cấp, phù hợp với nhu cầu của hầu hết các khách hàng 
Các sản phẩm được sản xuất bởi CHFootball luôn mang đến cho khách hàng những trải nghiệm tốt nhất.`}
                      </p>
                  </div>
              </div>
              <div className={"service-item"}>
                  <div style={{marginBottom:12}}>
                      <img src={chamsockhachhang} className={"service-img"}/>
                  </div>
                  <div style={{display:"flex", flexDirection: 'column'}}>
                      <p className={"service-title"}>Chăm sóc khách hàng</p>
                      <p className={"service-sub-title"}>
                          {`CHFootball có các chương trình khuyến mãi cho khách hàng tuỳ thuộc vào số lượng.
Các chương trình cho khách hàng quay lại, khách hàng thân thiết.`}
                      </p>
                  </div>
              </div>
          </div>
      </div>

      <div className={"container-procedure"}>

          <div className={"procedure-header"}>
              <h3 className={"procedure-header-text"}>CH FOOTBALL</h3>
              <h3 className={"procedure-header-text"}>hoạt động như thế nào ?</h3>
          </div>

          <div className={"procedure-item"}>
              <div className={"procedure-icon"}>
                  <img src={tiepnhanyeucauW} className={"procedure-icon"}/>
              </div>
              <div className={"procedure-content"}>
                  <b>Tiếp nhận yêu cầu</b>
                  <p>Khách hàng gửi yêu cầu trực tiếp qua Hotline/Zalo : 037 484 1234</p>
              </div>
          </div>
          <div>
              <img src={icArrowDown} style={{width:20, height:20, marginBottom:10, marginTop:10}}/>
          </div>
          <div className={"procedure-item"}>
              <div className={"procedure-icon"}>
                  <img src={tuvanthietkeW} className={"procedure-icon"}/>
              </div>
              <div className={"procedure-content"}>
                  <b>Tư vấn thiết kế</b>
                  <p>CHFootball tư vấn mẫu, màu sắc ... và lên Market để khách hàng duyệt và chỉnh sửa.</p>
              </div>
          </div>
          <div>
              <img src={icArrowDown} style={{width:20, height:20, marginBottom:10, marginTop:10}}/>
          </div>
          <div className={"procedure-item"}>
              <div className={"procedure-icon"}>
                  <img src={baogiaW} className={"procedure-icon"}/>
              </div>
              <div className={"procedure-content"}>
                  <b>Báo giá</b>
                  <p>Sau khi khách hàng chốt mẫu, CHFootball sẽ tư vấn các loại vải và báo giá cho khách hàng</p>
              </div>
          </div>
          <div>
              <img src={icArrowDown} style={{width:20, height:20, marginBottom:10, marginTop:10}}/>
          </div>
          <div className={"procedure-item"}>
              <div className={"procedure-icon"}>
                  <img src={giaohangW} className={"procedure-icon"}/>
              </div>
              <div className={"procedure-content"}>
                  <b>Giao Hàng</b>
                  <p>Sau khi hoàn thiện sản phẩm, CHFootball sẽ giao hàng đến địa chỉ của khách hàng.</p>
              </div>
          </div>
      </div>

      <div className={'container-title'}>
        <div className='container-title-chil'>
          <p className='title'>{`Đồng Phục Thiết Kế theo yêu cầu`}</p>
        </div>
        <div className={'container-see-more'}>
          <p className={'text-see-more'}>{`Xem thêm >`}</p>
        </div>
      </div>
      <div className="container-products">
        {
          data.map((e, i) => {
            return (
              <Card className='iteamcard'>
                <img
                  className={'itemcard-img'}
                  alt="Sample"
                  // src="https://picsum.photos/300/200"
                  src='https://firebasestorage.googleapis.com/v0/b/nhuahvt.appspot.com/o/IMG_4814.JPG?alt=media&token=f962e0c1-7156-44b2-8566-1f5cba0721c8'
                />
                <CardBody>
                  <CardTitle tag="h5">
                    CHF 2501
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted itemcard-subtitle"
                    tag="h6"
                  >
                    Make Football Great
                  </CardSubtitle>
                  {/* <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText> */}
                  <div className={'itemcard-buttons'}>
                    <Button color="primary">
                      Xem
                    </Button>
                    <div style={{ width: '100%', height: 5 }}></div>
                    <Button color="warning">
                      Tư vấn
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )
          })
        }
      </div>

      <div className={'container-title'}>
        <div className='container-title-chil'>
          <p className='title'>{`Đồng Phục Sẵn (in ấn trả hàng 24h)`}</p>
        </div>
        <div className={'container-see-more'}>
          <p className={'text-see-more'}>{`Xem thêm >`}</p>
        </div>
      </div>
      <div className="container-products">
        {
          data.map((e, i) => {
            return (
              <Card className='iteamcard'>
                <img
                  className={'itemcard-img'}
                  alt="Sample"
                  src="https://firebasestorage.googleapis.com/v0/b/nhuahvt.appspot.com/o/IMG_4800.JPG?alt=media&token=d8aa986b-6386-4c9b-a99d-0496f9bfac4b"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    CHF 2501
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted itemcard-subtitle"
                    tag="h6"
                  >
                    Make Football Great
                  </CardSubtitle>
                  {/* <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText> */}
                  <div className={'itemcard-buttons'}>
                    <Button color="primary">
                      Xem
                    </Button>
                    <div style={{ width: '100%', height: 5 }}></div>
                    <Button color="warning">
                      Tư vấn
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )
          })
        }
      </div>

      <div className={'container-title'}>
        <div className='container-title-chil'>
          <p className='title'>{`Phụ Kiện`}</p>
        </div>
        <div className={'container-see-more'}>
          <p className={'text-see-more'}>{`Xem thêm >`}</p>
        </div>
      </div>
      <div className="container-products">
        {
          data.map((e, i) => {
            return (
              <Card className='iteamcard'>
                <img
                  className={'itemcard-img'}
                  alt="Sample"
                  src="https://firebasestorage.googleapis.com/v0/b/nhuahvt.appspot.com/o/IMG_0063.JPG?alt=media&token=89292224-b5f0-4b9c-b7d9-1d393572bc5b"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    CHF 2501
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted itemcard-subtitle"
                    tag="h6"
                  >
                    Make Football Great
                  </CardSubtitle>
                  {/* <CardText>
              Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText> */}
                  <div className={'itemcard-buttons'}>
                    <Button color="primary">
                      Xem
                    </Button>
                    <div style={{ width: '100%', height: 5 }}></div>
                    <Button color="warning">
                      Tư vấn
                    </Button>
                  </div>
                </CardBody>
              </Card>
            )
          })
        }
      </div>

      <div style={{ width: '100%', height: 200 }}>

      </div>


    </div>
  );
}



export default App;
