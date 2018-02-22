import React from 'react'
import Navbar from './Navbar'

export default class Contact extends React.Component{
	
	render(){
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				<h1>Contact</h1>
			</div>
			
		)
	}
}