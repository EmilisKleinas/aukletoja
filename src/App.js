import './App.css';
import Logo from './components/logo'
import Reasons from './components/reasonsBox'
import Navbar from './components/navbar'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url = 'imgs/beFunky-collage.jpg';
function App() {
  return (
    <section style={{scrollSnapType:'y mandatory', scrollBehavior:'smooth', position:'relative'}}>
      <Logo url={url} name='Lina Alekserūnienė' bio='Geriausia auklėtoja pasaulyje' style={{scrollSnapAlign:'center'}}></Logo>
      <Reasons style={{scrollSnapAlign:'center'}}></Reasons>
      <Navbar></Navbar>
    </section>
  );
}

export default App;
