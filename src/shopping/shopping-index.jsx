import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";

export function ShoppingIndex() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header className="fs-2 fw-bold  p-2 border border-2 bg-dark text-white d-flex justify-content-between">
                    <div>
                        <span className="bi bi-bag">Shopping</span>
                    </div>
                </header>
                <section>
                    <Routes>
                        <Route path="/" element={<ShoppingHome />} />
                        <Route path="products/:category" element={<ShoppingProducts />} />
                        <Route path="details/:id" element={<ShoppingDetails />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}