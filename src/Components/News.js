import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
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


  constructor(){
    super();
    this.state = {
      // articles: this.articles, 
      articles: [], 
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=21159e9c23394e4cb926042ccfb51949&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({articles: parsedData.articles});
  }


  handlePrevClick = ()=>{

  }

  handleNextClick = ()=>{

  }

  render() {
    return (
      <div className='container my-3'> 
        <h2>NewsZap - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key ={element.url}>
                {/*.slice(0, 88) -- here we are taking 88 characters at max, similarly for titles also before that we are checking for null title/decs too*/}
                {/* <NewsItem  title = {element.title} 
                description = {element.description} 
                imageUrl={element.urlToImage} url = {element.url}/> */}                
                <NewsItem
                  title={(element.title && element.title.length >= 45) ? element.title.slice(0, 45) + "..." : element.title}
                  description={(element.description && element.description.length >= 60) ? element.description.slice(0, 60) + "..." : element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" class="btn btn-dark mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
