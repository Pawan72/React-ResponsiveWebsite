
import React, {Component} from 'react'
import "./css/work.css"

export default class Work extends Component{
    render(){
        return(
          <div className="wrapper">
            <h1>Want to get hired?</h1>
            <div className="work">
              <ol className="process-list" type='1'>
                
                <div className="first">
                  
                <h4>assessment</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/dotty/80/000000/set-as-resume.png" alt="assessment"/>
                  <p>First send us your resume and wait for our response. </p>
                </li>
                </div>
                <div className="second">
                <h4>Online Test</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/wired/64/000000/computer.png" alt="online test" />
                  
                  <p>If our HR team finds you suitable then you will be asked to attend an Online Test.</p>
                </li>
                
                </div>
                <div className="third">
                <h4>Telephonic Interview</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/dotty/64/000000/end-call-male.png" alt="telephone interview" />
                  
                  <p>If you score above the cutoff marks we will conduct a telephonic interview.The date and time will be shared with you.</p>
                </li>
                </div>
                <div className="fourth">
                <h4>F2F Interview</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/dotty/80/000000/meeting-room.png" alt="f2f interview" />
                  
                  <p>Then you will be called to our office for final Face to Face Interview.</p>
                  <p></p>
                </li>
                </div>
                <div className="fifth">
                <h4>Meet the Expert</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/wired/64/000000/handshake.png" alt="meet the expert" />
                  
                  <p>If all goes well you will get your offer in no time.</p>
                </li>
                </div>
              </ol>
            </div>
           
          </div>
        )
    }
}