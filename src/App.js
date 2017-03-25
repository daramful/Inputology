/*jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import Todolist from './Todolist';

class App extends Component {
    constructor(props){
    
	  super(props);
	  this.state = {
		todoItems: []
	  };
	  this.addTodo = this.addTodo.bind(this);
  }
	
  addTodo(newTodo){
	  this.setState({
	  	todoItems: this.state.todoItems.concat(newTodo)
	  });
  }


  render() {
  	let {todoItems} = this.state;
    return (
      <div className="App">
        <div className="box1">
          <h2>Inputology</h2>
        </div>

        
        <div className="box2">
          <h3>How many hobbies?   <div id="number"> 0 </div>  </h3>
        </div>


        <div className="box3">
          <TodoInput onAddTodo={this.addTodo}/>
        </div>


        <div className="box4">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
               <Todolist items={todoItems} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App
