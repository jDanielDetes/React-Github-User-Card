 import React, { Component } from 'react'
 import { Card, Icon, Image } from 'semantic-ui-react'

 
 export default class UserCard extends Component {
     render() {
         return (
             <div>
                 <Card>
    <Image src={this.props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.type}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={this.props.url}> 
        <Icon name='user' />
       Link to profile!
      </a>
    </Card.Content>
  </Card>
             </div>
         )
     }
 }
 
 {/*
 <Card>
    <Image src={this.props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.type</span>
      </Card.Meta>
      <Card.Description>
        {Matthew is a musician living in Nashville.}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={this.props.url}> 
        <Icon name='user' />
       Link to profile!
      </a>
    </Card.Content>
  </Card>*/ }