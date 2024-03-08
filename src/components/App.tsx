import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.scss'
import Footer from "./Footer";
import Header from "./Header";

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
