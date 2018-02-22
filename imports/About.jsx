import React from 'react'
import Navbar from './Navbar'

export default class About extends React.Component{
	render(){
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				<h1>About</h1>
			</div>
			
		)
	}
}