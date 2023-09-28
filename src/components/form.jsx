import React, { Component } from "react";

export class Form extends Component {
    constructor(props) {
        super();
        this.setContacts = props.setContacts;
    }
    state = {
        name: '',
        number: '',
    }


    handeChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handeSubmit = (event) => {
        event.preventDefault()
        if (this.state.number && this.state.name) {
            this.props.setContacts(this.state.name, this.state.number)
            this.setState({
                name: '',
                number: ''
            })
        }
    }


    render() {
        return (
            <form onSubmit={this.handeSubmit} >
                <label>
                    <span>Name</span>
                    <input onChange={this.handeChange} type="text" name="name" value={this.state.name} required />
                </label>
                <label>
                    <span>Number</span>
                    <input onChange={this.handeChange} type="tel" name="number" value={this.state.number} required />
                </label>
                <button onClick={this.handeSubmit} type="submit">Add contact</button>
            </form >

        )
    }
}

