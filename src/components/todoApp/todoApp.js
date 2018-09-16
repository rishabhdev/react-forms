class TodoApp extends React.Component{
    state = {
        "todos":[
            {
                text:"Make tea",
                done:false
            }
        ]
    }

    render(){
        return (<div className="todo-app-wrapper">
                    <div className="todo-app">
                    </div>
                </div>);
    }
}
window.TodoInput = TodoInput;
