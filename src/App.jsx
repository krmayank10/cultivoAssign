import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            orgid: '',
            fullname: '',
            username: '',
            designation: '',
            password: '',
            age: ''
        }
        this.changeorgid = this.changeorgid.bind(this)
        this.changefullname = this.changefullname.bind(this)
        this.changeusername = this.changeusername.bind(this)
        this.changedesignation = this.changedesignation.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.changeage = this.changeage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    changeorgid(event) {
        this.setState({
            orgid: event.target.value
        })
    }
    changefullname(event) {
        this.setState({
            fullname: event.target.value
        })
    }
    changeusername(event) {
        this.setState({
            username: event.target.value
        })
    }
    changedesignation(event) {
        this.setState({
            designation: event.target.value
        })
    }
    changepassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    changeage(event) {
        this.setState({
            age: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()

        const registered = {
            orgid: this.state.orgid,
            fullname: this.state.fullname,
            username: this.state.username,
            designation: this.state.designation,
            password: this.state.password,
            age: this.state.age
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            orgid: '',
            fullname: '',
            username: '',
            designation: '',
            password: '',
            age: ''
        })
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                                placeholder='Organization Id'
                                onChange={this.changeorgid}
                                value={this.state.orgid}
                                className='form-control form-group'
                            />
                            <input type='text'
                                placeholder='full Name'
                                onChange={this.changefullname}
                                value={this.state.fullname}
                                className='form-control form-group'
                            />

                            <input type='text'
                                placeholder='Username'
                                onChange={this.changeusername}
                                value={this.state.username}
                                className='form-control form-group'
                            />

                            <input type='text'
                                placeholder='Designation'
                                onChange={this.changedesignation}
                                value={this.state.designation}
                                className='form-control form-group'
                            />

                            <input type='password'
                                placeholder='password'
                                onChange={this.changepassword}
                                value={this.state.password}
                                className='form-control form-group'
                            />
                            <input type='number'
                                placeholder='Age'
                                onChange={this.changeage}
                                value={this.state.age}
                                className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit' />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;