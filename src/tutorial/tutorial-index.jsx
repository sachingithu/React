import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { WeatherApp } from "../components/weather-app/weather-app";

export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="text-center fs-2 fw-bold bg-danger text-white p-2">
                    <span className="bi bi-youtube">Video Tutorial App</span>
                    <div>
                        <Link to="java" className=" btn btn-warning">Java</Link>
                        <Link to="react" className="btn btn-primary mx-2">React</Link>
                        <Link to="weather" className="btn btn-success mx-2">Weather</Link>
                    </div>
                </header>
                <section className="mt-5 p-4">
                    <Routes>
                        <Route path="/" element={<div><h4>Tutorial Home</h4><p>React | Java</p></div>}/>
                        <Route path="java" element={<div><h4>Java Tutorial</h4><p>Core | Advance</p></div>}/>
                        <Route path="react" element={<div><h4>React Tutorial</h4><p>Component | Routing | Hooks</p></div>}/>
                        <Route path="*" element={<div><span><h4>Not Found Path</h4><p>Requested tutorial not found</p></span></div>}/>
                        <Route path="weather" element={<WeatherApp/>}/>
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}