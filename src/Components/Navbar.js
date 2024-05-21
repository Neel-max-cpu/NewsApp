// import React, { Component } from 'react';
import React, { useState } from 'react';
import './Navbar.css';
// import PropTypes from 'prop-types'
import { Link} from 'react-router-dom';

// export class Navbar extends Component {
const Navbar = (props)=>{
  // addClass = (e) => {
  //   const activeEle = document.querySelector('.active');
  //   if (activeEle) {
  //     activeEle.classList.remove('active');
  //   }
  //   e.target.classList.add('active');
  // };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };


  // render() {
    // const { mode, toggleMode } = this.props;
    const { mode, toggleMode } = props;
    return (
      <div>
            <nav className={`navbar navbar-expand-lg ${mode === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
            {/* <nav className={`navbar navbar-expand-lg navbar-${mode}`}> */}
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsZap</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          {/* CLASS BASED ---- */}
                            {/* <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li> */}

                            {/* <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" to="/business">Business</Link>
                            </li>

                            <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>

                            <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" to="/general">General</Link>
                            </li>

                            <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" to="/health">Health</Link>
                            </li>

                            <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" to="/science">Science</Link>
                            </li>

                            <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            
                            <li className="nav-item" onClick={this.addClass}>
                            <Link className="nav-link" to="/technology">Technology</Link>
                            </li> */}

                            {/* FUNCTION BASED ---- */}
                            {/* <li className="nav-item" onClick={() => handleItemClick(0)}>
                                <Link className={`nav-link ${activeIndex === 0 ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li> */}
                            <li className="nav-item" onClick={() => handleItemClick(1)}>
                              <Link className={`nav-link ${activeIndex === 1 ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleItemClick(2)}>
                              <Link className={`nav-link ${activeIndex === 2 ? 'active' : ''}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleItemClick(3)}>
                              <Link className={`nav-link ${activeIndex === 3 ? 'active' : ''}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleItemClick(4)}>
                              <Link className={`nav-link ${activeIndex === 4 ? 'active' : ''}`} to="/general">General</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleItemClick(5)}>
                              <Link className={`nav-link ${activeIndex === 5 ? 'active' : ''}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleItemClick(6)}>
                              <Link className={`nav-link ${activeIndex === 6 ? 'active' : ''}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleItemClick(7)}>
                              <Link className={`nav-link ${activeIndex === 7 ? 'active' : ''}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleItemClick(8)}>
                              <Link className={`nav-link ${activeIndex === 8 ? 'active' : ''}`} to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
                          <input className="form-check-input" type="checkbox" role="switch" onClick={toggleMode} id="flexSwitchCheckDefault"/>
                          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                            {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                          </label>
                        </div>
                    </div>
                </div>
            </nav>
      </div>
    )
  // }
}

export default Navbar
