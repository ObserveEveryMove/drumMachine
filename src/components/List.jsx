

// import Form from "./Form"

const List = (props) => {
    return (
        <div>



            {props.todos.length > 0 ?
                props.todos.map(todo => {
                    return props.isEdit && todo.id === props.editId ? (
                        <div key={todo.id} className="card">

                            <ul>
                                <li>{todo.task}</li>

                                <input name="editTodo" value={props.editTodo} type="text" placeholder="Change your task" onChange={props.handleInput} />

                                <button onClick={props.handleEdit}>Change</button>

                            </ul>

                        </div>) :
                        (
                            <div key={todo.id} className="card">

                                <ul>
                                    <li>{todo.task}</li>
                                </ul>

                                <div className="radio">
                                    <label htmlFor="done">Done??</label>

                                    <input className="radioBtn" type="radio" value={props.isDone}
                                        onClick={ ()=>props.handleRadio(todo.id)} name={props.done} />
                                </div>

                                <button className="removeBtn" onClick={() => props.handleDelete(todo.id)}>Remove!!</button>

                                <button className="changeBtn" onClick={() => props.getReadyToEdit(todo)}>Change</button>

                            </div>
                        )
                }) : <div>
                    <h1 className="enterATask">What are we doing Today?</h1>

                </div>
            }



        </div>
    )
}

export default List