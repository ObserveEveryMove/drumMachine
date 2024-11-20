

const Slide = (props) => {
return (
    <div>
        {props.volume <= 0.8 ? (<div className= "greenvol"> <h3> Volume: {parseInt(props.volume * 100)}% </h3>
        <input type="range" min="0" max="100" name="volume" value={props.volume * 100} onChange={props.handleVolume}></input></div>):(<div className="redvol"> <h3> Volume: {parseInt(props.volume * 100)}% </h3>
        <input type="range" min="0" max="100" name="volume" value={props.volume * 100} onChange={props.handleVolume}></input></div>)}
     

       
    </div>
)
}

export default Slide