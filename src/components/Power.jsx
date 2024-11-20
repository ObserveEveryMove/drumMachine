
const Power = (props) => {
    return (
        <div>
            <h3>Power</h3>
            <input type="range" min="0" max="1" className="toggle" onChange={props.handlePower}/>
        </div>
    )
}

export default Power