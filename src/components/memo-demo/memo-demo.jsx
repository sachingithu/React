import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react"

export function MemoDemo(){
    const [products,setProducts]=useState([{id:0,title:'',price:0,image:null,category:null,description:null,rating:{rate:0,count:0}}]);
    const [searchString,setSearchString]=useState('');

    function handleSearchString(e){
        setSearchString(e.target.value);
    }

    const filteredProducts=useMemo(()=>{
        return products.filter(product=>product.title.toLowerCase().includes(searchString.toLowerCase()));
    },[searchString])

    const LoadAllProducts=useCallback(()=>{
              axios.get(`https://fakestoreapi.com/products`)
             .then(respone=>{
                setProducts(respone.data);
             })
    },[])
    useEffect(()=>{
        /**For implementing useCallback we are commenting following code , we are trying
         * to show how useCallback() cache's the function . so check above code
         */
        // axios.get(`https://fakestoreapi.com/products`)
        //      .then(respone=>{
        //         setProducts(respone.data);
        //      })
        LoadAllProducts();
    },[])
    return(
        <div className="container-fluid">
            <header className="p-4 text-center">
                <input onChange={handleSearchString} type="text" className="form-control w-50" placeholder="Search fakestore" />
            </header>
            <section className="mt-3">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredProducts.map(product=>
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td><img src={product.image} width="100" height="100"/></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}