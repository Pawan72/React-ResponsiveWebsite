import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'
export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
    
      toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }
      render() {
            
              const show = (this.state.menu) ? "show" : "" ;
            
              return (
            
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="banner">
                    <div className="container">
                        
                       
                            <Link className="navbar-brand d-flex align-items-center home" to="/">
                                
                            Home
                            
                            </Link>
                            
                        
                    <div>
                    
                    <button className="navbar-toggler"  data-toggle="collapse" data-target=".navHeaderCollapse">
                                <span className="navbar-toggler-icon"></span>
    
                                </button>
                        <div className={"collapse navbar-collapse" +show}>
                        
                            
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/work">How it work</Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            
                        </div>
                        </div>
                    </div>
                    
                </nav>
            
              );
              }
                
    
              
    
           
        
    
    }
 
    






