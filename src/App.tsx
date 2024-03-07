import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="app-content">
            <Header/>
            <h1 className="mx-auto my-auto">Nothing to see here!</h1>
            <Footer/>
        </div>
    );
}

export default App;
