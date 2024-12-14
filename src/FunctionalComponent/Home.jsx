import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Newsitem from "./Newsitem";

export default function Home(props) {
  
  let [articles,setArticles] = useState([])
  let [totalResults,SetTotalResults] = useState(0)
  let [page,SetPage] = useState(1)

  async function getAPIdata() {
    SetPage(1)
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        props.search ? props.search : props.q
      }&language=${
        props.language
      }&pagesize=24&page=1&sortBy=publishedAt&apiKey=019207a02954483ea7649cf4459ffad4`
    );
    response = await response.json();
    if(response.status==="ok"){
      setArticles(response.articles.filter((x) => x.title !== "[removed]"),)
      SetTotalResults(response.totalResults)
    }
    
    
  }
  let fetchData = async () => {
    SetPage(page+1)
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        props.search ? props.search : props.q
      }&language=${props.language}&pagesize=24&page=${page}&sortBy=publishedAt&apiKey=019207a02954483ea7649cf4459ffad4`);
    response = await response.json();
    if (response?.status === "ok")
      setArticles(articles.concat(
        response.articles.filter((x) => x.title !== "[removed]"))
      );
  };

  useEffect(()=>{

    getAPIdata()

  },[props])

    return (
      <div className="container-flud">
        <h5 className="background text-light text-center p-2 text-capitalize ">
          {props.search ? props.search : props.q} Articles
        </h5>
        <InfiniteScroll
          dataLength={articles?.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles?.length < totalResults}
          loader={
            <div className="my-5 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {articles?.map((item, index) => {
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

