import React, { Component } from 'react';

export class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myStyle: {
        color: this.props.mode === 'dark' ? 'white' : 'rgb(0 0 0 / 85%)',
        backgroundColor: this.props.mode === 'dark' ? 'rgb(39 36 36 / 85%)' : 'white',
        border: '1px solid',
        borderColor: this.props.mode === 'dark' ? 'white' : 'rgb(0 0 0 / 85%)',
        // padding: '20px',
      },
      // Other state variables if needed
    };
  }

  render() {
    const { myStyle } = this.state; 
    const {mode} = this.props
    return (
        <div classNameName="container" style={{color: mode === 'dark'? 'white' : 'rgb(0 0 0 / 85%)'}}>
            <h1 className="my-5">About Us</h1>
            <div class="accordion" id="accordionExample" style={myStyle}>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Read Lastest News</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle} >
                            {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                            NewZap offers a lightning-fast way to stay updated with the latest news, delivering a seamless experience for avid readers and information seekers alike.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" >
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>
                        Free To Use
                        </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle} >
                            {/* <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                            NewZap is a free news app that provides instant news for different categories, whether it be entertainment, science, or technology.
                            One can get different views on different categories all in one place.
                            NewsZap is an Open Source project.                                                
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browse Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle} >
                            {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                            This News App software works in any web browsers such as Chrome, Firfox, Safari, Opera etc. Its suits well according to different users as it has different 
                            categories to lean into. It also works well in mobile platforms too.                         
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <strong>Creator</strong>
                    </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle} >
                            {/* <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                            This App is made by <strong>Neel Bhattacharya</strong>. It is made in React. Made with the helps of youtube video, and react js documantation. Hope you all like it.
                            🎉🥳
                        </div>
                    </div>
                </div>
            </div>   
            {/* <div className="container my-3" >
                <button onClick={toggleStyle} type="button" className="btn btn-primary" >{btnText}</button>      
            </div> */}
        </div>
    );
  }
}

export default About;
