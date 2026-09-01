import React from 'react'
import '../login/login.css'
function Login(){
    return(
        <main className='d-flex justify-content-center'>
        <form className='mt-4 alert alert-dismissable alert-warning p-4 border border-2 rounded'>
            <h3>User Login</h3>
            <button data-bs-dismiss="alert" className='btn btn-close'></button>
            <dl>
                <dt>Username</dt>
                <dd><input type="text" className='form-control'/></dd>
                <dt>Password</dt>
                <dd><input type="password" className='form-control'/></dd>
            </dl>
            <button className='btn btn-danger'>Login</button>
        </form>
        </main>
    )
}
export default Login;