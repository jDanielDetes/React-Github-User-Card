import React, { Component } from 'react'

export default class DeepData extends Component {

    state= {
        daniel:[]
    }

    componentDidMount =() => {
        Axios.get('https://api.github.com/users/jDanielDetes')
        .then(res => {
            this.setState({daniel:res.data})
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
