import * as React from 'react';
import '../style/login.scss';

const defaultLogin = { defaultUsr:"admin",defaultPass : "admin"};

export interface IProps{
    authentication:any;
}
export interface IState{
    userDetails:any;
    access:boolean;
}
export default class Login extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            userDetails : {username:"",password:""},
            access : false
        };
        this.handlerChange = this.handlerChange.bind(this);
      }
      handlerChange(type:any,e:any){
          let userDetails = this.state.userDetails;
          userDetails[type] = e.target.value;
          this.setState({userDetails});
      }
      validation(){
          if(defaultLogin.defaultUsr == this.state.userDetails.username && defaultLogin.defaultPass == this.state.userDetails.password){
              this.setState({access:true},()=>{
                  this.props.authentication(this.state.access)
              });
          }else{
            this.setState({access:false},()=>{
                this.props.authentication(this.state.access)
            });
          }
      }
    render(){
        return( 
            <React.Fragment>
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-6 login-form-1">
                            <h3>Personal Login</h3>
                            
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email *" value={this.state.userDetails.username} onChange={(e)=> this.handlerChange("username",e)} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password *"  value={this.state.userDetails.password} onChange={(e)=> this.handlerChange("password",e)} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btnSubmit" value="Login" onClick={this.validation.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <a href="#" className="btnForgetPwd">Forget Password?</a>
                                </div>
                            
                        </div>
                        <div className="col-md-6 login-form-2">
                            <div className="login-logo">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                            </div>
                            <h3>Corporate Login</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email *" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password *"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btnSubmit" value="Login" />
                                </div>
                                <div className="form-group">
                                    <a href="#" className="btnForgetPwd">Forget Password?</a>
                                </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}