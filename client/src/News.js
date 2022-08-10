import React, { useState } from 'react';
import NewsPost from './NewsPost';

function News({ news, handleNewArticleForm } ) {
  const [isAddNewArticleVisible, setAddNewArticle] = useState(false);

  // console.log(news) 
  //array of objects

  function handleDelete(single) {
    console.log("this should happen later", single)
    // fetch(`/news/${single.id}`, {
    //   method: 'DELETE'
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    // // window.location.reload(true);
    // console.log(singleArticle)
  }
  
  const singleArticle = news.map(single => 
    <div class="card bg-light mb-3">
      <div class="card-header">{single.title}</div>
    <div class="card-body">
      <h5 class="card-title">{single.title}</h5>
      <p class="card-text">{single.text}</p>
        <button type="button" class="btn btn-success" onClick={handleDelete(single)}>Delete</button>
    </div></div>
  )
  
  function handleClick() {
    setAddNewArticle(isAddNewArticleVisible => !isAddNewArticleVisible)
  }

  return (
    <div className="news-page">
      <h1>News</h1>
      <button type="button" class="btn btn-success" onClick={handleClick}>{isAddNewArticleVisible ? "Close Form" : "Add New Post"}</button>
      {isAddNewArticleVisible ? <NewsPost handleNewArticleForm={handleNewArticleForm}/> : <></>}
      {singleArticle}
    </div>
  );
}
    
export default News