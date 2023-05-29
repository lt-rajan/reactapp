import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import Navbar from '../components/Navbar';

export class News extends Component {

capitaliazeFirstLetter =(string) =>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title=`${this.capitaliazeFirstLetter(this.props.cetegory)}`;
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cetegory}&apiKey=a87788e5b94547c79a171c2d2b3ab45d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
  }

  async componentDidMount (){
    this.updateNews();
    
  }

  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1,})
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({page: this.state.page + 1,})
    this.updateNews();
  }

  render() {
    return (
      <>
        <Navbar title={"HOME"} />
        <div className='container my-3'>
          <h1 className='text-center my-4'>News - Top {this.capitaliazeFirstLetter(this.props.cetegory)} Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) =>
              <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                  imageUrl={!element.urlToImage ? "https://cdn.mos.cms.futurecdn.net/TnqxEfUEbszVVDiFPyWvEf-1{this.props.pageSize}0-80.jpeg" : element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            )}
          </div>
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next</button>
          </div>
        </div>
      </>
    )
  }
}

export default News