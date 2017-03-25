/*jshint esversion: 6 */
/* eslint-disable */

import React, {Component} from "react";

class TodoInput extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			newTodo: ""
		};
		this.addClicked = this.addClicked.bind(this);
	}
	
	addClicked(){
		let {onAddTodo} = this.props;
		onAddTodo(this.state.newTodo);
		this.setState({
			newTodo: ""
		});
	}
	

	
	
	render(){
		let {newTodo} = this.state;
		let {counter} = 0;
		return(
			<div>
			<input placeholder="What's your plan?" value={newTodo} onChange={(word)=>this.setState({newTodo: word.target.value})}/>
			<button onClick={this.addClicked}> ADD </button> 
			</div>
		)
	}
}

export default TodoInput