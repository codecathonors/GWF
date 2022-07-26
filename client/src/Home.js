import React from 'react';

function Home( { news } ) {
  console.log(news)
  const singleArticle = news.map(single => <p>{single.text.slice(0, 200)}</p>)
   
  return (
    <>
    <div className="homepage">
      <h1>The Gregory Weiner Foundation</h1>
      <h3>Our Mission</h3>
      <p>Those who knew Greg were keenly aware of his love of family, friends and life. This is why Greg's legacy must include promotion of helmet safety awareness - in hope that others may never experience the devastation such a tragedy bears. The Gregory Weiner Foundation intends to establish and support outreach programs that facilitate those wishing to learn more about helmet safety, and accommodating helmet use by individuals engaged in recreational activities.</p>
    </div>
    <div className="why-helmet">
      <h3>Why Wear a Helmet?</h3>
      <p>For many recreational activities, wearing a helmet can reduce the risk of a serious head injury and even save lives. This is because during a fall or collision, most of the impact energy is absorbed by the helmet, rather than the head or brain. There are different helmets for various activities. Each type of helmet is designed to protect the head from impacts common to a particular activity or sport. It is important to wear a helmet that is designed for the specific activity.</p>
    </div>
    <div className="home-page-news">
      <h2>News</h2>
      {singleArticle}
    </div>
    </>
  );
}
   
export default Home
   