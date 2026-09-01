
import axios from "axios";
import React, { useEffect, useState } from "react"
export function Flipkart(){
    const[products,setProducts]=useState({title:null,image:null,price:0,rating:{rate:0,ratings:0,review:0},offers:[]});
    function LoadData(){
        // ******Using Xml Http*********

        // var http=new XMLHttpRequest();
        // http.open("get","product.json",true);
        // http.send();
        // http.onreadystatechange=function(){
        //    if( http.readyState===4){
        //     setProducts(JSON.parse(http.responseText));
        //     console.log(JSON.parse(http.responseText));
        //    }
        // }

        // *****Using Fetch api*****

        // fetch('product.json')
        // .then(response=>response.json())
        // .then(product=>setProducts(product))

        // *********Using axios*******

            axios.get('product.json')
                 .then(response=>{
                   setProducts(response.data);
                 })
       
    }
    useEffect(()=>{
        LoadData();
    },[])
    return(
        <div className="container-fluid">
            <div className="mt-5 row">
                <div className="col-3">
                    <img width="100%" src={products.image} height="400"/>
                </div>
                <div className="col-9">
                    <div className="fs-3">
                        {products.title}
                    </div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded">{products.rating.rate}<span className="bi bi-star-fill"></span></span>
                        <span className="mx-3 fw-bold text-secondary">{products.rating.ratings.toLocaleString('en-in')}ratings & {products.rating.reviews} reviews</span>                        
                    </div>
                    <div className="my-2 fs-1 fw-bold">
                        {products.price.toLocaleString('en-in',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:0})}
                    </div>
                    <div>
                        <h4>Available Offers</h4>
                        <ul className="list-unstyled">
                            {
                                products.offers.map(offer=>
                                    <li className="bi bi-tag-fill my-3 text-success" key={offer}><span className="text-secondary">{offer}</span></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}