import IHtml from './images/IHtml.png';
import ICss from './images/ICss.png'
import ISass from './images/ISass.png'
import INode from './images/INode.png'
import IAngular from './images/IAngular.png'
import IPython from './images/IPython.png'

function divCentral(){
    return(
        <div className='bloque'>
        <div className='bloque1'>
            <h2>We use cutting edge technology</h2>
            <p>Nullam id dolor id nibh ultricies vehicula ut elit. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra auge. Vestibulum id ligula porta
                felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
        </div>
        <div className='bloque2'>
            <img className='imgBlue' src={IHtml} alt='IHtml' style={{marginRight: '45px'}} />
            <img className='imgBlue' src={ICss} alt='ICss'/>
            <img className='imgBlue' src={ISass} alt='ISass' style={{marginRight: '45px', marginTop: '20px'}} />
            <img className='imgBlue' src={INode} alt='INode' style={{marginTop: '20px'}} />
            <img className='imgBlue' src={IAngular} alt='IAngular' style={{marginRight: '45px', marginTop: '20px'}} />
            <img className='imgBlue' src={IPython} alt='IPython' style={{marginTop: '20px'}} />
        </div>
    </div>
    )
}

export default divCentral;