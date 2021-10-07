import React, { Component } from 'react';
// import axios from "axios";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: 'swpp@snu.ac.kr',
            password: 'iluvswpp'
        }
    }
    login() {
        console.log(this.state);
        var Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state == null) { alert('Email or password is wrong') }
        else {
            fetch('http://localhost:3001/user?q=' + this.state.email).then((data) => {
                data.json().then((resp) => {
                    // resp = Array.from(resp)
                    console.log('resp is ', resp, resp.length, typeof resp);
                    if (resp.length > 0) {
                        localStorage.setItem('/', JSON.stringify(resp))
                        console.log(this.props.history.push('articles'));
                    } else {
                        alert('Email or password is wrong')
                    }
                })
            })
        }
        // axios.get(`http://localhost:3001/user?q=${this.state.email}`)
        //     .then(resp => {
        //         console.log(resp.data, resp.data.length);
        //         if (resp.data.length === 1) {
        //             console.log(this.props.history.push('articles'));
        //         } else {
        //             alert('User Does not exist')
        //         }
        //     });

    }
    render() {
        return (
            <div>
                <label><b>Email</b><br /></label>

                <input type="email" placeholder="email" name="email" required
                    value={this.state.email}
                    onChange={
                        (e) => this.setState({ email: e.target.value })
                    } /><br />
                <label><b> Password</b><br /></label>

                <input type="password" placeholder="password" name="password"
                    value={this.state.password}
                    onChange={
                        (e) => this.setState({ password: e.target.value })
                    } /><br />
                <button onClick={() => { this.login() }}>Login</button>
            </div>
        )
    }
}
export default Login