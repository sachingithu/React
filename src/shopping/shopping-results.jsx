import axios from "axios";
import { useEffect,useState} from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

export function ShoppingResults(){
    const [products, setProducts] = useState([{ id: 0, title: null, price: 0, category: null, descriptin: null, image: null, rating: { rate: 0, count: 0 } }]);

    let [ref]=useSearchParams();
    useEffect(()=>{
        //console.log(ref.get("search"))
        axios.get(`https://fakestoreapi.com/products/category/${ref.get('search')}`)
             .then(response=>{
                setProducts(response.data);
             })
    },[])

        let navigate=useNavigate();

    function handleNavigate(){
        navigate('/search');
    }
    return(
        <div>
            <button onClick={handleNavigate} className="btn bi bi-chevron-left bg-danger-subtle">Back</button>
             <h3>Search Results</h3>
            {
                products.map(product=><p key={product.id}>{product.title}<img src={product.image} width="50" height="60"/></p>)
            }
        </div>
    )
}