import React, { Component } from 'react'
import Axios from 'axios'
import UserCard from './UserCard'
import { Grid, Card } from 'semantic-ui-react'

export default class UserData extends Component {

    state= {
        daniel:[]
    }

    componentDidMount =() => {
        Axios.get('https://api.github.com/users/jDanielDetes/followers')
        .then(res => {
            this.setState({daniel:res.data})
            console.log(res)
        })

        .catch(err => console.log(err))
    }

    render() {
     
       let userCardRow=this.state.daniel.map(data => {
            return (
        
                <div>
                <UserCard 
                img={data.avatar_url}
                name={data.login}
                url={data.html_url}
                type={data.type}
                />
                </div>
               
             
            )})
            
        return (
            <Card.Group itemsPerRow={6} >
                {userCardRow}
            </Card.Group>
        )
      
    }
}
