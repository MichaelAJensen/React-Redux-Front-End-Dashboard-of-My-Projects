import BtnBlock from "./BtnBlock"


const ListItem = (props) => {
    return (
        <li className="list-item">
            <h6>{props.todo.task}</h6>
            <BtnBlock todo={props.todo}
            />
        </li>
    )
}

export default ListItem