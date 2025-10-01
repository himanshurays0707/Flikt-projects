import React, { useState } from 'react'

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""} onclick={() => setIsLogin(true)}>Login</button>
                    <button className={isLogin ? 'active' : ""} onclick={() => setIsLogin(false)}>Signup</button>
                </div>
                {isLogin ? <>
                    <div className='form'>
                        <h2>
                            Login form</h2>
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <a href='#' >Forgot Password</a>
                        <p>Not a Member? <a href='#' onclick={() => setIsLogin(false)}>Sign Up Now</a></p>
                    </div>
                </> : <>
                    <div className='form'>
                        <h2>
                            SignUp form</h2>
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <input type='password' placeholder='ConfirmPassword' />
                        <button>SignUp</button>
                    </div>
                </>}

            </div>

        </div>
    )
}