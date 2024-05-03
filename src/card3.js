

function card3(props){
    return(
        <div className="card3">
            <h3 id="h3Card3" style={{color: 'white', fontSize: 'x-large'}}>{props.title}</h3>
            <p id="p3" style={{fontSize: 'large', marginLeft: '25px', marginRight: '180px', color: 'white'}}>{props.text}</p>
            <button className="buttonCard3">{props.textButton}</button>
            <img id="tel" src={props.img} alt="" style={{width: '220px', position: 'absolute', top: '26px', left: '1070px', zIndex: '1' }} />
        </div>
    )
}

export default card3;