import React, {useState} from "react";
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

import sliceIntoChunks from "../untils";

function Detail() {

    const [data, setData] = useState([{
        id: 1, img1: z1_1, img2: z1_2, name: 'CHF.57.001'
    }, {
        id: 2, img1: z2_1, img2: z2_2, name: 'CHF.57.002'
    }, {
        id: 3, img1: z3_1, img2: z3_2, name: 'CHF.57.003'
    }, {
        id: 4, img1: z4_1, img2: z4_2, name: 'CHF.57.004'
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
    },])

    const renderGrid = () => {
        if (data) {
            const resArr = sliceIntoChunks(data, 4);
            console.log('PPP', resArr)
            return <div>{resArr.map((e, i) => {
                return <div className="d-flex row" key={i}>{e.map((ele, index) => {
                    return (<div className="d-flex col-6 col-md-3 justify-content-center" key={`${ele.id}`}>
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
        {renderGrid()}
    </div>)
}

export default Detail;