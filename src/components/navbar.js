import React, {useState, useEffect} from 'react'

const Navbar = () => {
    const [isMobile, setMobile] = useState(window.innerWidth > 800 ? false : true);
    const [isClicked, setClicked] = useState(false);

    const changeState = () => {
        setClicked(!isClicked);
    }
    useEffect(()=>{
        window.removeEventListener('resize', () => {
            if(window.innerWidth > 800){
                if(isMobile === true){
                    setMobile(false);
                }
            }
            else{
                if(isMobile === false){
                    setMobile(true);
                }
            }
        })
        window.addEventListener('resize', () => {
            if(window.innerWidth > 800){
                if(isMobile === true){
                    setMobile(false);
                }
            }
            else{
                if(isMobile === false){
                    setMobile(true);
                }
            }
        })
    });
    if(!isMobile){
        return (
            <nav id='nav' style={{position:'fixed', top:'0', left:'0', right:'0', background:'rgba(40, 40, 40, 1)', display:'flex', justifyContent:'center', padding:'1rem'}}>
                <article style={{width:'800px', display:'flex', justifyContent:'space-between'}}>
                <a href="#index">TITULINIS</a>
                <a href="#faktai">PRIEŽASTYS KODĖL...</a>
                <a href="#apie">APIE</a>
                </article>
            </nav>
        )
    }
    else if(isMobile){
        return (
            <nav style={{position:'relative', zIndex:'2',}}>
            <div onClick={changeState} style={{position:'fixed', zIndex:'5', top:'10px', right:'10px', width:'30px', height:'23px'}}>
                <div style={!isClicked ? {position:'absolute', top:'0', background:'white', height:'5px', width:'30px', transition:'all 400ms'} : {position:'absolute', top:'0', background:'#00fc58', height:'5px', width:'30px', transition:'all 400ms', transform:'rotate(30deg) translate(5px, 9px)'}}></div>
                <div style={!isClicked ? {position:'absolute', top:'9px', background:'white', height:'5px', width:'30px', transition:'transform 400ms'} : {display:'none'}}></div>
                <div style={!isClicked ? {position:'absolute', bottom:'0', background:'white', height:'5px', width:'30px', transition:'all 400ms'} : {position:'absolute', bottom:'0', background:'#00fc58', height:'5px', width:'30px', transition:'all 400ms', transform:'rotate(-30deg) translate(3px, -7px)'}}></div>
            </div>
            <div style={isClicked ? {width:'100vw', height:'100vh', background:'rgba(40,40,40,1)', position:'fixed', left:'100%', top:'0', transition:'all 400ms', transform:"translate(-100%)", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'} : {width:'100vw', height:'100vh', background:'rgba(40,40,40,1)', position:'fixed', left:'100%', top:'0', transition:'all 400ms', zIndex:'4', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <a href="#index" onClick={changeState}>TITULINIS</a>
                <a href="#faktai" onClick={changeState}>PRIEŽASTYS KODĖL...</a>
                <a href="#apie" onClick={changeState}>APIE</a>
            </div>
            </nav>
        )
    }
}

export default Navbar
