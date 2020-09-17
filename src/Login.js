import React from 'react';
import { Button } from 'material-ui/core';
import './Login.css'

function Login() {
    const signIn = () => { };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="http://clipart-library.com/images_k/whatsapp-transparent/whatsapp-transparent-9.png"
                    alt="logo"
                />
                <div className="login__alert">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onclick={signIn}>
                    Sign in with Google
            </Button>

            </div>
        </div>
    )
}

export default Login
