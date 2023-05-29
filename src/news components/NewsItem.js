
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (            
                <div className="card my-4">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                        <Link to={newsUrl} target='_blank' className="btn btn-primary">Read More</Link>
                    </div>
                </div>            
        )
    }
}

export default NewsItem