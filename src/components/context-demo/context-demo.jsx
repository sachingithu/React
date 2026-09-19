import { createContext, useContext, useState } from "react"

 //*********/
//Note : For understanding the concept of how data flow from parent to child using context api
// Uncomment following code
 /***********/

// let NameContext=createContext(null);

// export function Level1(){
//     const context=useContext(NameContext);
//     console.log("from level 1",context)
//     return(
//         <div className="bg-warning p-4">
//             <h3>Level 1- Hello !{context}</h3>
//             <Level2/>
//         </div>
//     )
// }
// export function Level2(){
//      const context=useContext(NameContext);
//      console.log("from level 2",context)
//     return(
//         <div className="bg-danger p-4">
//             <h3>Level 2- Hello !{context}</h3>
//         </div>
//     )
// }
// export function ContextDemo(){
//     const [user,setUser]=useState('');
//     function handleNameChange(e){
//         setUser(e.target.value);
//     }
//     return(
//      <div className="container-fluid p-4 bg-dark text-white  w-80 ">
//         <h3>Parent <input type="text" placeholder="type here..." onChange={handleNameChange}/></h3>
//         <NameContext value={user}>
//         <Level1/>
//         </NameContext>
//      </div>
//     )
// }

//**************For Understanding code for How Data send from child to parent Use Following
//              Code */

export function ChildComponent({onChildComponentClick}){

    function handleButtonClick(){
        let data='Hello from child...';
        onChildComponentClick(data);
    }
    return(
        <div className="container bg-danger text-white p-5">
            <h3>Child Component</h3>
            <button className="btn btn-light" onClick={handleButtonClick}>Send data to parent</button>
        </div>
    )
}
export function ContextDemo(){

    const [msg,setMsg]=useState('');
    function handeChildData(e){
        setMsg(e);
    }
    return(
        <div className="container-fluid p-4 bg-dark text-white">
            <h3>Parent Component</h3>
            <p>{msg}</p>
            <ChildComponent onChildComponentClick={handeChildData}/>
        </div>
    )
}

    //****For better understanding of parent to child and child to parent in real time we 
    // used FakestorIndex and FakestoreProducts example , so go and keep <FakestorIndex/>
    //  component in start up */