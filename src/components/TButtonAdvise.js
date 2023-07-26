import React from 'react';

const TButtonAdvise = () => {

    return (<div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor: 'white', height:40, padding:10, borderRadius:10}}>
        <a href={"https://zalo.me/0374841234"} target={"_blank"} style={{margin:0, padding:0}}><span style={{color: 'black', fontSize: 14, margin:0, padding:0, fontWeight:'bold'}}>Tư vấn thiết kế</span></a>
    </div>)
}

export default React.memo(TButtonAdvise);