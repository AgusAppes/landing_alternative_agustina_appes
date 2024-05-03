import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import card from './images/card.png';
import Card2 from './card2';
import WhiteBlock from './whiteBlock';
import Card3 from './card3';
import IDoc from './images/IDoc.png';
import IResponsive from './images/IResponsive.png';
import IDesign from './images/IDesign.png';
import DivCentral from './divCentral'
import Tel from './images/Captura de pantalla 2024-05-02 213727.png';
import IX from './images/IX.png';
import IBall from './images/IBall.png';
import IFacebook from './images/IFacebook.png';
import IInstagram from './images/IInstagram.png';
import "./App.css";

function App() {
    useEffect(() => {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.mid', { delay: 400, distance: '20px', origin: 'bottom' });
        ScrollReveal().reveal('.cards', { delay: 600, distance: '20px', origin: 'bottom' });
        ScrollReveal().reveal('.finish', { delay: 800, distance: '20px', origin: 'bottom' });
        ScrollReveal().reveal('.footer', { delay: 1000, distance: '20px', origin: 'bottom' });
      }, []);
    return (
        <div className="App">
        <body>
            <header className="App-header">
                <nav>
                    <ul id='labs'>
                        <li><a href="#compleet" style={{ fontWeight: 'bold' }}>compleet labs</a></li>
                    </ul>
                    <ul id='resto'>
                        <li><a href="#home" style={{ fontWeight: 'bold' }}>Home</a></li>
                        <li><a href="#services" style={{opacity: 0.5}}>Services</a></li>
                        <li><a href="#technology" style={{opacity: 0.5}}>Technology</a></li>
                        <li><a href="#case" style={{opacity: 0.5}}>Case studies</a></li>
                        <li><a href="#about" style={{opacity: 0.5}}>About</a></li>
                        <li><a href="#hire">
                            <img className='navCard' src={card} alt="" />
                            Hire us</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className='card1'>
                    <h1>We build beautiful and reliable web solutions</h1>
                    <p>We strongly believe that communication, trust and transparency are the essential elements of succesful business relationship. Ready for the journey?</p>
                    <div className='botones'>
                        <button id='learnMoreButon'>Learn more</button>
                        <button id='ourProjectsButon'>Our Projects<span style={{marginLeft: '8px'}}>&#10140;</span></button>
                    </div>
                </div>
                <div className='mid'>
                    <h2>Our Services</h2>
                    <p>We feel very strong about our skills when it comes to planning, designing and coding aplications. Here is what we love to do!</p>
                </div>
                <div className='cards'>
                    <Card2 
                        title="Bussines & Product Concept" 
                        img={IDoc}
                        texto="Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a aviable and sensible product roadmap for achieving a perfect market fit."
                    />
                    <Card2 
                        title="Web & Movile Development" 
                        img={IResponsive}
                        texto="Plan, develop and test high-quality web-aplications using AngularJS, NodeJS, JavaScript, TypeScript, HTML5 and SASS/CSS3 frameworks and native mobile languages."
                    />
                    <Card2 
                        title="UX & UI Design" 
                        img={IDesign}
                        texto="Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience" 
                    />
                </div>
                <DivCentral />
                <WhiteBlock />
                <div className='finish'>
                    <Card3 
                        title="Get in touch with us" 
                        text="Maecenas sed diam eget risus varius blandit sit amet non magna" 
                        textButton="Hire us"/>
                    <Card3
                        title="Our projects" 
                        text="Maecenas sed diam eget risus varius blandit sit amet non magna" 
                        textButton="See Projects"
                        img={Tel} />
                </div>
                <div className='footer'>
                    <div id='compleet' style={{marginLeft: '55px', width: '28%', marginBottom: '50px'}}>
                        <h3 style={{color: 'white', textAlign: 'start', fontSize: 'larger'}}>Compleet labs</h3>
                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec ullamcorper nulla.</p>
                        <div id='redes' style={{display: 'flex'}}>
                            <img src={IX} alt="" style={{marginRight: '15px'}} />
                            <img src={IBall} alt="" style={{marginRight: '15px'}} />
                            <img src={IFacebook} alt="" style={{marginRight: '15px'}} />
                            <img src={IInstagram} alt="" />
                        </div>
                    </div>
                    <div style={{marginLeft: '-30px', marginBottom: '50px'}}>
                        <h3 style={{color: 'white', textAlign: 'start'}}>SISTEMAP</h3>
                        <p id='home' style={{marginBottom: '0'}}>Home</p>
                        <p id='technology' style={{marginBottom: '0'}}>Technology</p>
                        <p id='services' style={{marginBottom: '0'}}>Services</p>
                        <p id='about' style={{marginBottom: '0'}}>About</p>
                    </div>
                    <div style={{marginLeft: '-40px', marginBottom: '50px'}}>
                        <h3 id='case' style={{color: 'white', textAlign: 'start'}}>CASE STUDIES</h3>
                        <p style={{marginBottom: '0'}}>Swiss Airlines</p>
                        <p style={{marginBottom: '0'}}>Google</p>
                        <p style={{marginBottom: '0'}}>Apple</p>
                        <p style={{marginBottom: '0'}}>Nike</p>
                    </div>
                    <div style={{marginLeft: '-54px', marginBottom: '50px'}}>
                        <h3 style={{color: 'white', textAlign: 'start'}}>CONTACT</h3>
                        <p style={{marginBottom: '0'}}>Jobs</p>
                        <p id='hire' style={{marginBottom: '0'}}>Hire us</p>
                    </div>
                </div>
            </main>
        </body>
        </div>
    );
}

export default App;
