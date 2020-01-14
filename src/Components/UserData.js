import React, { Component } from 'react'
import Axios from 'axios'
import UserCard from './UserCard'

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
        return (
            this.state.daniel.map(data => (
                <div>
                <UserCard 
                img={data.avatar_url}
                name={data.login}
                url={data.html_url}
                />
                </div>
            ))
          
        )
    }
}
