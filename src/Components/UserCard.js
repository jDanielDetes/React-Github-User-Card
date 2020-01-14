 import React, { Component } from 'react'
 
 export default class UserCard extends Component {
     render() {
         return (
             <div>
                 <img src={this.props.img} alt=""/>
                 <h2>{this.props.name}</h2>
                 <a href={this.props.url}>Link to profile!</a>
             </div>
         )
     }
 }
 