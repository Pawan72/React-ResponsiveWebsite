import React, { Component } from 'react'
import "./css/about.css"


export default class About extends Component {
  render() {
    return (
      <div class="wrapper-about">
        <h1>Our Team</h1>
        <div class="our_team">
          <div class="team_member">
            <div class="member_img">
              <img src="https://i.imgur.com/2Necikc.png" alt="our_team" />
            </div>
            <h3>john wright</h3>
            <span>CEO</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
          </div>
          <div class="team_member">
            <div class="member_img">
              <img src="https://i.imgur.com/JzUIF4o.png" alt="our_team" />
            </div>
            <h3>barbara mori</h3>
            <span>Accountant</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
          </div>
          <div class="team_member">
            <div class="member_img">
              <img src="https://i.imgur.com/Ctwf8HA.png" alt="our_team" />
            </div>
            <h3>harry dickens</h3>
            <span>Product Manager</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
          </div>
          <div class="team_member">
            <div class="member_img">
              <img src="https://i.imgur.com/A1Fjq0d.png" alt="our_team" />
            </div>
            <h3>sammy louise</h3>
            <span>product analyst</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
          </div>
        </div>
      </div>
    )
  }
}