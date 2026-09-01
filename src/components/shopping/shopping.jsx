import axios from "axios";
import { useEffect, useState } from "react"

export function Shopping() {
    const [categories,setCategories]=useState(['']);
    const [products,setProducts]=useState([{id:0,title:null,image:null,price:0,category:null,description:null,rating:{rate:0,count:0}}]);
    const [brands]=useState(["Levis","Nike","US-POLO","Puma"])

    function LoadCategories(){
        axios.get('https://fakestoreapi.com/products/categories')
             .then((response)=>{
                response.data.unshift('all');
                setCategories(response.data)
             })
    }

    function LoadProducts(){
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            setProducts(response.data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])
    return (
        <div>
            <header className="d-flex justify-content-between p-4 align-items-center bg-light">
                <div className="bi bi-bag fs-4 fw-bold">Shopping</div>

                <div>
                    <div className="input-group">
                        <button className="btn input-group-text"><span className="bi bi-search"></span></button>
                        <input type="text" placeholder="search products, brands, offers, deals" className="form-control" />
                    </div>
                </div>
                <div>
                    <button className="btn">New Arrivals</button>
                    <button className="btn">Best Sellers</button>
                    <button className="btn btn-secondary bi bi-person"></button>
                    <button className="btn btn-secondary bi bi-heart mx-2"></button>
                    <button data-bs-target="#cart" data-bs-toggle="offcanvas" className="btn btn-warning bi bi-cart4 position-relative">Cart<span className="badge bg-danger text-white rounded rounded-circle position-absolute">0</span></button>
                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            <h3>Your Cart Item</h3>
                            <button data-bs-dismiss="offcanvas" className="btn btn-close"></button>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-3">
                <div className="row">
                   
                    <div className="col-2 bg-light p-3">
                         <h4>Filter Products</h4>
                        <div>
                            <label className="form-label fw-bold">Select Category</label>
                            <div>
                                <select className="form-select ">
                                    {
                                        categories.map((category)=>
                                            <option value={category} key={category}>{category.toUpperCase()}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="my-4">
                            <label className="form-label fw-bold">By Brand</label>
                            <div>
                                <ul className=" list-unstyled mx-1">
                                    {
                                        brands.map(brand=>
                                            <li key={brand} className="form-switch my-2"><input className="form-check-input" type="checkbox"/><label>{brand}</label></li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="my-4">
                            <label className="form-label fw-bold">By Price</label>
                            <div>
                                <input type="range" className="form-range min-1 max-100" value={1}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-10">
                            <main className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                                    {
                                        products.map(product=>
                                            <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                                                <img src={product.image} className="card-img-top" height="120"/>
                                                <div className="card-header overflow-auto" style={{height:"100px"}}>
                                                    {product.title}
                                                </div>
                                                <div className="card-body">
                                                    <dl>
                                                        <dt>
                                                            Price
                                                        </dt>
                                                        <dd>
                                                            {product.price.toLocaleString('en-us',{style:"currency",currency:'INR'})}
                                                        </dd>
                                                        <dt>Rating</dt>
                                                        <dd>
                                                            {product.rating.rate} <span className="bi bi-star-fill text-success"></span>
                                                        </dd>
                                                    </dl>
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-warning bi bi-cart4 w-100"> Add To Cart</button>
                                                </div>
                                            </div>
                                        )
                                    }
                            </main>            
                    </div>
                </div>
            </section>
        </div>
    )
}