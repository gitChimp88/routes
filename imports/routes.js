import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App'
import App from './About'
import App from './Contact'
import App from './Gallery'


const routes    = () => {
	
   return <Router>
	<div>
      <Route path   = "/"                 component = {App}/>
      <Route path   = "/About"            component = {About}/>
	  <Route path   = "/Contact"            component = {Contact}/>
	  <Route path   = "/Gallery"            component = {Gallery}/>
	</div>
  </Router>

}

export default routes

