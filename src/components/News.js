import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import LoadingBar from 'react-top-loading-bar'

function News(props) {
    // Initialize all state variables
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [progress, setProgress] = useState(10);

    // Function to fetch news in the begining
    const fetchNews = async () => {
        // Set url of the api to be called
        const url = props.category === "everything" ? `https://newsapi.org/v2/everything?q=sports&page=${page}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`
            : `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;

        let response = await fetch(url);
        setProgress(50);

        let parsedRespones = await response.json();
        let articles = await parsedRespones.articles;
        setProgress(70);

        // Set state variables
        setArticles(articles);
        setTotalResults(parsedRespones.totalResults);
        setLoading(false);
        setProgress(100);

        console.log(parsedRespones.articles);
        console.log(articles);
    }

    // Function to fetch more news when loading
    const fetchMoreNews = async () => {
        const url = props.category === "everything" ? `https://newsapi.org/v2/everything?q=sports&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`
            : `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;

        setPage(page + 1)

        let response = await fetch(url);
        let parsedRespones = await response.json();

        // Set state variables
        setArticles(articles.concat(parsedRespones.articles));
        setTotalResults(parsedRespones.totalResults);
        setLoading(false);
    };

    useEffect(() => {
        // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;

        fetchNews();
        // eslint-disable-next-line
    }, [])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="container my-4">
            <h1 className="text-center my-5">NewsHub - {capitalizeFirstLetter(props.category)}</h1>

            <LoadingBar
                height={3}
                color='#FF6A3D'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />

            <div className="row">
                {!loading && articles.map((element) => {
                    return <div className="col-lg-4 col-md-4 col-sm-6 my-3 d-flex align-items-stretch" key={element.url}>
                        <NewsItem title={element.title} description={element.description} link={element.url} imageUrl={element.urlToImage} author={element.author} publishedAt={element.publishedAt} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default News
