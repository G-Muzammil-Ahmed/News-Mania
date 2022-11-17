import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";

export default class App extends Component {
  render() {
    
    return (
      
      <div>
        <Router>
        <Navbar/>
        
          <Routes>
        
          <Route exact path="/home" element={<News pageSize={6} key="general"  country={'in'}  category='general' uptext='general'/>}/>
          <Route exact path="/business" element={<News pageSize={6} key="business"  country={'in'} category='business'uptext='Business'/>}/>
          <Route exact path="/entertainment" element={<News pageSize={6} key="entertainment"  country={'in'} category='entertainment' uptext='entertainment'/>}/>
          <Route exact path="/healthscience" element={<News pageSize={6}key="healthscience"   country={'in'} category='healthscience'uptext='healthscience'/>}/>
          <Route exact path="/sports" element={<News pageSize={6}  key="sports" country={'in'} category='sports'uptext='sports'/>}/>
          <Route exact path="/technology" element={<News pageSize={6}  key="technolog" country={'in'} category='technology'uptext='technology'/>}/> 





        
            
          

        </Routes>

        </Router>
      </div>
    )
  }
}
