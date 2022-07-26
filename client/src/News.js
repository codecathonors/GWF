


function News( { news } ) {
    // console.log(news)

     const singleArticle = news.map
        (single => <div><h1>{single.title}</h1> <p>{single.text}</p></div>)
    
      return (
        <div className="news-page">
          <h1>news!</h1>
          {singleArticle}
        </div>
      );
    }
    
export default News