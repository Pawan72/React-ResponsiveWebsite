import React,{Component} from 'react';
import Submit from './Submit';
import "./css/contact.css";
import "../header/Header";

export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this._onButtonClick = this.onButtonClick.bind(this);
      }
    
      onButtonClick() {
        this.setState({
          showComponent: true
        });
      }
    render(){
        return(
            
            <div className="wrapper">
                <h1>
                    Contact Us
                </h1>
                <div className="contact-form">
                 <div className="input-fields">
                   <input type = 'text' className="input" placeholder="Name" />
                   <input type = 'text' className="input" placeholder="Email Address" />
                   <input type = 'text' className="input" placeholder="Phone" />
                   <input type = 'text'  className="input" placeholder="Subject" />
                  </div>
                  <div className="msg">
                    <textarea placeholder="Message"></textarea>
                    <div >
                        <button className="btn" 
                        onClick={this.onButtonClick}
                        >Send</button>
                        {this.state.showComponent ?
                        <Submit /> : null } 
                    </div>
                  </div>
               </div>
          </div>
        )
    }
}