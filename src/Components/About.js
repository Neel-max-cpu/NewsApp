import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myStyle: {
        color: props.mode === 'dark' ? 'white' : 'rgb(0 0 0 / 85%)',
        backgroundColor: props.mode === 'dark' ? '#403d3d' : 'white',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? 'white' : 'rgb(0 0 0 / 85%)'
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mode !== this.props.mode) {
      this.updateStyles(this.props.mode);
    }
  }

  updateStyles = (mode) => {
    this.setState({
      myStyle: {
        color: mode === 'dark' ? 'white' : 'rgb(0 0 0 / 85%)',
        backgroundColor: mode === 'dark' ? 'rgb(39 36 36 / 85%)' : 'white',
        border: '1px solid',
        borderColor: mode === 'dark' ? 'white' : 'rgb(0 0 0 / 85%)'
      }
    });
  }


  render() {
    const { myStyle } = this.state;
    const { mode } = this.props;

    const containerStyle = {
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: mode === 'dark' ? '#403d3d' : 'white',
      color: mode === 'dark' ? 'white' : 'rgb(0 0 0 / 85%)'
    };

    return (
      <div className="container" style={containerStyle}>
        <h1 className="my-5">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {/* <button className={`accordion-button collapsed ${mode==='light'?'about_white':'about_dark'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                <strong>Read Lastest News</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                NewZap offers a lightning-fast way to stay updated with the latest news, delivering a seamless experience for avid readers and information seekers alike.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                NewZap is a free news app that provides instant news for different categories, whether it be entertainment, science, or technology. One can get different views on different categories all in one place.
                NewsZap is an Open Source project. 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browse Compatible</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This News App software works in any web browsers such as Chrome, Firfox, Safari, Opera etc. Its suits well according to different users as it has different 
                categories to lean into. It also works well in mobile platforms too. 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <strong>Creator</strong>
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This App is made by <strong>Neel Bhattacharya</strong>. It is made in React. Made with the helps of youtube video, and react js documantation. Hope you all like it.
                🎉🥳
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
