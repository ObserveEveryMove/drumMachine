

const Form = (props) => {
    return (
        <div >

            <form onSubmit={props.handleSubmit} className="firstForm">

                <input type="text" name="task" onChange={props.handleInput} value={props.task} placeholder="Enter a Task" required />

                <button type="submit" className="submitBtn">Add a Task</button>

            </form>


        </div>
    )
}


export default Form