import React from 'react';

function Home( { news } ) {
  // console.log(news)
  const singleArticle = news.map(single =>
    <div class="card bg-light w-50 mx-auto">
      <div class="card-body">
        <h5 class="card-title">{single.title}</h5>
        <h6>{single.date}</h6>
      </div></div>
  )

  return (
   
    <div class="homepage">
      <div class="card w-75 mx-auto" style={{ padding: 35, paddingLeft: 80, paddingRight: 80, paddingTop: 20, marginTop: 20}}>
        <img src="https://gregoryweiner.org/uploads/3/4/1/2/3412272/1391135336.png" class="card-img-top w-50 mx-auto" />
        <div class="card-title mx-auto" style={{ fontSize: 35, paddingTop: 20 }}><b>Our Mission</b></div>
        <div class="card-body">
          <p class="card-text" style={{ fontSize: 19, paddingRight: 50, paddingLeft: 50, textAlign: "center" }}>Those who knew Greg were keenly aware of his love of family, friends and life. This is why Greg's legacy must include promotion of helmet safety awareness - in hope that others may never experience the devastation such a tragedy bears. <br></br> <br></br>The Gregory Weiner Foundation intends to establish and support outreach programs that facilitate those wishing to learn more about helmet safety, and accommodating helmet use by individuals engaged in recreational activities.</p>
        </div>
      </div>
      <div class="card-group w-75 mx-auto" style={{paddingTop: 20, paddingBottom: 20}}>
        <div class="card bg-warning">
          <div class="card-body">
            <h2 class="card-title">Why Wear a Helmet?</h2>
            <hr class="bg-dark border-2 border-top border-danger"></hr>
            <p class="card-text">For many recreational activities, wearing a helmet can reduce the risk of a serious head injury and even save lives. This is because during a fall or collision, most of the impact energy is absorbed by the helmet, rather than the head or brain. <br></br> <br></br>There are different helmets for various activities. Each type of helmet is designed to protect the head from impacts common to a particular activity or sport. It is important to wear a helmet that is designed for the specific activity.</p>
          </div>
        </div>
        <div class="card bg-warning">
          <div class="card-body">
            <h2 class="card-title">About the Foundation</h2>
            <hr class="bg-dark border-2 border-top border-danger"></hr>
            <p class="card-text">The Gregory Weiner Foundation was incorporated as a Pennsylvania Non-Profit corporation in April 2009. The Foundation is certified as a Public Charity under the Internal Revenue Code 501(c)(3). Its primary mission is to promote safety and prevent brain injuries by raising awareness and advocating the proper use of helmets.</p>
          </div>
        </div>
      </div>
    </div>

  );
}
   
export default Home
   