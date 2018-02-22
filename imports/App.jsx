import React from 'react'
import Navbar from './Navbar'


export default class App extends React.Component{
	render(){
		return( 
			<div>
				<Navbar
					history={this.props.history}
					/>
				<h1>Home</h1>
			</div>
			
		)
	}
}