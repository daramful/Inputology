/*jshint esversion: 6 */
/* eslint-disable */

import React, {Component} from "react";
import Todoitem from "./Todoitem";

class Todolist extends Component{

	render(){
		let {items} = this.props;
		return(
			<div>
			<ol className="list">
				{
					items.map((todo, i) => 
						<li key={todo}>
							<Todoitem text={todo}/>
						</li>)
				}
			</ol>
			</div>
		)
	}
}

export default Todolist