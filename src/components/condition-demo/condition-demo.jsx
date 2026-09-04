import { useEffect, useState } from "react"
import Login from "../login/login";
import { WeatherApp } from "../weather-app/weather-app";

export function ConditionDemo() {
    const [view, setView] = useState('');

    const [toggleSignin,setToggleSignin]=useState(true);

    useEffect(()=>{
        setToggleSignin(true);
    },[])

    function handleSigninClick(){
        setToggleSignin(false);
    }

    function handleSignoutClick(){
        setToggleSignin(true);
    }
    // ***Following function wrote is also one way of rendering component but
    // Instead of writing following both function we can also conditionally render the component ***

    // function handleLoginClick() {
    //     setView(<Login />)
    // }

    // function handleWeatherClick() {
    //     setView(<WeatherApp />)
    // }

//***We can also do conditional rendering as follow using switch case */
    // function LoadView(e) {
    //     switch(e.target.value){
    //         case 'Login':
    //             setView(<Login/>);
    //             break;
    //         case 'Weather':
    //             setView(<WeatherApp/>);
    //             break;    
    //     }
    // }
    return (
        <div>
            {/* <div className="container-fluid justify-content-center mt-5"> */}
                {/**Following is code for without switch  */}
                {/* <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
                <button onClick={handleWeatherClick} className="btn btn-success mx-3">Register</button> */}

                {/**Following is code for with switch */}
                {/* <button onClick={LoadView} value='Login' className="btn btn-primary">Login</button>
                <button onClick={LoadView} value='Weather' className="btn btn-success mx-3">Register</button>
            </div>
            <hr />
            <div>
                {view}
            </div> */}

            <div className="container-fluid">
                 <header className=" d-flex justify-content-between align-items-center mt-2 p-3 border border-2 border-secondary">
                    <div className="fw-bold fs-4">
                        <span className="bi bi-amazon">Amazon</span>
                    </div>
                    <div>
                        <span>Home</span>
                        <span className="mx-4">Offers</span>
                        <span>Contact</span>
                    </div>
                    <div>
                        {
                            (toggleSignin==true)?
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Mobile"/>
                                <button onClick={handleSigninClick} className="btn btn-secondary">Sign In</button>
                            </div>
                            :
                            <div>
                                <button onClick={handleSignoutClick} className="btn btn-warning bi bi-person-fill">Sign Out</button>
                            </div>
                        }


                    </div>
                 </header>
            </div>
        </div>
    )
}