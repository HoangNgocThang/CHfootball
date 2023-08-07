import React, {useEffect, useRef, useState} from 'react';
import {useClickOutside} from 'use-events';

const ModalDetailDesktop = () => {

    const [isSmall, setIsSmall] = useState(false)
    const [w, setW] = useState(window.innerWidth);
    console.log('w,', w)
    const ref1 = React.useRef(null);
    const [isActive] = useClickOutside([ref1], event => {
        var modal = document.getElementById("myModalDetailDesktop");
        modal.style.display = "none";
    });
    // function checkMediaQuery() {
    //     // If the inner width of the window is greater then 768px
    //     if (window.innerWidth <=768) {
    //         // Then log this message to the console
    //         console.log('Media Query Matched!')
    //         setIsSmall(true)
    //     }else  {
    //         setIsSmall(false)
    //     }
    // }
    //
    // useEffect(()=> {
    //     window.addEventListener('resize', checkMediaQuery);
    //     return ()=> {
    //         window.removeEventListener('resize', checkMediaQuery);
    //     }
    // },)

    return (<div id="myModalDetailDesktop" className="modal--thanghn" style={{zIndex: 10}}>
        <div className="modal-content--thanghn5" style={{position: 'relative',}}>
            <div
                style={{
                    display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
                }}>
                <div
                    style={{
                        padding: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <img id={'imgMyModalDetailDesktop'}
                         ref={ref1}
                         style={w <= 390 ? {width: 350, height: 'auto'} : {height: 'auto', width: 'auto'}}/>
                    {/*<span style={{*/}
                    {/*    color: 'black',*/}
                    {/*    fontSize: 50,*/}
                    {/*    paddingRight: 5,*/}
                    {/*    paddingLeft: 5,*/}
                    {/*    position: 'absolute',*/}
                    {/*    top: 0,*/}
                    {/*    right: 10*/}
                    {/*}}*/}
                    {/*      className="close" onClick={() => {*/}
                    {/*    var modal = document.getElementById("myModalDetailDesktop");*/}
                    {/*    modal.style.display = "none";*/}
                    {/*}}>&times;</span>*/}
                </div>
            </div>
        </div>
    </div>)
}

export default React.memo(ModalDetailDesktop);