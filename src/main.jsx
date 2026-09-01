import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import Login from './components/login/login.jsx'
import { DataBinding } from './components/databinding/data-binding.jsx'
import { Flipkart } from './components/flipkart/flipkart.jsx'
import { Shopping } from './components/shopping/shopping.jsx'
import { EventDemo } from './components/event-demo/event-demo.jsx'
import { EmiCalculator } from './components/emi-calculator/emi-calculator.jsx'
import { WeatherApp } from './components/weather-app/weather-app.jsx'
createRoot(document.getElementById('root')).render(
  <>
  {/* <StrictMode> */}
    {/* <Login/> */}
    {/* <DataBinding/> */}
    {/* <Flipkart/> */}
    {/* <Shopping/> */}
    {/* <EventDemo/> */}
    {/* <EmiCalculator/> */}
    <WeatherApp/>
   {/* </StrictMode>, */}
  </>
)
