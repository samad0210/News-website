import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Newsitem from "./Newsitem";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      totalResults: 0,
      articles: [],
      page: 1,
    };
  }

  async getAPIdata() {
    this.setState({ page: 1 });
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&language=${
        this.props.language
      }&pagesize=24&page=1&sortBy=publishedAt&apiKey=019207a02954483ea7649cf4459ffad4`
    );
    response = await response.json();
    console.log(response);
    this.setState({
      articles: response.articles.filter((x) => x.title !== "[removed]"),
      totalResults: response.totalResults,
    });
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&language=${this.props.language}&pagesize=24&page=${
        this.state.page
      }&sortBy=publishedAt&apiKey=019207a02954483ea7649cf4459ffad4`
    );
    response = await response.json();
    if (response?.status === "ok")
      this.setState({
        articles: this.state.articles.concat(
          response.articles.filter((x) => x.title !== "[removed]")
        ),
      });
  };
  componentDidMount() {
    this.getAPIdata();
  }

  componentDidUpdate(prevprops) {
    if (this.props != prevprops) this.getAPIdata();
  }

  render() {
    return (
      <div className="container-flud">
        <h5 className="background text-light text-center p-2 text-capitalize ">
          {this.props.search ? this.props.search : this.props.q} Articles
        </h5>
        <InfiniteScroll
          dataLength={this.state.articles?.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles?.length < this.state.totalResults}
          loader={
            <div className="my-5 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {this.state.articles?.map((item, index) => {
              return (
                <Newsitem
                  key={index}
                  source={item.source.name ?? "N/A"}
                  author={item.author}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage ?? "/images/noimage.png"}
                  date={item.publishedAt}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
