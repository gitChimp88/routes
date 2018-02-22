import React from 'react'

export default class Navbar extends React.Component{
	
	handleClick(e){
		
		var name = e.target.textContent
		
		if(name == "Home") {
			name = ""
		} 
			var url = `/${name}`
		    this.props.history.push(url)
	    }
	
	
	
	render(){
		
		const style = {
			listStyle: "none",
			display: "inline-block",
			margin: "20px",
			fontSize: "20px",
			fontWeight: "bold"
			
		}
		
		return( 
			<div>
				<ul>
					<li onClick={this.handleClick.bind(this)}>Home</li>
					<li onClick={this.handleClick.bind(this)}>About</li>
					<li onClick={this.handleClick.bind(this)}>Contact</li>
					<li onClick={this.handleClick.bind(this)}>Gallery</li>
				</ul>
			</div>
			
		)
	}
}