import React from 'react';
import '../style/App.scss';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Login from './Login';

export default class App extends React.Component {
  
  constructor(props:any){
    super(props);
    this.state={
      access : false
    };
    this.authentication = this.authentication.bind(this);
  }
  

  authentication(result:any){
    if(result){
      this.setState({access:true});
      console.log("success");
    }else{
      this.setState({access:false});
      console.log("failed")
    }
  }

  render(){
    return (
      <React.Fragment>
        <BrowserRouter>
        <Header></Header>
        <Route exact path='/' component={Home}></Route>
        <Route path='/About' component={About}></Route>
        <Route path='/Services' component={Services}></Route>
        <Route path='/Portfolio' component={Portfolio}></Route>
        <Route path='/Team' component={Team}></Route>
        <Route path='/Contact' component={Contact}></Route>
        <Route path='/Login' render={() => <Login authentication = {this.authentication} />}></Route>
        </BrowserRouter>
      </React.Fragment>
    );
 }
}
