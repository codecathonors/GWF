import React from "react";


function Donate( ) {
    
    return (
      <>
      
        <div class="card w-50 bg-warning card border-dark mx-auto" style={{marginTop: 30, marginBottom: 20 }} >
          <div class="card-header text-center" style={{ fontSize: 30, letterSpacing: 1, paddingTop: 10, paddingBottom: 10 }}>
            <b>SUPPORT</b>
          </div>
        <div class="card-body text-center">
            <h5 class="card-title">At present, the Foundation can only accept donations by mail. <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg></h5><p>
        <br></br>
        <br></br>
          Please mail donations to: 
        <br></br>
              <br></br><b><p class="user-select-all" style={{ color: "#565656" }}>
          The Gregory Weiner Foundation, 
        <br></br>
          6 Briarwood Road, 
        <br></br>
          Shrewsbury, PA 17361 
            </p></b>
        <br></br>
              Please make checks payable to: <b><u><p class="user-select-all" style={{ color: "#565656", fontSize: 25 }}>The Gregory Weiner Foundation</p></u></b></p>
        <br></br>
            
            <div class="card w-75 mx-auto">
              <div class="card-body card border-dark " style={{ fontSize: 20, padding: 20 }}>
                <p class="card-text text-black"><b>The Gregory Weiner Foundation</b> has an <br></br><a href="https://smile.amazon.com/charity/select/search?q=The+Gregory+Weiner" class="link-warning">Amazon Smile Account</a>! <br></br><br></br>We would be deeply appreciative if you elected us for your donations.</p>
              </div>
            </div>
        <br></br>
        <br></br>
            <div style={{ fontSize: 30, padding: 20 }}>
              <i>Thank you for your generosity!</i>
        </div>
        </div>
      </div>


        <div class="card w-75 mx-auto" style={{marginTop: 60}}>
  <div class="card-body" >
    <b>Tax Information:</b> The Gregory Weiner Foundation is registered as a 501(c)(3) non-profit organization. Contributions to The Gregory Weiner Foundation are tax-deductible to the extent permitted by law. The Gregory Weiner Foundation's tax identification number is 26-3916703.
  </div>
</div>
</>
    );
}
    
export default Donate