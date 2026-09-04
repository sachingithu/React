import { useEffect, useRef, useState } from "react"
export function ThrottleDemo() {
    const [clock, setClock] = useState(new Date())

    const [ms,setMS]=useState(0);
    const [second,setSecond]=useState(0);
    const [minit,setMinit]=useState(0);
    const [hrs,setHrs]=useState(0);

    let miliseconds=0;
    let seconds=0;
    let thread=useRef(null);
    function StartWatch(){ 
        let min=0;
        let hrs=0;
        miliseconds++;
        
        if(miliseconds===999){
            seconds++;
            miliseconds=0;
            if(seconds===59){
                minit++;
                seconds=0;
            }
        }
        setMS(miliseconds);
        setSecond(seconds);
        setMinit(minit);

    }
    function handleStartClick(){
        thread.current=setInterval(StartWatch,1);
    }

    function handleStopClick(){
        clearInterval(thread.current)
    }

    function LoadTime() {
        setClock(new Date());
    }

    useEffect(() => {
        setInterval(LoadTime, 1000);
    }, [])
    return (
        <>
            <div className="container-fluid ">
                <h1 className="text-center">{clock.toLocaleTimeString()}</h1>
            </div>
            <div className="container-fluid d-flex justify-content-center">

                <div className="row  p-3 w-50 bg-primary text-white mt-5">
                    <div className="col">
                        {hrs}
                    </div>
                    <div className="col">
                        :
                    </div>
                    <div className="col">
                        {minit}
                    </div>
                    <div className="col">
                        :
                    </div>
                    <div className="col">
                        {second}
                    </div>
                    <div className="col">
                        :
                    </div>
                    <div className="col">
                        {ms}
                    </div>
                <div>
                    <button onClick={handleStartClick} className="btn btn-success m-3">Start</button>
                    <button onClick={handleStopClick} className="btn btn-danger">Stop</button>
                </div>
                </div>

            </div>
        </>
    )
}