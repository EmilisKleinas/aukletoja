import React, {useState, useEffect} from 'react'
import duom from './duom'


const ReasonsSlideshow = () => {

    const [index, setIndex] = useState(1);
    const [windows, setWindows] = useState(Math.round(window.innerWidth/350));
    useEffect(()=>{
        setTimeout(()=>{
            setIndex((index+1 > duom.length-windows+1) ? 1 : index+1);
        }, 3500)
    }, [index])
    useEffect(() => {
        window.addEventListener('resize', ()  => {
            setWindows(Math.round(window.innerWidth/350));
        })},[]);
    
    return (
        <div id='faktai' style={{background:'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(https://image.freepik.com/free-vector/pattern-geometric-line-circle-abstract-seamless-blue-line_60284-53.jpg)', display:'flex', justifyContent:'center', alignItems:'center', color: '#eee', fontSize:'1.5rem', textAlign:'center', flexDirection:'column', padding:'0 5vw', height:'100vh', scrollSnapAlign:'center'}}>
            <p style={{fontSize:`${(windows-1)*0.5+1.5}rem`, fontWeight:'500'}}>Priežastys, kodėl Lina geriausia</p>
        {/* sukuriam container kur bus slides, bet matysis tik viena slide */}
            <div style={{height:'300px', width:'90vw', overflow:'hidden', height: "30vh"}}>
                {/* sukuriam container kur bus visos slides */}
                <div style={{display:'flex',flexWrap:'nowrap', transform:`translate(${-(index-1)*100/windows}%)`, transition: 'all 300ms', minHeight:'100%'}}>
                    {duom.map(({content, id, title}) => {
                        return (
                        <div key={id} style={{display:'flex', flexDirection:'column', minWidth:`${90/windows}vw`, background:'#00fc58', color:'#222', boxSizing:'border-box', border: "2px solid #555", minHeight: "100%", alignItems:'center'}}>
                            <h3 style={{padding:'0 0.5rem'}}>{title}</h3>
                            <p style={{padding:'0 0.5rem', justifySelf:'center'}}>{content}</p>

                        </div>
                        )
                    })}

                </div>
            </div>
            
        </div>
    )
}

export default ReasonsSlideshow
