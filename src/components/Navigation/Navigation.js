import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="topnav">
                <Link to="/" className="center active">Home</Link>
                <Link to="/news" className="center">News</Link>
                <Link to="/contact" className="center">Contact</Link>
                <Link to="/about" className="center">About</Link>
            </div>
        );
    }
}

export default Navigation;
