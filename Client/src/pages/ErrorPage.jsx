import React from "react";

const imgURL = "https://media.tenor.com/yCC38OsGnSsAAAAC/sportsmanias-technical-difficulties.gif"

function ErrorPage(){
    return(
        <div className="errorPage">
            <h1>404</h1>
            <img src={imgURL} alt="404 error gif"></img>
        </div>
    )
}

export default ErrorPage;