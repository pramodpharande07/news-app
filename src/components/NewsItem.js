import React from "react";

const  NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
     
    return (
      <div className="my-3 ">
        <div className="card" style={{ width: "18rem" }}>
        <div style={{
                 display: "flex",
                 justifyContent: "flex-end",
                 position: "absolute",
                 right: 0,
            }} >
            <span className="badge rounded-pill bg-danger" >{source} </span> 
            </div>    
            <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-104462036,width-1070,height-580,imgsize-19716,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" : imageUrl }
                 className="card-img-top"
                  alt="..."
            />
          <div className="card-body">   
            <h5 className="card-title">{title}</h5>
             {/* badges in bootstrap  */}
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small>
            </p>    
            <a  href={newsUrl} target="_blank" className="btn btn-sm btn-primary bg-dark">Read more </a>  
          </div>
        </div>
      </div>
    );
  }
export default NewsItem;    
             
           
           
           
              
           
          
          
            
           
           

           
           
