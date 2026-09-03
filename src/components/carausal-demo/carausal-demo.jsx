import axios from "axios";
import { useEffect, useRef, useState } from "react"
export function CarausalDemo() {
    const [product,setProduct]=useState({id:0,title:null,image:null,description:null,price:0,rating:{rate:0,count:0},category:null});
    const [status,setStatus]=useState('');
    let productId=useRef(1);
    function LoadProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
             .then(response=>{
                console.log(response.data)
                setProduct(response.data);
                })
    }

    function handleNextClick(){
        productId.current=productId.current+1;
        LoadProduct(productId.current);
    }

    function handlePrevClick(){
      if (productId.current > 1) {
        productId.current=productId-1;
        console.log("current id ",productId.current)
        LoadProduct(productId.current);
        }
    }

    function handleSeekBarChange(e){
        productId.current=e.target.value;
        LoadProduct(productId.current)
    }

    function loadProductAuto(){
        productId.current=productId.current+1;
        LoadProduct(productId.current);
    }
    function handlePlayClick(){
        setInterval(loadProductAuto,5000);
    }
    useEffect(()=>{
        LoadProduct(1);
    },[])
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-4 p-2 w-50">
                <div className="card-header text-center overflow-auto" style={{height:'50px'}}>
                    {product.title}
                    <div className="fw-bold">
                        [{status}]
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handlePrevClick} className="btn btn-dark bi bi-chevron-left"></button>
                        </div>
                        <div className="col-10 position-relative">
                            <div className="badge bg-danger text-white rounded top-0 end-0 rounded-4 position-absolute">
                                {product.price.toLocaleString('en-us',{style:'currency',currency:'INR'})}
                            </div>
                            <img src={product.image} width="100%" height="300" />
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="btn btn-dark bi bi-chevron-right"></button>
                        </div>
                        <div className="m-2">
                            <input type="range" onChange={handleSeekBarChange} value={productId.current} className="form-range" min={1} max={20} />
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button onClick={handlePlayClick} className="btn btn-warning bi bi-play"></button>
                        <button className="btn btn-danger bi bi-pause mx-2"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}