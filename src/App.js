import './App.css';

// here we will use class based components text_utils we use function based 
// import React, { Component } from 'react'
import React, {useState, useEffect} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';

import LoadingBar from 'react-top-loading-bar'


import { BrowserRouter, Route, Routes } from "react-router-dom";

// export default class App extends Component {
const App = ()=>{

  // CLASS BASED---
  /*
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light' // initial mode is light
    };
  }
  */

  // state ={
  //   // initially progress will be zero
  //   progress : 0 
  // }
  
  
  // FUNCTION BASED ---
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

  
  const applyBodyStyle = () => {
    // document.body.style.backgroundColor = this.state.mode === 'light' ? 'white' : '#403d3d';
    document.body.style.backgroundColor = mode === 'light' ? 'white' : '#403d3d';
    document.body.style.color = mode === 'light' ? 'rgb(0 0 0 / 85%)' : 'white';
  };


  /*
  componentDidMount() {
    this.applyBodyStyle();
  }
  */
  
  // componentDidUpdate() replaced by useEffect
  useEffect(() => {
    applyBodyStyle();
    // eslint-disable-next-line
  }, [mode]);

  /*
  componentDidUpdate(prevProps, prevState) {
    if (prevState.mode !== this.state.mode) {
      this.applyBodyStyle();
    }
  }
  */


  // CLASS BASED --
  /*
  toggleMode = () => {
    this.setState(
      (prevState) => ({
        mode: prevState.mode === 'light' ? 'dark' : 'light'
      }),
      this.applyBodyStyle
    );
  };
  */

  // FUNCTION BASED ---
  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };



  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;

 
  /*
  setProgress = (progress) =>{
    this.setState({
      progress: progress,
    })
  }
  */

  // render() { 
    // const { mode } = this.state; 
    return (
      <BrowserRouter>
        <div className={`${mode==='light'? "" : 'custom-dark2'}`}>
            {/* <Navbar mode={mode} toggleMode={this.toggleMode}/> */}
            <Navbar mode={mode} toggleMode={toggleMode}/>
            <LoadingBar
              color={`${mode==='light'? '#f11946' : 'yellow'}`}
              // progress={this.state.progress}
              progress={progress}
              height={3}
              // onLoaderFinished={() => setProgress(0)}
            />
            <Routes>
              {/* <News setProgress={this.setProgress} apiKey={this.apiKey}  mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category="sports"/> */}
              {/* <News setProgress={this.setProgress} apiKey={apiKey}  mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category="sports"/> */}
              {/* home/NewsZap  */}
              {/* <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="home" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='general'/>}></Route>  */}
              <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="home" mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category='general'/>}></Route> 
              {/* about */}
              {/* <Route exact path="/about" element={<About setProgress={this.setProgress} apiKey={this.apiKey} mode={mode} category='about'/>}></Route> */}
              <Route exact path="/about" element={<About setProgress={setProgress} apiKey={apiKey} mode={mode} category='about'/>}></Route>
              {/* business */}
              {/* <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='business'/>}></Route> */}
              <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category='business'/>}></Route>
              {/* entertainment */}
              {/* <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='entertainment'/>}></Route> */}
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category='entertainment'/>}></Route>
              {/* general */}
              {/* <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='general'/>}></Route> */}
              <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category='general'/>}></Route>
              {/* health */}
              {/* <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='health'/>}></Route> */}
              <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category='health'/>}></Route>
              {/* science */}
              {/* <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='science'/>}></Route> */}
              <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category='science'/>}></Route>
              {/* sports */}
              {/* <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='sports'/>}></Route> */}
              <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category='sports'/>}></Route>
              {/* technology */}
              {/* <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='technology'/>}></Route> */}
              <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" mode={mode} toggleMode={toggleMode} pageSize = {pageSize} country="in" category='technology'/>}></Route>
            </Routes>

        </div>
      </BrowserRouter>
    )
  // }
}

export default App;