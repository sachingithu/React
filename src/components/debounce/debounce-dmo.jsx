import { useRef, useState } from "react"
export function DebounceDemo(){
    const [volume, setVolume] = useState('');
    const thread2=useRef();
    function Level1(){
        setVolume('Volume :20%');
    }
      function Level2(){
        setVolume('Volume :60%');
    }
      function Level3(){
        setVolume('Volume :Full');
    }

    function handleButtonClick(){
        setTimeout(Level1,3000);
        thread2.current=setTimeout(Level2,6000);
        setTimeout(Level3,9000);
    }
    function handleCancel(){
        clearTimeout(thread2.current);
    }
    return(
        <div className="container-fluid">
            <div className="mt-4">
                <button onClick={handleButtonClick} className="btn btn-primary bi bi-volume-up-fill"></button>
                <p>{volume}</p>
         
                <button onClick={handleCancel} className="btn btn-danger mx-2">Cancel Level2</button>
              
            </div>
        </div>
    )
}