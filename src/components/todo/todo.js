class Todo extends React.Component{
    render(){
        return (<div className="todo">
                    <div className="todo-state"><input type="checkbox" /></div>
                    <div className="todo-text">{(this.props.todo && this.props.todo.text) || "Todo text"}</div>
                </div>);
    }
}

export default Todo;

//window.Todo = Todo;
