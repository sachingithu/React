import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function ShoppingDetails(){
    const [product,setProduct]=useState([{id:0,title:null,price:0,description:null,rating:{rate:0,count:0}}]);

    let params=useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
             .then(response=>{
                console.log('product',response.data)
                setProduct(response.data);
             })
    },[])
    return(
        <div className="container-fluid">
            <h4>Details</h4>
                <div className="card p-2" style={{width:'250px'}}>
                    <img className="card-img-top" src={product.image} height="150"/>
                    <div className="card-header overflow-auto" style={{height:'100px'}}>
                        {product.title}
                    </div>
                    <div className="card-body">
                        <dl>
                            <dt>Price</dt>
                            <dd>{product.price}</dd>
                            {/* <dt>Rating</dt>
                            <dd>{product.rating.rate}<span className="bi bi-star-fill text-bg-success mx-2"></span></dd>                             */}
                        </dl>
                    </div>
                </div>
        </div>
    )
}