import React, { Component } from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import { history } from '../../store';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import News from '../News/News';
import Contact from '../Contact/Contact';
import About from '../About/About';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', padding: 0, margin: 0 }}>
                    <div style={{ width: '70%' }}>
                        <Header />
                        <Navigation />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/news" component={News} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/about" component={About} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
