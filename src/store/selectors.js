import { createSelector } from 'reselect'
import { visibilityFilters } from './actions';

export const filterSelector = state => state.filter;
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
                case visibilityFilters.SHOW_DONE:  {
                    return todos.filter( t => t.done )
                }
                case visibilityFilters.SHOW_ACTIVE: {
                    return todos.filter( t => !t.done )
                }
                default: {
                    return todos
                }
            }
        }
    }
)