import React, { Component } from 'react';

import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header'; 
import Todos from './components/Todos';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import axios from 'axios';


// not needed once we start using the jsson placeholder API
// import {v4 as uuid} from 'uuid'; 


class App extends Component {
  
  // js object of Todos:

  // used before we use the http request method:
  // state = {
  //   todos: [
  //     {
  //       id: uuid(),
  //       title: 'mow the cats',
  //       complete: false
  //     },
  //     {
  //       id: uuid(),
  //       title: 'cook the grass',
  //       complete: false
  //     },
  //     {
  //       id: uuid(),
  //       title: 'stare at the moon',
  //       complete: true
  //     },
  //     {
  //       id: uuid(),
  //       title: 'think of the big picture',
  //       complete: false
  //     },
  //     {
  //       id: uuid(),
  //       title: 'the cats in the cradle',
  //       complete: false
  //     },
  //   ]
  // }

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data}))
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })}); 
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id )] }));
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false 
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] })); 
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />   {/* loads the "Todos" component with a prop of 'todos' */}
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
