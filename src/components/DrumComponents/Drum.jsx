

const Drum = (props) => {
    return (
        <div id="display">
            {props.bank ?
                <>
                    <div>
                        <button className="drum-pad"
                            data-sounds="cymbal1"
                            onClick={props.handleClick}>Q</button>

                        <button className="drum-pad"
                            data-sounds="cymbal2"
                            onClick={props.handleClick}>A</button>

                        <button className="drum-pad"
                            data-sounds="cymbal3"
                            onClick={props.handleClick}>Z</button>
                    </div>
                    <div>
                        <button className="drum-pad"
                            data-sounds="kick1"
                            onClick={props.handleClick}>W</button>

                        <button className="drum-pad"
                            data-sounds="kick2"
                            onClick={props.handleClick}>S</button>

                        <button className="drum-pad"
                            data-sounds="snare1"
                            onClick={props.handleClick}>X</button>
                    </div>
                    <div>
                        <button className="drum-pad"
                            data-sounds="cymbal6"
                            onClick={props.handleClick}>E</button>

                        <button className="drum-pad"
                            data-sounds="kick1"
                            onClick={props.handleClick}>D</button>

                        <button className="drum-pad"
                            data-sounds="kick2"
                            onClick={props.handleClick}>C</button>
                    </div>
                    
                </> :
                <>
                    <div>
                        <button className="drum-pad"
                            data-sounds="kick2"
                            onClick={props.handleClick}
                        >C</button>

                        <button className="drum-pad"
                            data-sounds="kick1"
                            onClick={props.handleClick}>D</button>

                        <button className="drum-pad"
                            data-sounds="cymbal6"
                            onClick={props.handleClick}>C</button>
                    </div>
                    <div>
                        <button className="drum-pad"
                            data-sounds="snare1"
                            onClick={props.handleClick}>X</button>

                        <button className="drum-pad"
                            data-sounds="kick2"
                            onClick={props.handleClick}>S</button>

                        <button className="drum-pad"
                            data-sounds="kick1"
                            onClick={props.handleClick}>W</button>
                    </div>
                    <div>
                        <button className="drum-pad"
                            data-sounds="cymbal3"
                            onClick={props.handleClick}>Z</button>

                        <button className="drum-pad"
                            data-sounds="cymbal2"
                            onClick={props.handleClick}>A</button>

                        <button className="drum-pad"
                            data-sounds="cymbal1"
                            onClick={props.handleClick}>Q</button>
                    </div>
                   
                </>}
        </div>
    )
}
export default Drum





