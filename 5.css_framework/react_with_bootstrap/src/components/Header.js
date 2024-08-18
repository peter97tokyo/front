import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Container from './Container';
import Grid from './Grid';
import Workout from './Workout';

const Header = () => {
    return (
        <Router>
            
                <div className=" p-5 bg-primary text-white">
                    <h1><span class="badge bg-dark">Peter's</span> Bootstrap</h1>

                    <p>i am korean man in tokyo~~ 🗼</p>
                </div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Container">Container</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Grid">Grid</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Workout">Workout</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" to="/">
                                Link
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/">I just</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">add this</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">dropdown</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Container" element={<Container />} />
                    <Route path="/Grid" element={<Grid />} />
                    <Route path="/Workout" element={<Workout />} />
                </Routes>
            
        
        </Router>
    );
}

export default Header;
