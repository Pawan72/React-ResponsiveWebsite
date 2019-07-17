
import React, {Component} from 'react'
import "./css/work.css"

export default class Work extends Component{
    render(){
        return(
          <div className="wrapper">
            <h1>Want to get hired?</h1>
            <div className="work">
              <ul className="process-list list-unstyled" >
                <div className="first">
                  <h4>1.assessment</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/dotty/80/000000/set-as-resume.png" alt="assessment"/>
                  <p><b>First send us your resume and wait for our response. </b></p>
                </li>
                </div>
                <div className="second">
                <h4>2.Online Test</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/wired/64/000000/computer.png" alt="online test" />
                  <p><b>If our HR team finds you suitable then you will be asked to attend an Online Test.</b></p>
                </li>
                </div>
                <div className="third">
                <h4>3.Telephonic Interview</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/dotty/64/000000/end-call-male.png" alt="telephone interview" />
                  <p><b>If you score above the cutoff marks we will conduct a telephonic interview.The date and time will be shared with you.</b></p>
                </li>
                </div>
                <div className="fourth">
                <h4>4.F2F Interview</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/dotty/80/000000/meeting-room.png" alt="f2f interview" />
                  <p><b>Then you will be called to our office for final Face to Face Interview.</b></p>
                  <p></p>
                </li>
                </div>
                <div className="fifth">
                <h4>5.Meet the Experts</h4>
                  <li className="process">
                  <img src="https://img.icons8.com/wired/64/000000/handshake.png" alt="meet the expert" />
                  <p><b>If all goes well you will get your offer in no time.</b></p>
                </li>
                </div>
              </ul>
            </div>
           
          </div>
        )
    }
}