import React from "react";

function Quote(props){
    return(
        <>
        <div className="row ">
            <div className="col bg-danger">
                <h1>{props.quote}</h1>
                <h4>{props.name}</h4>
            </div>
        </div>
        </>
    );
}

export default Quote;