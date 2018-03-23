import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as homeActions from '../../homeActions';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.sayHelloToHome();
    }

    render() {
        const { sayHello } = this.props;

        return (
            <div className="home-container">
                <h2 className="home-title">{sayHello || 'Home'}</h2>
            </div>
        );
    }
}

export default connect(
    state => ({
        ...state.home
    }),
    homeActions
)(Home);
