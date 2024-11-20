import React from "react"
import { v4 as uuid } from "uuid"
import Form from "./components/Form"
import List from "./components/List"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            task: "",

            isEdit: false,
            editId: "",
            editTodo: "",

            doneId: "",
            isDone: false,
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.getReadyToEdit = this.getReadyToEdit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleRadio = this.handleRadio.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault()
        let todo = {}
        todo.task = this.state.task
        todo.id = uuid()
        this.setState({
            ...this.state,
            todos: [todo, ...this.state.todos],
            task: ""
        })
    }

    handleInput(e) {
        let { name, value } = e.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    getReadyToEdit(todo) {
        this.setState({
            ...this.state,
            isEdit: true,
            editTodo: todo.task,
            editId: todo.id,
        })
    }

    handleDelete(id) {
        let remove = this.state.todos.filter(todo => todo.id !== id)
        let theChosenOne = this.state.todos.filter(item => item.id === id)[0]
        if (theChosenOne.isDone === true) {
            this.setState({
                ...this.state,
                todos: remove,
                isDone: !this.state.isDone,
            })
        }
        else {
            alert("Are you done??")
        }


    }
    handleEdit(e) {
        e.preventDefault()
        let change = this.state.todos.map(todo => {
            if (todo.id === this.state.editId) {
                todo.task = this.state.editTodo
            }
            return todo
        })
        this.setState({
            ...this.state,
            todos: change,
            isEdit: false,
            editId: "",
            editTodo: "",
        })
    }

    handleRadio(id) {

        let findTheOne = this.state.todos.map(todo => {
            if (todo.id === id) {
                console.log("todo ", todo)
                todo.isDone = !todo.isDone
            }
            return todo
        })
        this.setState({
            ...this.state,
            todos: findTheOne


        })
    }

    render() {
        return (
            <div>

                <Form
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    task={this.state.task}

                />

                <List
                    todos={this.state.todos}
                    isEdit={this.state.isEdit}
                    editId={this.state.editId}
                    editTodo={this.state.editTodo}
                    handleInput={this.handleInput}
                    handleDelete={this.handleDelete}
                    getReadyToEdit={this.getReadyToEdit}
                    handleEdit={this.handleEdit}
                    handleRadio={this.handleRadio}
                    isDone={this.state.isDone}
                    done={this.state.done}

                />




            </div>
        )
    }
}

export default App