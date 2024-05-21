import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import './News.css';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps ={
    country: 'in',
    pageSize: 8,
    category: 'general',
  }
  
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  // articles array -----
  // articles = [
  //   {
  //     "source": {
  //       "id": "bbc-sport",
  //       "name": "BBC Sport"
  //     },
  //     "author": null,
  //     "title": "Arteta says title still 'possible' - but what chance do Arsenal have?",
  //     "description": "Mikel Arteta says \"in football there are always possibilities\" - but what chance do Arsenal have of winning the Premier League?",
  //     "url": "http://www.bbc.co.uk/sport/football/68481769",
  //     "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/94E8/production/_133302183_arsenal4.png",
  //     "publishedAt": "2024-05-12T21:52:19.0064624Z",
  //     "content": "Mikel Arteta's side are top heading into the final week of the season - but the title is still out of Arsenal's hands\r\n\"In football there are always possibilities.\"\r\nThose were the words of Arsenal b… [+3832 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "fox-sports",
  //       "name": "Fox Sports"
  //     },
  //     "author": null,
  //     "title": "National Football League\n     <!----> \n        Five potential Cowboys picks to track at the NFL Draft Combine\n       \n      1 hour ago",
  //     "description": null,
  //     "url": "http://www.foxsports.com/stories/nfl/five-potential-cowboys-picks-to-track-at-the-nfl-draft-combine",
  //     "urlToImage": null,
  //     "publishedAt": "2024-02-29T18:37:22.5746516Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": "bleacher-report",
  //       "name": "Bleacher Report"
  //     },
  //     "author": "David Kenyon",
  //     "title": "Unique Stats from the 2023 College Football Regular Season",
  //     "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
  //     "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
  //     "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
  //     "publishedAt": "2023-12-12T12:00:00Z",
  //     "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
  //     "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
  //     "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
  //     "publishedAt": "2020-04-27T07:20:43Z",
  //     "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
  //   }
  // ]

  capitalizedFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props){
    super(props);
    this.state = {
      // articles: this.articles, 
      articles: [], 
      loading: false,
      page: 1,
      totalResults: 0 
    }
    document.title = `${this.capitalizedFirstLetter(this.props.category)} - NewsZap`;
  }


  async updateNews(pageNo){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=21159e9c23394e4cb926042ccfb51949&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false,
    });
  }

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=21159e9c23394e4cb926042ccfb51949&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading:false
    // });
    this.updateNews();
  }


  handlePrevClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=21159e9c23394e4cb926042ccfb51949&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData)

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    
    this.setState({
      page: this.state.page-1,
    })
    this.updateNews();
  }

  handleNextClick = async ()=>{
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    // // if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
    // // }
    // // else{
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=21159e9c23394e4cb926042ccfb51949&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   // console.log(parsedData)

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    // }
    
    this.setState({
      page: this.state.page+1,
    })
   this.updateNews();
  }
  

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page+1
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=21159e9c23394e4cb926042ccfb51949&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };


  render() {
    const {mode} = this.props
    return (
      // light mode dark mode here
      <div className={`container my-3 ${mode === 'light' ? 'custom-light' : 'custom-dark'}`}> 
        <h1 className={`text-center newMargin ${mode==='light'?'':'custom-text'}`}>NewsZap - Top {this.capitalizedFirstLetter(this.props.category)} Headlines</h1>

        {/* previous and next ------ */}

        {/* if loading is true then show the spinner */}
        {this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {/* if loading is false show this else don't show  */}
            {/* {!this.state.loading && this.state.articles.map((element)=>{
              return <div className={`col-md-4`} key ={element.url}> */}
                    {/*.slice(0, 88) -- here we are taking 88 characters at max, similarly for titles also before that we are checking for null title/decs too*/}
                    {/* <NewsItem  title = {element.title} 
                    description = {element.description} 
                    imageUrl={element.urlToImage} url = {element.url}/> */}                
                    {/* <NewsItem
                      mode = {mode}
                      title={(element.title && element.title.length >= 45) ? element.title.slice(0, 45) + "..." : element.title}
                      description={(element.description && element.description.length >= 60) ? element.description.slice(0, 60) + "..." : element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}/>
                </div>
            })} */}


            {/* adding infinite scroll ------------------------ */}
            {/* {this.state.articles.map((element)=>{ */}
            {this.state.articles.map((element, index)=>{
              return <div className={`col-md-4`} key ={index}>
                    {/*.slice(0, 88) -- here we are taking 88 characters at max, similarly for titles also before that we are checking for null title/decs too*/}
                    {/* <NewsItem  title = {element.title} 
                    description = {element.description} 
                    imageUrl={element.urlToImage} url = {element.url}/> */}                
                    <NewsItem
                      mode = {mode}
                      title={(element.title && element.title.length >= 45) ? element.title.slice(0, 45) + "..." : element.title}
                      description={(element.description && element.description.length >= 60) ? element.description.slice(0, 60) + "..." : element.description}
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}/>
                </div>
            })}        
            </div>
          </div>
        </InfiniteScroll>

        {/* previous - next div no need in infinite scroll ----------- */}
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className={`btn ${mode==='light'?'btn-dark':'btn-warning'}`} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className={`btn ${mode==='light'?'btn-dark':'btn-warning'} mx-3`} onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}

export default News
