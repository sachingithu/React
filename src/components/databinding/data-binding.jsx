import React from "react";
import { useState,useEffect } from "react";
export function DataBinding(){
    const [name, setName] = useState('Sachin');
    const [age, setAge] = useState(30);
    const[view,setView]=useState(45555555);
    const [getValue, setValue] = useState('');

    const[category,setCategory]=useState(["All","Electronics","Mobile"]);
    const[products,setProducts]=useState([{id:1,Name:"Mobile",price:20000},{id:2,Name:"Laptop",price:70000},{id:3,Name:"Chair",price:900}])

    const[now]=useState(new Date());

    useEffect(() => {
        setName('Jadhav');
        setAge(26);
       setView(4500000);
       setValue('bg-warning');
    },[])
    
    return(
        <>
        <div className="container-fluid">
            <h3>Data Binding</h3>
          <p>  Hello !  <span>{name} </span>Your age is <span>{age}</span></p>
               
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> 
            <p> {view.toLocaleString('en-us',{notation:'compact'})};</p>
        </div>
        <div className="container-fluid">
            <h3 className={`text-white border border-2 border-dark p-2 ${getValue}`}>Data binding</h3>
        </div>

        {/* ***Data binding */}
        <div className="container-fluid">
            <ol>
                    {
                        category.map((value,index)=><li key={index}>{value}</li>)
                    }
            </ol>
            <select>
                {
                    category.map((value,index)=><option key={index}>{value}</option>)
                }
            </select>
        </div>
        <div className="w-25">
                <ul className="list-unstyled">
                    {category.map((value)=><li key={value}><input type="checkbox"/><label>{value}</label></li>)}
                </ul>
        </div>

        {/* ****Data binding -complex data using table*/}
   <div>
    <table className="table table-hover w-25">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        {
            products.map(product=>
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.Name}</td>
                <td>{product.price}</td>
            </tr>
            )
        }
    </tbody>
  </table>
   </div>

        {/* Date in react */}
        <div>
            <p>Todays Date is : {now.toDateString()}</p>
        </div>
        </>
    )
}