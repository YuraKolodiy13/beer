import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BeersPage from '../../pages/BeersPage/BeersPage';
import '../../assets/styles/global.scss';
import Beer from "../../pages/Beer/Beer";

class App extends Component{

  render(){
    return(
      <div>
        <div className="container">
          <Header/>
          <Switch>
            <Route path='/' component={BeersPage} exact/>
            <Route path='/beer/:id' component={Beer} exact/>
          </Switch>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
