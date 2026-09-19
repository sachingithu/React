import { createContext, useEffect, useState } from "react";
import { FakestoreProducts } from "./fakestoreproducts";
import axios from "axios";

export let SearchContext = createContext(null);
export function FakestorIndex() {
    const [searchString, setSearchText] = useState('');
    const [searchData, setSearchData] = useState('all');
    const [cartItem, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    function handleSearchText(e) {
        setSearchText(e.target.value);
    }
    function handleSearchClick() {
        setSearchData(searchString);
        console.log("search data ", searchString);
    }
    function getDataFromChild(product) {
        console.log("data came from child", product)
        cartItem.push(product);
        setCartCount(cartItem.length);
    }
    return (
        <div className="container-fluid">
            <header className="p-3 fs-9 d-flex justify-content-between align-items-center border border-1 border-secondary mt-2">
                <div>
                    <span className="bi bi-bag fw-bold">Fakestore</span>
                </div>
                <div className="input-group" style={{ width: '500px' }}>
                    <input onChange={handleSearchText} type="text" className="form-control" placeholder="Search Fakestore" />
                    <button onClick={handleSearchClick} className="bi bi-search btn btn-warning"></button>
                </div>

                <div>
                    <button data-bs-toggle="offcanvas" data-bs-target="#cart" className="btn btn-warning bi bi-cart4 position-relative mx-1"><span className="badge rounded rounded-circle position-absolute bg-danger">{cartCount}</span></button>
                    <div className="offcanvas offcanvas-end" id="cart">
                        <div className="offcanvas-header">
                            <h4>Your Cart Items</h4>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Preview</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItem.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td><img width="50" height="50" src={item.image} /></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-2">
                <SearchContext value={searchData}>
                    <FakestoreProducts onAddClick={getDataFromChild} />
                </SearchContext>
            </section>
        </div>
    )
}