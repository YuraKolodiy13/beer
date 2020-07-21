import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BeersPage from '../../pages/BeersPage/BeersPage';
import '../../assets/styles/global.scss';
import Brewery from "../../pages/Brewery/Brewery";
import BreweriesPage from "../../pages/BreweriesPage/BreweriesPage";
import './App.scss'

class App extends Component{

  render(){
    return(
      <div className='main'>
        <div className="container">
          <Header/>
          <Switch>
            <Route path='/' component={BeersPage} exact/>
            <Route path='/breweries' component={BreweriesPage} />
            <Route path='/brewery/:id' component={Brewery} />
          </Switch>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
