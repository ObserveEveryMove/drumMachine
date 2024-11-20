

const Heater = (props) => {
    return (
        <div>

            <button className="heaterKit" onClick={props.handleHeater}
            data-sounds={props.rando} id="M"
            >Heater Kit</button>
        </div>
    )
}

export default Heater