import React, { Component } from 'react'

export default class EVENT_HANDLER_CLASS extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            HandleOnChange: ""
       }

   }

   HandleOnChange = (e) => {
       this.setState({
        ChangeValue : e.target.value
       }, ()=>{
           console.log(this.state.ChangeValue)
       })
   }

    render() {
        const{ChangeValue}= this.state
        return (
            <div>
                <input type="text" onChange={this.HandleOnChange}></input>
                <p>{ChangeValue}</p>
            </div>
        )
    }
}
