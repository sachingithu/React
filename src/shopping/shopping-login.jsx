import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function ShoppingLogin(){
    const [cookies,setCookie,removeCookie]=useCookies(['username']);
    const [uname,setUname]=useState('');

    let navigate=useNavigate()

    function handleNameChange(e){
        setUname(e.target.value);
    }

    function handleLoginClick(){
        //setCookie('username',uname,{expires:new Date('')})
        setCookie('username',uname);
        navigate('/search')
    }
    return(
        <div>
            <h4>Login User</h4>
            <dl>
                <dt>Username</dt>
                <dd><input onChange={handleNameChange} type="text" placeholder="Username"/></dd>
            </dl>
            <button onClick={handleLoginClick}>Login</button>
            <div className="mt-3">
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}