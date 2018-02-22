import React from 'react'
import Navbar from './Navbar'

export default class Gallery extends React.Component{
	
	render(){
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				<h1>Gallery</h1>
			</div>
			
		)
	}
}