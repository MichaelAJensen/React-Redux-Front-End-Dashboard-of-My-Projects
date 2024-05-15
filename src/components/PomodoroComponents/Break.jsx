import { connect } from "react-redux"
import { addBreakTime } from "../../redux/actions"
import { subtractBreakTime } from "../../redux/actions"


const Break = (props) => {
    if (props.break === 0) {
        props.alarm()
    }
    return (
        <div>
            <h5>Break Time</h5>
            <button
                className="startAndStop"
                onClick={props.addBreakTime}
            >➕</button>
            <h6>{Math.floor(props.adjustBreak / 60)}:00
                {/* {
                props.adjustBreak % 60 < 10 ? '0' + props.adjustBreak % 60 : props.adjustBreak % 60} */}
            </h6>
            <button
                className="startAndStop"
                onClick={props.subtractBreakTime}
            >➖</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

        adjustBreak: state.adjustBreak,
        isRunning: state.isRunning,
        break: state.break
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBreakTime: () => dispatch(addBreakTime()),
        subtractBreakTime: () => dispatch(subtractBreakTime())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Break)