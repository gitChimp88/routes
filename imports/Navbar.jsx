import React from 'react'

export default class Navbar extends React.Component{
	
	handleClick(e){
	   debugger;
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
			fontWeight: "bold",
			
		}
		
		const centers = {
			textAlign: "center"
		}
		
		return( 
			<div style={centers}>
				<ul>
					<li style={style} onClick={this.handleClick.bind(this)}>Home</li>
					<li style={style} onClick={this.handleClick.bind(this)}>About</li>
					<li style={style} onClick={this.handleClick.bind(this)}>Contact</li>
					<li style={style} onClick={this.handleClick.bind(this)}>Gallery</li>
				</ul>
			</div>
			
		)
	}
}