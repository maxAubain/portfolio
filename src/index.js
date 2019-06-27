import React from "react"
import ReactDOM from "react-dom"
{/* import Home from "./Home" */}
import Header from "./Header"
import Footer from "./Footer"
import TileArray from "./TileArray"
{/* import About from "./About" */}

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/tailwind.css'

const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper" style={{ /* border: '2px solid blue' */ }}>
                    <Switch>
                        <Route exact path='/' component={TileArray}></Route>
                        {/* <Route exact path='/project1' component={Project1}></Route> */}
                        {/* EXAMPLE: <Route exact path='/projects' component={Projects}></Route> */}
                    </Switch>
                </div>
                <Footer />
            </div >
        </div >
    )
};

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById("app"))