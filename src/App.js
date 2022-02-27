import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initial_todos;
  if (localStorage.getItem('todos') === null) {
    initial_todos = [];
  }
  else {
    initial_todos = JSON.parse(localStorage.getItem('todos'))
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((obj) => {
      return obj !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length !== 0) {
      sno = todos[todos.length - 1].sno + 1;
    }
    else {
      sno = 0;
    }
    let todoObj = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, todoObj]);
  }

  const [todos, setTodos] = useState(initial_todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
