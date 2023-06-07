import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/1.home/Home";
import Form from "./pages/2.form/Form";

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
