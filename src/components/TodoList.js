import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux';
import { visibilityFilters, toggleTodo, deleteTodo, fetchTodo } from '../store/actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        props.fetchTodo();
    }

    render() {
        const { todos, deleteTodo, toggleTodo } = this.props;

        return (
            <ul className="list-group">
                { todos && todos.map( (t, i) => (
                    <TodoItem key={ t.name } todo={ t } deleteTodo={ () => deleteTodo(i) } toggleTodo={ () => toggleTodo(i) } />
                )) }
            </ul>
        )
    }
}

export default connect((state) => {
    const filter = state.filter;
    let todos;
    switch(filter) {
        case visibilityFilters.SHOW_DONE:  {
            todos = state.todos.data.filter( t => t.done )
            break
        }
        case visibilityFilters.SHOW_ACTIVE: {
            todos = state.todos.data.filter( t => !t.done )
            break
        }
        default: {
            todos = state.todos.data
        }
    }

    return {
        todos
    }
}, {
    toggleTodo,
    deleteTodo,
    fetchTodo
})(TodoList);
