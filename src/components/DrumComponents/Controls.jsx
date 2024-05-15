
const Controls = (props) => {
    return (
        <div className="controlWrapper">
            <div className="controls">

                <button className="closeBtn"
                    onClick={props.closeModal}
                    onChange={props.closeModal}>Power
                </button>

                <label className="volumeTag" htmlFor="">Volume</label>
                <input
                    type="range"
                    className="volume"
                    min="0"
                    max="100"
                    name="volume"
                    value={props.volume * 100}
                    onChange={props.handleChange}
                />
                <button
                    className="bank"
                    onClick={props.handleBank}
                    onChange={props.handleBank}
                >Bank</button>
            </div>

        </div>
    )
}
export default Controls
