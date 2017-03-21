// JavaScript Document
import React, {Component} from "react"
import Todoitem from "./Todoitem"

class Todolist extends Component{
	render(){
		let {items} = this.props
		return(
			<div>
			<ul className="list">
				{
					items.map((todo, i) =>
					<li key={todo}>
						<Todoitem text={todo}/>
					</li>)
				}
			</ul>
			</div>
		)
	}
}

export default Todolist