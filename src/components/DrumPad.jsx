

const DrumPad = (props) => {

    return (

        <div>
            {props.bank &&
                <div>
                    <div>
                        <button className="drum-pad" id="Q"
                            data-sounds="cymbal1" onClick={(e) => props.handleClick(e)}>Q</button>

                        <button className="drum-pad" id="W"
                            data-sounds="cymbal2" onClick={(e) => props.handleClick(e)}>W</button>

                        <button className="drum-pad" id="E"
                            data-sounds="cymbal8" onClick={(e) => props.handleClick(e)}>E</button>

                    </div>

                    <div>
                        <button className="drum-pad" id="A"
                            data-sounds="kick1" onClick={(e) => props.handleClick(e)}>A</button>

                        <button className="drum-pad" id="S"
                            data-sounds="kick2" onClick={(e) => props.handleClick(e)}>S</button>

                        <button className="drum-pad" id="D"
                            data-sounds="snare1" onClick={(e) => props.handleClick(e)}>D</button>

                    </div>
                    <div>
                        <button className="drum-pad" id="Z"
                            data-sounds="tom1" onClick={(e) => props.handleClick(e)}>Z</button>

                        <button className="drum-pad" id="X"
                            data-sounds="tom4" onClick={(e) => props.handleClick(e)}>X</button>

                        <button className="drum-pad" id="C"
                            data-sounds="snare2" onClick={(e) => props.handleClick(e)}>C</button>

                    </div>
                </div>
            }
            {!props.bank &&
                <div>


                    <div>
                        <button className="drum-pad" id="I"
                            data-sounds="cymbal3" onClick={(e) => props.handleClick(e)}>I</button>

                        <button className="drum-pad" id="O"
                            data-sounds="cymbal4" onClick={(e) => props.handleClick(e)}>O</button>

                        <button className="drum-pad" id="P"
                            data-sounds="cymbal5" onClick={(e) => props.handleClick(e)}>P</button>

                    </div>

                    <div>
                        <button className="drum-pad" id="J"
                            data-sounds="cymbal6" onClick={(e) => props.handleClick(e)}>J</button>

                        <button className="drum-pad" id="K"
                            data-sounds="cymbal7" onClick={(e) => props.handleClick(e)}>K</button>

                        <button className="drum-pad" id="L"
                            data-sounds="tom1" onClick={(e) => props.handleClick(e)}>L</button>

                    </div>
                    <div>
                        <button className="drum-pad" id="B"
                            data-sounds="tom2" onClick={(e) => props.handleClick(e)}>B</button>

                        <button className="drum-pad" id="N"
                            data-sounds="tom4" onClick={(e) => props.handleClick(e)}>N</button>

                        <button className="drum-pad" id="M"
                            data-sounds="snare2" onClick={(e) => props.handleClick(e)}>M</button>

                    </div>

                </div>
            }
        </div>
    )

}

export default DrumPad