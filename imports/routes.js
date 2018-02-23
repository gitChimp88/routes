import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'

const routes    = () => {
	
   return <Router>
	<div>
      <Route exact path   = "/"                   component = {App}/>
      <Route path   = "/About"              component = {About}/>
	  <Route path   = "/Contact"            component = {Contact}/>
	  <Route path   = "/Gallery"            component = {Gallery}/>
	</div>
         </Router>

}

export default routes

