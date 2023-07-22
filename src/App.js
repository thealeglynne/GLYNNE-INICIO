import './App.css';

import VideoDesktop from "./img/video/lv_0_20230721004541.mp4"
import VideoMobile from "./img/video/lv_0_20230720233434.mp4";
import MiniaturaDesktop from "./img/video/1_51e53fb5-d936-44c7-82bf-b6fa5f7e77af.png"
import MiniaturaMobile from "./img/video/1_5379f2a5-8388-4a12-8163-45248ac73a9d.png";


import {  FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
function App() {

  const getVideoSource = () => {
    if (window.innerWidth < 500) {
      return VideoMobile
    } else {
      return VideoDesktop;
    }
  };
  const getPosterSource = () => {
    if (window.innerWidth < 500) {
      return MiniaturaMobile;
    } else {
      return MiniaturaDesktop;
    }
  };

  const handlePlayClick = () => {
    // Aquí puedes implementar la lógica para iniciar la reproducción del video cuando se hace clic en el botón.
    const video = document.querySelector('.responsive-video');
    video.play();
  };

  return (
    <div className="App">
      <section className="section1">
        <nav>
          <ul>
            <li><a href="https://thealeglynne.github.io/GLYNNE-HOME/">COMENZAR</a></li>
            </ul>
        </nav>
        <div className="content">
          <div className="video-container">
            <video className="responsive-video" controlsList="nodownload" poster={getPosterSource()} autoPlay={false} loading="lazy">
              <source src={getVideoSource()} type="video/mp4" />
              {/* Agrega más formatos de video si es necesario */}
            </video>
            <button className="play-button" onClick={handlePlayClick}></button>
          </div>
        </div>
      </section>

    

    <div id='footer' className='footer'>
        <div className="cardFOOTER">
          <div className="SobrecardFOOTER">
            <div className="footerLinks">
              <a href="https://www.linkedin.com/in/alexander-quiroga-90a781245/a" target="_blank" rel="noopener noreferrer">
                <FaLinkedin id="icons" className="footerIcon" />
                lINKEDIN
              </a>
              <a href="https://github.com/thealeglynne" target="_blank" rel="noopener noreferrer">
                <FaGithub id="icons" className="footerIcon" />
                GITHUB
              </a>
              <a href="https://www.instagram.com/glynne1224/" target="_blank" rel="noopener noreferrer">
                <FaInstagram id="icons" className="footerIcon" />
                INSTAGRAM
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094430292906" target="_blank" rel="noopener noreferrer">
                <FaFacebook id="icons" className="footerIcon" />
                FACEBOOK
              </a>
              <a href="https://wa.me/+573142142188" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp id="icons" className="footerIcon" />
                (+57) 3142142188
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
  );
}

export default App;
