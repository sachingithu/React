import axios from "axios";
import { useEffect, useState } from "react"

export function FakestoreProducts(props) {
    const [products, setProducts] = useState([{ id: 0, title: null, price: 0, category: null, descriptin: null, image: null, rating: { rate: 0, count: 0 } }]);

    function LoadData() {
        if (props.category === 'all') {
            axios.get(`https://fakestoreapi.com/products`)
                .then((response) => {
                    setProducts(response.data);
                })
        }else{
            axios.get(`https://fakestoreapi.com/products/category/${props.category}`)
            .then(response=>{
                setProducts(response.data);
            })
        }
    }
    useEffect(() => {
        LoadData();
    }, [props])
    return (
        <div className="container-fluid d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
            {
                products.map(product=>
                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                        <img src={product.image} className="card-img-top" height="120" />
                        <div className="card-header overflow-auto" style={{height:'130px'}}>
                            {
                                product.title
                            }
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>{product.rating.rate}<span className="bi bi-bi-star-fill text-success"></span></dd>

                            </dl>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning bi bi-cart4 w-100">Add To Cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}