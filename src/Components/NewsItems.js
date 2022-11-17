import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, discription, imageurl, newsurl, author, date, source} = this.props;
    return (
      <div>
        
        
        <div className="card" style={{width: "18rem"}}>
        <span className="badge rounded-pill bg-danger" style={{position:'absolute', top:'0', left: '72%'}}> {source}</span>

    <img src={imageurl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}  </h5>
      <p className="card-text">{discription}</p>
      <a href={ newsurl} target="-blank" className="btn btn-sm btn-primary">Read More</a>
      <p className="card-text"><small className="text-muted">By { !author?"unknown":author} on  {new Date(date).toGMTString()}</small></p>
    </div>
  </div>
      </div>
    )
  }
  
    
  }

export default NewsItems
