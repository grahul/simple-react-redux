import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as newsActions from '../../newsActions';
import './News.css';

const FAKE_URL = 'https://jsonplaceholder.typicode.com/posts/1';

class News extends Component {
    componentDidMount() {
        this.props.getNews(FAKE_URL);
    }

    render() {
        const { news } = this.props;
        
        if (!news) {
            return <div id="loading">Loading... Please wait!</div>;
        }

        return (
            <div className="news-container">
                <h2 className="news-title">News</h2>
                <hr />
                <div>{news.title ? <h3>{news.title}</h3> : null}</div>
                <hr />
                <div>{news.body ? news.body : null}</div>
            </div>
        );
    }
}

export default connect(
    state => ({
        ...state.news
    }),
    newsActions
)(News);
