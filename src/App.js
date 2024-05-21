import './App.css';

// here we will use class based components text_utils we use function based 
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About';

import LoadingBar from 'react-top-loading-bar'


import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'light' // initial mode is light
    };
  }

  componentDidMount() {
    this.applyBodyStyle();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mode !== this.state.mode) {
      this.applyBodyStyle();
    }
  }

  applyBodyStyle = () => {
    document.body.style.backgroundColor = this.state.mode === 'light' ? 'white' : '#403d3d';
    document.body.style.color = this.state.mode === 'light' ? 'rgb(0 0 0 / 85%)' : 'white';
  };

  toggleMode = () => {
    this.setState(
      (prevState) => ({
        mode: prevState.mode === 'light' ? 'dark' : 'light'
      }),
      this.applyBodyStyle
    );

  };


  pageSize = 6;
  state ={
    // initially progress will be zero
    progress : 0 
  }
  
  setProgress = (progress) =>{
    this.setState({
      progress: progress,
    })
  }

  render() { 
    const { mode } = this.state; 
    return (
      <BrowserRouter>
        <div className={`${mode==='light'? "" : 'custom-dark2'}`}>
            <Navbar mode={mode} toggleMode={this.toggleMode}/>
            <LoadingBar
              color={`${mode==='light'? '#f11946' : 'yellow'}`}
              progress={this.state.progress}
              height={3}
              // onLoaderFinished={() => setProgress(0)}
            />
            <Routes>
              {/* <News setProgress={this.setProgress}  mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category="sports"/> */}
              {/* home/NewsZap  */}
              <Route exact path="/" element={<News setProgress={this.setProgress}  key="home" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='general'/>}></Route> 
              {/* about */}
              <Route exact path="/about" element={<About setProgress={this.setProgress} mode={mode} category='about'/>}></Route>
              {/* business */}
              <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='business'/>}></Route>
              {/* entertainment */}
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='entertainment'/>}></Route>
              {/* general */}
              <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='general'/>}></Route>
              {/* health */}
              <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='health'/>}></Route>
              {/* science */}
              <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='science'/>}></Route>
              {/* sports */}
              <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='sports'/>}></Route>
              {/* technology */}
              <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" mode={mode} toggleMode={this.toggleMode} pageSize = {this.pageSize} country="in" category='technology'/>}></Route>
            </Routes>

        </div>
      </BrowserRouter>
    )
  }
}

