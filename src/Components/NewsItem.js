import React, { Component } from 'react'
import './NewsItem.css';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url, author, date, source} = this.props
    const{mode} = this.props;
      // default img to use if image is not preset -----
      const defaultImageUrl = process.env.PUBLIC_URL + '/image/default.jpg';
  
    return (
      <div className="my-3">
        {/* <div className={`card my-3 ${mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'} ${mode === 'light' ? 'box-light' : 'box-dark'}`}> */}
        <div className={`card my-3 ${mode === 'light' ? 'bg-light text-dark card-light' : 'bg-dark text-white card-dark'}`}>
            <img className="card-img-top" src={imageUrl?imageUrl : defaultImageUrl} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<span class={`badge ${mode==='light'? 'text-bg-danger': 'text-bg-warning'}`}>{source}</span></h5>
                <p className="card-text">{description}</p>
                {/* target = "_blank" opens in a new tab */}
                <p className="card-text"><small className={`${mode==='light'? 'text-body-secondary' : 'text-body-dark1'}`}>Author: {!author? "Unknown":author}</small></p>
                <p className="card-text"><small className={`${mode==='light'? 'text-body-secondary' : 'text-body-dark2'}`}>Last updated on {!date? "Unknown":new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={url} target="_blank" className={`btn btn-sm ${mode==='light' ? 'btn-dark' : 'btn-light'}`}>Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
