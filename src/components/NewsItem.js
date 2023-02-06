import React from 'react';
import moment from 'moment';

function NewsItem(props) {
    const defaultImageUrl = 'https://media.cnn.com/api/v1/images/stellar/prod/230127123847-olympic-rings-paris.jpg?c=16x9&q=w_800,c_fill';
    let { title, description, link, imageUrl, author, publishedAt, source } = props;

    return (
        <div className="card">
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0',
            }}>
                <span className="badge rounded-pill bg-info"> {source} </span>
            </div>
            <img src={imageUrl ? imageUrl : defaultImageUrl} className="card-img-top" alt="" width="150" height="200" />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 50) : description.slice(0, 50)}...</h5>
                <p className="card-text">{description ? description.slice(0, 100) : title}...</p>
                <a href={link} className="btn btn-sm" target="_blank">Read More &#187;</a>
            </div>
            <div className="card-footer">
                <small style={{ float: 'right', color: '#1A2238' }}>Published by <strong>{author ? author : "Unknown"}</strong> - <strong className='text-danger'>{moment(publishedAt).fromNow()}</strong></small>
            </div>
        </div>
    )
}

export default NewsItem
