import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function ShoppingProducts() {
    const [products, setProducts] = useState([{ id: 0, title: null, price: 0, category: null, descriptin: null, image: null, rating: { rate: 0, count: 0 } }])
    let params = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(response => {
                console.log("products ", response.data)
                setProducts(response.data);
            })
    }, [])
    return (
        <div className="container-fluid">
            <h4>Products</h4>
            <div className="row">
                <div className="col-8">
                    <div className="d-flex flex-wrap w-50">
                        {
                            products.map(product =>
                                <div key={product.id} className="card m-2 p-2" style={{ width: "100px" }}>
                                    <img className="card-img-top" height="100px" src={product.image} />
                                    <div className="card-footer">
                                        <Link to={`details/${product.id}`}>Details</Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <Link to="/">Back To Home</Link>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <Outlet />
            </div>
        </div>

        
    )
}