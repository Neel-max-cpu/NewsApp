import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, url} = this.props
      // default img to use if image is not preset -----
      const defaultImageUrl = process.env.PUBLIC_URL + '/image/default.jpg';
  
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={imageUrl?imageUrl : defaultImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                {/* target = "_blank" opens in a new tab */}
                <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
