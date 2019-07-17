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
            return (
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="banner">
                        <div className="container">
                            <Link className="navbar-brand d-flex align-items-center home" to="/">
                                Home
                            </Link>
                        <div>
                          <div className="collapse navbar-collapse toggle-down" id="navbarTogglerDemo01">
                              <ul className="nav navbar-nav navbar-right">
                                  <li className="nav-item">
                                      <Link className="nav-link" to="/about">About Us</Link>
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
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
              </nav>

          );
      }
                
    
              
    
           
        
    
    }
 
    






