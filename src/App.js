/*jshint esversion: 6 */
/* eslint-disable */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import './App.css';
import TodoInput from './TodoInput'
import Todolist from './Todolist'
import Todoitem from './Todoitem'

			 
class App extends Component {

  constructor(props){
	  super(props)
	  this.state = {
		todoItems: []
	  }
	  this.addTodo = this.addTodo.bind(this)
  }
	
  addTodo(newTodo){
	  this.setState({
	  	todoItems: this.state.todoItems.concat(newTodo)
	  })
  }
	
  render() {
	let {todoItems} = this.state
    return (
      <View className="box" style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}>
        <View className="box1">Inputology</View>
        <View className="box2">What Is Your Hobby?</View>
        <View className="box3">
			<div>Type Below</div>
			<div id="input"> 
				<TodoInput onAddTodo = {this.addTodo} />
			</div>
		</View>
        <View className="box4">
			<div>
				<Todolist items = {todoItems}/>
			</div>
		</View>
	</View>
	);
  }
};


export default App;