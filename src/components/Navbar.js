import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to='/logout'><button style={{ padding: '7px 10px', fontWeight: 'bold' }}>Logout</button></Link>
            </div>
        )
    }
}
