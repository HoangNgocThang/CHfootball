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
  // CardText,
  CardTitle,
  Button,
  CardSubtitle
} from 'reactstrap';
import menu from '../src/images/menu.png';
import logoCHFootballBL from '../src/images/logoCHFootballBL.png';
// import banner1 from '../src/images/banner1.jpg';
import ic_right from '../src/images/ic_right.png';

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
