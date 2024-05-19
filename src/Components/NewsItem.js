import React, { Component } from 'react'
import './NewsItem.css';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url,} = this.props
    const{mode} = this.props;
      // default img to use if image is not preset -----
      const defaultImageUrl = process.env.PUBLIC_URL + '/image/default.jpg';
  
    return (
      <div className="my-3">
        {/* <div className={`card my-3 ${mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'} ${mode === 'light' ? 'box-light' : 'box-dark'}`} style={{width: "18rem"}}> */}
        <div className={`card my-3 ${mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'} ${mode === 'light' ? 'box-light' : 'box-dark'}`}>
            <img src={imageUrl?imageUrl : defaultImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                {/* target = "_blank" opens in a new tab */}
                <a rel="noreferrer" href={url} target="_blank" className={`btn btn-sm ${mode==='light' ? 'btn-dark' : 'btn-light'}`}>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
