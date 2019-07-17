import React,{Component} from 'react';
import "./css/contact.css";
import "../header/Header";
import Modal from 'react-awesome-modal';

export default class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          visible : false
        };
      
      }
    
      openModal=()=> {
        this.setState({
            visible : true
        });
    }
 
    closeModal=()=> {
        this.setState({
            visible : false
        });
    }
    render(){
      const Modal1=(
        <Modal visible={this.state.visible} width="400" height="250" effect="fadeInUp" onClickAway={() => this.closeModal()}>
        <div className="wrap">
            <h1>Thank You!</h1>
            <h5>We will get back to you soon.</h5>
            <button className="wrap-btn" onClick={() => this.closeModal()}>Close</button>
        </div>
      </Modal>
      )
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
                  {Modal1}
                  <div className="msg">
                    <textarea placeholder="Message"></textarea>
                    <div >
                        <button className="btn" 
                        onClick={() => this.openModal()} 
                        >Send</button>
                       
                    </div>
                  </div>
               </div>
          </div>
        )
    }
}