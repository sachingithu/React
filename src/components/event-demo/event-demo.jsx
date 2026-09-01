import axios from "axios";

import { useEffect, useState } from "react";
import './event-demo.css'
export function EventDemo(){
    const [userName,setUserName]=useState('Sachin');

    const [mobiles,setMobiles]=useState([{img_src:null}]);
    const [preview,setPreview]=useState('iphone_17_1.png');

    function handleOnMouseOver(e){
        setPreview(e.target.src);
    }
    function loadMobiles(){
        axios.get('mobiles.json')
             .then(response=>{
                console.log(response.data)
                setMobiles(response.data);
             })
    }

    useEffect(()=>{
        loadMobiles();
    },[])

    function handleUserName(e){
        setUserName(e.target.value);
    }

    function handleInsertClick(e){
        alert("Insert clicked...");
        console.log(`
            Button Name :${e.target.name}\n
            Buttom Id   :${e.target.id}
            `)
    }
    function handleInsertClickCustom(...details){
        console.log( `${details}`);
       
    }

    function handleInsertBoth(e,...details){
        console.log(`
            Button Name :${e.target.name}\n
            Buttom Id   :${e.target.id}\n
            Details     :${details}
            `
        )
    }
    return(
        <>
        <div className="container-fluid">
            <h4>Event Demo</h4>

            {/* Passing default arguments */}
            <button name="Insert" id="btnInsert" onClick={handleInsertClick}>Insert</button><br/><br/>

                {/* Passing Custom Arguments */}
            <button onClick={handleInsertClickCustom(1,'TV',['Pune','Delhi'])}>InsertCustom</button><br/><br/>

            {/* Passing Default and custom arguments */}
            <button name="Insert" id="btnInsert" onClick={(e)=>handleInsertBoth(e,1,'TV',['Pune','Delhi'])}>InsertBoth</button><br/><br/>

            <div>
                <input onChange={handleUserName} type="text" value={userName}/>
            </div>
        </div>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-1">
                        {
                            mobiles.map((mobile,index)=>
                                <div key={index} className="my-4"> 
                                    <img src={mobile.img_src} width="100" height="100" onMouseOver={handleOnMouseOver}  className="thumb-nail"/>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-11">
                        <img width="400" src={preview} height="400" />
                    </div>
                </div>
        </div>
        </>
    )

}