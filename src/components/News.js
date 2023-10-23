import React, { Component, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

const News = (props)=> {
 
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10) //set progress is for top loading bar
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30)
    setLoading(true)
    // this.setState({ loading: true });
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }
  
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, [])
  
  // async componentDidMount() {
  //   this.updateNews();
  // }
  // const handlePrevClick = async () => {
  //   // this.setState({ page: this.state.page - 1 });
  //   setPage(page-1)
  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   // this.setState({ page: this.state.page + 1 });
  //   setPage(page+1)
  //   updateNews();
  // };

  const fetchMoreData = async() => {
    setPage(page+1)
    // this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    // this.setState({ loading: true });
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   // loading: false,
    // });
  };

  
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: '90px'}}>
          News - Top {capitalizeFirstLetter(props.category)} Headlines 
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        {/* {this.state.loading && <Spinner />} */}
        {/* If loading becomes true then it shows the spinner  */}
        <div className="container">
        <div className="row">
          {/* {!this.state.loading && */}
          
          { articles.map((element) => {
              return (
                
                <div className="col md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    // news author
                    date={element.publishedAt}
                    //date of news
                    source={element.source.name}
                    //this source will fetch data from source => name
                  />
                  </div>
                
              );
            })}
          </div>        
        </div>
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
  totalResults: 0,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
