import React, {useEffect, useState} from 'react';

const ModalDetailDesktop = () => {

    const [isSmall , setIsSmall] = useState(false)

    function checkMediaQuery() {
        // If the inner width of the window is greater then 768px
        if (window.innerWidth <=768) {
            // Then log this message to the console
            console.log('Media Query Matched!')
            setIsSmall(true)
        }else  {
            setIsSmall(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('resize', checkMediaQuery);
        return ()=> {
            window.removeEventListener('resize', checkMediaQuery);
        }
    },)

    return (<div id="myModalDetailDesktop" className="modal--thanghn">
        <div className="modal-content--thanghn5" style={{ position: 'relative',}}>
            <div style={{
                display: 'flex', flex: 1, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{   padding: 20, display: 'flex', flexDirection: 'row', flex: 1,justifyContent:'center', alignItems:'center'}}>
                    <img id={'imgMyModalDetailDesktop'} style={isSmall? { width: 340 , height:'auto'}:
                    // { width: 500 , height:'auto'}
                    { height: 'auto', width: 'auto'}}/>
                    <span style={{color:'black', fontSize:50,paddingRight: 5, paddingLeft: 5, position: 'absolute', top: 0, right: 10}}
                          className="close" onClick={() => {
                        var modal = document.getElementById("myModalDetailDesktop");
                        modal.style.display = "none";
                    }}>&times;</span>
                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalDetailDesktop);