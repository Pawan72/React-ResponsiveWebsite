import React, { Component } from 'react'
import './css/home.css';


export default class Home extends Component {
    render() {
        return (
            <div>
                
                <div className="banner">
                    <div className="container">
                        <div className="banner-text">
                            <div className="banner-heading">
                                Sorry<br/>
                                Can't find what you are looking for!
                            </div>
                            <div className="banner-sub-heading">
                               {this.props.title}
                            </div>
                        </div>
                    </div>
                </div>
                
             </div>
        )
    }
}