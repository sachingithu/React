import { useEffect, useState } from "react";
import { FakestoreProducts } from "./fakestor-products";
import axios from "axios";

export function FakestoreIndex(){
    const [categoryName,setCategoryName]=useState('all');
    const [searchText,setSearchText]=useState('');
    const [categories,setCategories]=useState([]);


    function handleSearchText(e){
            setSearchText(e.target.value);
    }
    function handleSelectChange(e){
        setCategoryName(e.target.value);
    }
    function handleSearchClick(){
        setCategoryName(searchText);
    }

    function LoadCategories(){
        axios.get(`https://fakestoreapi.com/products/categories`)
             .then(response=>{
                response.data.unshift('all');
                setCategories(response.data);
             })
    }

    useEffect(()=>{
        LoadCategories();
    },[])
    return(
        <div className="container-fluid">
            <header className="p-3 fs-9 d-flex justify-content-between align-items-center border border-1 border-secondary mt-2">
               <div>
                 <span className="bi bi-bag fw-bold">Fakestore</span>
               </div>
               <div className="input-group" style={{width:'500px'}}>
                <select onChange={handleSelectChange} style={{width:'100px'}}>
                    {
                        categories.map(category=>
                            <option key={category} value={category}>{category.toUpperCase()}</option>
                        )
                    }
                </select>
                 <input onChange={handleSearchText} type="text" className="form-control" placeholder="Search Fakestore" />
                 <button onClick={handleSearchClick} className="bi bi-search btn btn-warning"></button>
               </div>
               <div className="btn btn-warning bi bi-cart4 position-relative mx-1"><span  className="badge rounded rounded-circle position-absolute"></span></div>
            </header>
            <section className="mt-2">
                <FakestoreProducts category={categoryName}/>
            </section>
        </div>
    )
}