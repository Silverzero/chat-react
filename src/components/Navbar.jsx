import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

const Navbar = () => {

    const {session, getLogin, getLogout} = React.useContext(AuthContext)

    return (
        <nav className="navbar navbar-fixed-top navbar-dark bg-dark" >
            <Link className="navbar-brand" to="/" ><h2>Chat</h2></Link>
            <div className="justify-content-end" >
                { 
                    session.uid ? 
                    (
                        <span style={{cursor:"pointer"}} className="navbar-brand" onClick={getLogout} >Logout</span>
                    ) : ( 
                        <span style={{cursor:"pointer"}} className="navbar-brand" onClick={getLogin} >Login</span> 
                    )
                }
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
