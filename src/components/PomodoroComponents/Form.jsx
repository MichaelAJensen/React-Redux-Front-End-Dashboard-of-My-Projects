import { connect } from "react-redux"
import { handleInput } from "../../redux/actions"

const Form = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.genericHandler()
    }
    return (
        <div className={props.className}>
            <form
                className="addForm"
                onSubmit={handleSubmit}
            >
                <label htmlFor={props.name}>
                    {props.labelTxt}
                </label>
                <input
                    className="addFormInput"
                    type="text"
                    id={props.name}
                    name={props.name}
                    value={props.value}
                    onChange={(e) => props.handleInput(e.target)}
                    required
                />
                <button type="submit">
                    {props.btnTxt}
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (input) => dispatch(handleInput(input))
    }
}

export default connect(null, mapDispatchToProps)(Form)