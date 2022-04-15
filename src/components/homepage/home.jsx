import React from 'react'
import './home.css'

import { ImFacebook2, ImTwitter, ImInstagram, ImGithub } from 'react-icons/im'

import { useSelector } from 'react-redux'

function Homepage() {
  const counter = useSelector((state) => state)

  return (
    <div>
      <div className="homepage">
        <div className="box1">
          <h1>
            Welcome to <span id="span"> Random React </span>
          </h1>
          <h6>
            Witness tons of React Js project build on the basis o React-Redux
          </h6>
          <div className="icons-social">
            <span>
              {' '}
              <ImFacebook2 />
            </span>
            <span>
              {' '}
              <ImTwitter />
            </span>
            <span>
              {' '}
              <ImInstagram />
            </span>
            <span>
              {' '}
              <ImGithub />{' '}
            </span>
          </div>
        </div>
        <div className="box2"></div>
      </div>
    </div>
  )
}

export default Homepage
