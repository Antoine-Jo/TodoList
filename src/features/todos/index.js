import { Redirect, Route, Switch } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import './store'


function Todos() {
  return (
    <>
      <h4>Ajouter une todo</h4>
      <hr className='my-4' />
      <AddTodo />
      <hr className='my-4' />
      <div className="card">
        <div className="card-header d-flex flex-row align-items-center">
          <span className='flex-fill'>Todo List</span>
          <Filter />
        </div>
        <div className="card-body">
          <Switch>
            <Route path="/todos/:filter" component={ TodoList } />
            <Redirect to="/todos/all" />
          </Switch>
            {/* <TodoList /> */}
        </div>
      </div>
    </>
  );
}

export default Todos;
