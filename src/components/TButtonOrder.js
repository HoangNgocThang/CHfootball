import React from "react"

const TButtonOrder = () => {
    return (
        <button type="button" className="btn btn-dark rounded-pill" style={{marginTop: 15}}>
            <a href={"https://zalo.me/0374841234"} target={"_blank"}><span style={{color:'white', fontSize:13}}>Tư vấn đặt hàng</span></a>
        </button>
    )
}

export default React.memo(TButtonOrder);
