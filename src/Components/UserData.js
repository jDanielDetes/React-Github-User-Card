import React, { Component } from 'react'
import Axios from 'axios'

export default class UserData extends Component {

    state= {
        login: ''
    }

    componentDidMount =() => {
        Axios.get('https://api.github.com/users/jDanielDetes')
        .then(res => {
            console.log(res)
        })

        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
