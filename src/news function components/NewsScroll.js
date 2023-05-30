import PropTypes from 'prop-types'
import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Navbar from '../components/Navbar';
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsScroll = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalresults, setTotalResults] = useState(0)

    
    const capitaliazeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetegory}&apiKey=a87788e5b94547c79a171c2d2b3ab45d&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        updateNews();
        document.title = `${capitaliazeFirstLetter(props.cetegory)}`;
    }, [])


    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cetegory}&apiKey=a87788e5b94547c79a171c2d2b3ab45d&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };

    return (
        <>
            <h1 className='text-center ' style={{ marginTop: "80px" }}>News - Top {capitaliazeFirstLetter(props.cetegory)} Headlines</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalresults}
                loader={<Spinner />}
            >
                <div className='container my-1'>
                    <div className='row'>
                        {!loading && articles.map((element) =>
                            <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                    imageUrl={!element.urlToImage ? "https://cdn.mos.cms.futurecdn.net/TnqxEfUEbszVVDiFPyWvEf-1{props.pageSize}0-80.jpeg" : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        )}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

NewsScroll.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}
NewsScroll.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default NewsScroll