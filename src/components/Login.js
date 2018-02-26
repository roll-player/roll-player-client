import React, { Component } from 'react'
import auth0Lock from 'auth0-lock'


class Login extends Component {

    constructor (props) {
        super(props)
        this.lock = new auth0Lock('0JN9ieibg3YbLHKdmxt1owEvJDACQKhk', 'rollplayer.auth0.com', {auth: { responseType: "token"}})
        this.state = {loggedIn: false, err: null}
    }

    componentWillMount() {
        this.lock.on('authenticated', authResult => {
            this.setState({ loggedIn: true })
            localStorage.setItem('accessToken', authResult.accessToken)
            localStorage.setItem('id_token', authResult.idToken)
        })
    }

    login () {
        this.lock.show()
    }

    logout () {
        this.setState({ loggedIn: false })
        localStorage.setItem('accessToken', null)
    }

    render () {

        if (this.state.loggedIn) {
            return (<button onClick={() => this.logout()}>Logout</button>)
        }

        return (
            <button onClick={() => this.login()}>Login</button>
        )
    }
}

export default Login
