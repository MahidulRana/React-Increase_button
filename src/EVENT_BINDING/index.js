import React, { Component } from 'react'

export default class EVENT_BINDING extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0 
        }
        this.handleClicked = this.handleClicked.bind(this)
    }


    handleClicked () {
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        const{count}= this.state
        return (
            <div>
               <h1>{count}</h1>
               <button onClick={this.handleClicked}>Increase</button>

            </div>
        )
    }
}
