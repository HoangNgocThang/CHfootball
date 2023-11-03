import React, {useState, useEffect, useRef} from "react";
import '../css/detail.css';
import z1_1 from '../images/z1_1.webp';
import z1_2 from '../images/z1_2.JPG';
import z2_1 from '../images/z2_1.webp';
import z2_2 from '../images/z2_2.JPG';
import z3_1 from '../images/z3_1.webp';
import z3_2 from '../images/z3_2.JPG';
import z4_1 from '../images/z4_1.webp';
import z4_2 from '../images/z4_2.JPG';
import z5_1 from '../images/z5_1.webp';
import z5_2 from '../images/z5_2.JPG';
import z6_1 from '../images/z6_1.webp';
import z6_2 from '../images/z6_2.JPG';
import z7_1 from '../images/z7_1.webp';
import z7_2 from '../images/z7_2.JPG';
import z8_1 from '../images/z8_1.webp';
import z8_2 from '../images/z8_2.JPG';
import z9_1 from '../images/z9_1.webp';
import z9_2 from '../images/z9_2.JPG';
import z10_1 from '../images/z10_1.webp';
import z10_2 from '../images/z10_2.JPG';
import z11_1 from '../images/z11_1.webp';
import z11_2 from '../images/z11_2.JPG';
import z12_1 from '../images/z12_1.webp';
import z12_2 from '../images/z12_2.JPG';
import z13_1 from '../images/z13_1.webp';
import z13_2 from '../images/z13_2.JPG';
import z14_1 from '../images/z14_1.webp';
import z14_2 from '../images/z14_2.JPG';
import z15_1 from '../images/z15_1.webp';
import z15_2 from '../images/z15_2.JPG';
import z16_1 from '../images/z16_1.webp';
import z16_2 from '../images/z16_2.JPG';
import z17_1 from '../images/z17_1.webp';
import z17_2 from '../images/z17_2.JPG';
import z18_1 from '../images/z18_1.webp';
import z18_2 from '../images/z18_2.jpg';
import z19_1 from '../images/z19_1.webp';
import z19_2 from '../images/z19_2.JPG';
import z20_1 from '../images/z20_1.webp';
import z20_2 from '../images/z20_2.JPG';

import z26_1 from '../images/z26_1.webp';
import z26_2 from '../images/z26_2.png';
import z27_1 from '../images/z27_1.webp';
import z27_2 from '../images/z27_2.png';
import z28_1 from '../images/z28_1.webp';
import z28_2 from '../images/z28_2.png';
import z29_1 from '../images/z29_1.webp';
import z29_2 from '../images/z29_2.png';
import z30_1 from '../images/z30_1.webp';
import z30_2 from '../images/z30_2.png';
import z31_1 from '../images/z31_1.webp';
import z31_2 from '../images/z31_2.png';
import z32_1 from '../images/z32_1.webp';
import z32_2 from '../images/z32_2.png';
import z33_1 from '../images/z33_1.webp';
import z33_2 from '../images/z33_2.png';
import z34_1 from '../images/z34_1.webp';
import z34_2 from '../images/z34_2.png';
import z35_1 from '../images/z35_1.webp';
import z35_2 from '../images/z35_2.png';
import z36_1 from '../images/z36_1.webp';
import z36_2 from '../images/z36_.png';
import z37_1 from '../images/z37_1.webp';
import z37_2 from '../images/z37_2.png';
import z38_1 from '../images/z38_1.webp';
import z38_2 from '../images/z38_2.png';
import z39_1 from '../images/z39_1.webp';
import z39_2 from '../images/z39_2.png';
import z40_1 from '../images/z40_1.webp';
import z40_2 from '../images/z40-2.png';
import z41_1 from '../images/Z41_1.webp';
import z41_2 from '../images/Z41_2.png';

import trong from '../images/trong.png'
import ngoai from '../images/ngoai.webp';

import sliceIntoChunks from "../untils";
import ModalDetailDesktop from "../components/ModalDetailDesktop";

import {collection, getDocs} from 'firebase/firestore';
import {db, storage} from "../firebase";

import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';

function Detail() {

    const [data, setData] = useState([{
        id: 1, img1: z1_1, img2: z1_2, name: 'CHF.57.001'
    }, {
        id: 2, img1: z2_1, img2: z2_2, name: 'CHF.57.002'
    }, {
        id: 3, img1: z3_1, img2: z3_2, name: 'CHF.57.003'
    }, // {
        //     id: 4, img1: z4_1, img2: z4_2, name: 'CHF.57.004'
        // },
        {
            id: 4, img1: ngoai, img2: trong, name: 'CHF.57.004'
        }, {
            id: 5, img1: z5_1, img2: z5_2, name: 'CHF.57.005'
        }, {
            id: 6, img1: z6_1, img2: z6_2, name: 'CHF.57.006'
        }, {
            id: 7, img1: z7_1, img2: z7_2, name: 'CHF.57.007'
        }, {
            id: 8, img1: z8_1, img2: z8_2, name: 'CHF.57.008'
        }, {
            id: 9, img1: z9_1, img2: z9_2, name: 'CHF.57.009'
        }, {
            id: 10, img1: z10_1, img2: z10_2, name: 'CHF.57.0010'
        }, {
            id: 11, img1: z11_1, img2: z11_2, name: 'CHF.57.0011'
        }, {
            id: 12, img1: z12_1, img2: z12_2, name: 'CHF.57.0012'
        }, {
            id: 13, img1: z13_1, img2: z13_2, name: 'CHF.57.0013'
        }, {
            id: 14, img1: z14_1, img2: z14_2, name: 'CHF.57.0014'
        }, {
            id: 15, img1: z15_1, img2: z15_2, name: 'CHF.57.0015'
        }, {
            id: 16, img1: z16_1, img2: z16_2, name: 'CHF.57.0016'
        }, {
            id: 17, img1: z17_1, img2: z17_2, name: 'CHF.57.0017'
        }, {
            id: 18, img1: z18_1, img2: z18_2, name: 'CHF.57.0018'
        }, {
            id: 19, img1: z19_1, img2: z19_2, name: 'CHF.57.0019'
        }, {
            id: 20, img1: z20_1, img2: z20_2, name: 'CHF.57.0015'
        }, {
            id: 26, img1: z26_1, img2: z26_2, name: 'CHF.57.0026'
        }, {
            id: 27, img1: z27_1, img2: z27_2, name: 'CHF.57.0027'
        }, {
            id: 28, img1: z28_1, img2: z28_2, name: 'CHF.57.0028'
        }, {
            id: 29, img1: z29_1, img2: z29_2, name: 'CHF.57.0029'
        }, {
            id: 30, img1: z30_1, img2: z30_2, name: 'CHF.57.0030'
        }, {
            id: 31, img1: z31_1, img2: z31_2, name: 'CHF.57.0031'
        }, {
            id: 32, img1: z32_1, img2: z32_2, name: 'CHF.57.0032'
        }, {
            id: 33, img1: z33_1, img2: z33_2, name: 'CHF.57.0033'
        }, {
            id: 34, img1: z34_1, img2: z34_2, name: 'CHF.57.0034'
        }, {
            id: 35, img1: z35_1, img2: z35_2, name: 'CHF.57.0035'
        }, {
            id: 36, img1: z36_1, img2: z36_2, name: 'CHF.57.0036'
        }, {
            id: 37, img1: z37_1, img2: z37_2, name: 'CHF.57.0037'
        }, {
            id: 38, img1: z38_1, img2: z38_2, name: 'CHF.57.0038'
        }, {
            id: 39, img1: z39_1, img2: z39_2, name: 'CHF.57.0039'
        }, {
            id: 40, img1: z40_1, img2: z40_2, name: 'CHF.57.0040'
        }, {
            id: 31, img1: z41_1, img2: z41_2, name: 'CHF.57.0041'
        },])

    const windowWidth = useRef(window.innerWidth);
    const windowHeight = useRef(window.innerHeight);

    const [value, setValue] = useState(4);
    const [select, setSelect] = useState(data[0]);
    // console.log('width: ', windowWidth.current);
    // console.log('height: ', windowHeight.current);

    const [imgUpload, setImgUpload] = useState(null);
    const imgRef = ref(storage, `images/${v4()}`)

    const uploadImage = () => {
        if (imgUpload == null) return;
        // const imgRef = ref(storage, `images/${imgUpload.name}`)
        uploadBytes(imgRef, imgUpload).then((sn) => {
            console.log(sn);
            getDownloadURL(sn.ref).then(url=> {
                console.log('urlUpload', url);
            })
        }).catch(err => {
            console.log(err.message)
        })
    }

    const getData = () => {
        const ref = collection(db, 'products')
        getDocs(ref)
            .then(res => {
                console.log(res.docs.map(doc => ({
                    id: doc.data().id, img1: doc.data().img1, img2: doc.data().img2, name: doc.data().name,
                })));
            }).catch(err => {
            console.log(err.message)
        })
    }

    // const getImg = () => {
    //     listAll(imgRef).then(res => {
    //         console.log('listAll', res)
    //         res.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 console.log('url:', url)
    //             })
    //         })
    //     })
    // }

    useEffect(() => {
        window.scrollTo(0, 0)
        getData()
        // getImg()
    }, [])

    function checkMediaQuery() {
        // If the inner width of the window is greater then 768px
        if (window.innerWidth >= 768 && window.innerWidth <= 990) {
            // Then log this message to the console
            console.log('Media Query Matched!')
            setValue(3)
        } else {
            setValue(4)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkMediaQuery);
        return () => {
            window.removeEventListener('resize', checkMediaQuery);
        }
    },)

    const renderGrid = () => {
        if (data) {
            const resArr = sliceIntoChunks(data, value);
            return <div>{resArr.map((e, i) => {
                return <div className="d-flex row" key={i}>{e.map((ele, index) => {
                    return (<div
                        onClick={() => {
                            setSelect(ele)
                            let modal = document.getElementById("myModalDetailDesktop");
                            modal.style.display = "flex";
                            let imgMyModalDetailDesktop = document.getElementById('imgMyModalDetailDesktop');
                            imgMyModalDetailDesktop.src = ele.img2;
                            let imgMyModalDetailDesktop2 = document.getElementById('imgMyModalDetailDesktop2');
                            imgMyModalDetailDesktop2.src = ele.img2;
                        }}
                        className="d-flex col-6 col-lg-3 col-md-4 justify-content-around" key={`${ele.id}`}>
                        <div className={"itemDetail"}>
                            <p className={"textItemDetail"}>{ele.name}</p>
                            <img
                                className={"imgItemDetail"}
                                src={ele.img1}
                                alt={"sản phẩm"}
                            />
                        </div>
                    </div>)
                })}</div>
            })}</div>

        }
        return <></>
    }

    return (<div className={"container wrapItemDetail"}>
        {/*<input type={'file'} onChange={(event) => {*/}
        {/*    setImgUpload(event.target.files[0])*/}
        {/*}}/>*/}
        {/*<button onClick={uploadImage}>upload img</button>*/}
        {renderGrid()}

        <button 
         onClick={()=> {
            window.open('https://drive.google.com/drive/folders/1u0YOmrAUhE0av1wSgGV8OSxRqsZCBT_t?usp=sharing', "_blank");
         }}
         style={{marginBottom:10, marginTop:10, paddingTop: 5, paddingBottom: 5, paddingLeft:10, paddingRight:10}}>Xem thêm</button>
       
        <ModalDetailDesktop data={select}/>
    </div>)
}


export default Detail;
