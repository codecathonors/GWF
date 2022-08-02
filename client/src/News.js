import React from "react";

function News( { news } ) {
  
  const singleArticle = news.map(single => 
    <div class="card bg-light mb-3">
      <div class="card-header">{single.title}</div>
    <div class="card-body">
      <h5 class="card-title">{single.title}</h5>
      <p class="card-text">{single.text}</p>
    </div></div>
  )
       
    
  return (
    <div className="news-page">
      <h1>News</h1>
      {singleArticle}
    </div>
  );
}
    
export default News