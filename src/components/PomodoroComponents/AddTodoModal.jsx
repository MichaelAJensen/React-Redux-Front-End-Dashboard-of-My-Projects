import { connect } from "react-redux"
import Form from "./Form"
import { addTask, handleCloseModal, handleOpenModal } from "../../redux/actions"

const AddTodoModal = (props) => {
    return (
        <div className="modal-btn-wrapper">
            {!props.app.modalOpen ?
                <button
                    className="addBtn"
                    onClick={props.handleOpenModal}>
                    ADD
                </button> : null}
            <dialog open={props.app.modalOpen}>
                <div className="add-todo-modal">
                    <div className="modal-close-btn">
                        <button
                            className="startAndStop" onClick={props.handleCloseModal}>
                            CLOSE
                        </button>
                    </div>
                    <Form
                        className="modal-form"
                        labelTxt="Add to list: "
                        name="task"
                        genericHandler={props.addTask}
                        value={props.app.task}
                        btnTxt="ADD"
                    />
                </div>
            </dialog>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        app: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleOpenModal: () => dispatch(handleOpenModal()),
        handleCloseModal: () => dispatch(handleCloseModal()),
        addTask: () => dispatch(addTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal)