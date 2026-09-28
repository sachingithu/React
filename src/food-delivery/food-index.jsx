import { Link } from "react-router-dom";

export function FoodIndex(){
    return(
        <div className="container">
            <h3>Food Index</h3>
            <Link to="/menu">Home</Link>
        </div>
    )
}