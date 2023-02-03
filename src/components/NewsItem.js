import React from 'react'

function NewsItem(props) {
    const defaultImageUrl = 'https://media.cnn.com/api/v1/images/stellar/prod/230127123847-olympic-rings-paris.jpg?c=16x9&q=w_800,c_fill';
    let { title, description, link, imageUrl } = props;

    return (
        <div className="card">
            <img src={imageUrl ? imageUrl : defaultImageUrl} className="card-img-top" alt="" width="150" height="200" />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 50) : description.slice(0, 50)}...</h5>
                <p className="card-text">{description ? description.slice(0, 100) : title}...</p>
            </div>
            <div className="card-body">
                <a href={link} className="btn btn-dark btn-sm">Read More &#187;</a>
            </div>
        </div>
    )
}

export default NewsItem
