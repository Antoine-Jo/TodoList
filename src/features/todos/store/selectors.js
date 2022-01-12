import { createSelector } from 'reselect';

export const filterSelector = (state, filter) => filter;
export const todoSelector = state => state.todos;

export const todosListSelector = createSelector(
    [todoSelector],
    (todos) => todos.data
)

export const filteredTodoDataSelector = createSelector(
    [filterSelector, todosListSelector],
    (filter, todos) => {
        if (todos && filter) {
            switch(filter) {
                case 'done':  {
                    return todos.filter( t => t.done )
                }
                case 'active': {
                    return todos.filter( t => !t.done )
                }
                default: {
                    return todos
                }
            }
        }
    }
)