import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/About">{props.about}</a>
        </li> */}
        
      </ul>
    {/* Different theme buttons */}
      <div className="d-flex">
          {/* Theme buttons */}
          <div
            onClick={() => props.changeTheme('#0d1c1c', '#f0e800')}
            style={{ backgroundColor: '#0d1c1c', height: '20px', width: '20px', borderRadius: '25px', cursor: 'pointer', border: '1px solid white', margin: '0 5px' }}
          ></div>

          <div
            onClick={() => props.changeTheme('#001f3f', '#FFDC00')}
            style={{ backgroundColor: '#001f3f', height: '20px', width: '20px', cursor: 'pointer',borderRadius: '25px', border: '1px solid white', margin: '0 5px' }}
          ></div>

          <div
            onClick={() => props.changeTheme('#FF4136', '#FF851B')}
            style={{ backgroundColor: '#FF4136', height: '20px', width: '20px', cursor: 'pointer',borderRadius: '25px', border: '1px solid white', margin: '0 5px' }}
          ></div>
    
    {/* Dark theme buttons */}
            <div className={` form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3  `}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
        <label className="form-check-label" htmlFor="switchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
      </div>
    </div>
    </div>
  </div>
</nav>
  )
}


Navbar.prototype ={ 
                   title: PropTypes.string,
                   about: PropTypes.string
                    }

Navbar.defaultProps ={

  title: 'DefaultTittle',
  about: 'DefaultAbout'
} 