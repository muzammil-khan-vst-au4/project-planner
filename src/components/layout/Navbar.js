import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SignIn.links'
import SignOutLinks from './SignOut.links'

export default function Navbar() {
    return (
        <nav className="wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Planner</Link>
                <SignInLinks />
                <SignOutLinks />
            </div> 
        </nav>
    )
}
