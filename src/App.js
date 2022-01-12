import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const LazyTodos = lazy(() => import('./features/todos'));


function App() {
  return (
    <div className="container p-5">
      <Suspense fallback={<h1>Loading ...</h1>}>
      <Switch>
        <Route path='/todos' component={ LazyTodos } />
        <Redirect to='/todos' />
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
