import React from 'react';

function card2(props){
    return(
        <div className="whiteCard">
            <div className='iconCard'>
                <img id='imgCard2' src={props.img} alt="" style={{ width: '50%' }} />
            </div>
            <h3>{props.title}</h3>
            <p id='textCard'>{props.texto}</p>
            <button id='learnMoreButonCard'>Learn More</button>
        </div>
    )
}

export default card2;