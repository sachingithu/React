import { useEffect } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function ShoppingSearch(){
    const [cookies,setCookie,removeCookie]=useCookies(['username']);
    let navigate=useNavigate();
    useEffect(()=>{
        if(!cookies['username']){
            navigate('/login')
        }
    },[cookies])
    function handleSignout(){
        removeCookie('username');
        navigate('/login')
    }
    return(
        <div>
            <header className="p-2 d-flex justify-content-between border border-1 fs-2 fw-bold mb-3">
                <span>
                Hello...!{cookies['username']}
                </span>
                <button onClick={handleSignout} className="btn btn-warning bi bi-person">SignOut</button>
            </header>
           <div className="text-center">
             <h3>Search Products</h3>
            <form action="/results">
                <input type="text" name="search" placeholder="eg : electronics, jewelery..." />
                <button>Search</button>
            </form>
           </div>
        </div>
    )
}