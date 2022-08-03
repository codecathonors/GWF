import React from "react";


function Links() {

    return (
        <>
            <div class="card w-25 p-3 mx-auto" style={{ marginTop: 30 }}>
                <img src="https://www.theiantilmannfoundation.org/images/smallLogo.jpg" class="card-img-top" alt="ian tilmann logo" />
                <div class="card-body mx-auto">
                    <a href="https://www.theiantilmannfoundation.org/index.html" class="btn btn-dark stretched-link">The Ian Tilmann Foundation</a>
                </div>
            </div>
            <div class="card w-25 p-3 mx-auto" style={{ marginTop: 20 }}>
                <img src="https://pbs.twimg.com/media/FLAOyr8XIAU2FvY?format=jpg" class="card-img-top" alt="virginia tech ambulance"/>
                <div class="card-body mx-auto">
                    <a href="https://www.rescue.vt.edu/" class="btn btn-light stretched-link">Virginia Tech Rescue Squad</a>
                </div>
            </div>
            <div class="card w-25 p-3 mx-auto" style={{ marginTop: 20 }}>
            <img src="https://www.salesforce.org/wp-content/uploads/1960/01/American_Red_Cross.png?w=532" class="card-img-top" alt="red cross" />
                <div class="card-body mx-auto">
                <a href="https://www.redcross.org/" class="btn btn-danger stretched-link">American Red Cross</a>
            </div>
        </div>
            <div class="card w-25 p-3 mx-auto" style={{ marginTop: 20 }}>
                <img src="https://massbioportalimages.blob.core.windows.net/massbioportalimages/3d8c127bbf82ec118d20002248095a0b/LifeNet-LifeSciences-Logo.jpg" class="card-img-top" alt="lifenet health" />
            <div class="card-body mx-auto">
                    <a href="https://www.lifenethealth.org/" class="btn btn-success stretched-link">LifeNet Health</a>
            </div>
        </div>
        </>
        
    );
}

export default Links