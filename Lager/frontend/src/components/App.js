import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Home from "./Home"
import EntryView from "./EntryView"



import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <React.Fragment>

  </React.Fragment>
);


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;



       //   <li><NavLink to="/Printable">Printable View</NavLink></li>

         // <Route path="/Printable" component={Printable}/>
 /* <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>

          <li><NavLink to="/EntryView">Entry</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home}/>

          <Route path="/EntryView" component={EntryView}/>
        </div>
      </div>
    </HashRouter>
    */