import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div className="container p-5">
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
          <Routes>
            <Route path="/:filter" element={ <TodoList /> } />
            {/* <TodoList /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
