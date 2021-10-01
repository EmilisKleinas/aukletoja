import React, {useState, useEffect} from 'react'
import "../App.css"
const Logo = ({url, name, bio}) => {
    const [isMobile, setMobile] = useState(false);

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            if(window.innerWidth > 800){
                if(isMobile){
                    setMobile(false);
                }
            }
            else{
                if(!isMobile){
                    setMobile(true)
                }
            }
        },[])
    })
    return (
        <div className='shit' id='index' style={{
            
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:"100%",
            height:'100vh',
            textAlign:'center',
            backgroundSize:`${!isMobile ? '70%' : 'contain'}`,
            color:'#eee',
            padding:'0px',
            scrollSnapAlign:'center'
            }}>
            
        <div style={{fontSize:`${2+ Math.round(window.innerWidth/400)/3}rem`}}>{name}</div>
        <div  style={{borderTop:'solid 3px #00fc58', width:'100%', fontSize:`${1.5 + Math.round(window.innerWidth/400)/5}rem`}}>{bio}</div>
        </div>
    )
}

export default Logo
