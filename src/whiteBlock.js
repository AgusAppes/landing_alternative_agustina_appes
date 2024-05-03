import ITnw from './images/ITnw.png'
import IGoogle from './images/IGoogle.png'
import INike from './images/icons8-nike-100.png'
import IAirbnb from './images/IAirbnb.png'
import ITnews from './images/ITnews.png'

function whiteBlock(){
    return(
        <div className="marcas">
            <h3 style={{color: '#adb5bd'}}>CLIENT WE WORKED WITH</h3>
            <div className="Imarcas">
                <img id='imgMarcas' src={ITnw} alt='' style={{marginLeft: '50px', marginRight: '70px'}} />
                <img id='imgMarcas' src={IGoogle} alt='' style={{marginLeft: '50px', marginRight: '90px'}} />
                <img id='imgMarcas' src={INike} alt='' style={{marginLeft: '90px', marginRight: '70px'}} />
                <img id='imgMarcas' src={IAirbnb} alt='' style={{marginLeft: '30px', marginRight: '70px'}} />
                <img id='imgMarcas' src={ITnews} alt='' style={{marginLeft: '30px', marginRight: '70px'}} />
            </div>
        </div>
    )
}

export default whiteBlock