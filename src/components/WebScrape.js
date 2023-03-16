import React, { Component } from "react";
import "./WebScrape.css";

export class WebScrape extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="webscrape-primary">
        <h1 className="header__title">AAA's Horse Storage</h1>
        <a target={"_blank"} href="https://facebook.com">
          <svg
            className="horse-name"
            height="500px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            class="iconify iconify--emojione"
            preserveAspectRatio="xMidYMid meet"
            fill="#000000"
          >
            <g fill="#e5be7a">
              <path
                className="flag-style"
                d="M12.6 19.7c-.6-7.1 3.7-8 6.1-7.5c2.4.5 4.3 6.4 1.7 13c-3.6 9.1-10.5 10.7-10.5 10.7s3.6-6.9 2.7-16.2"
              ></path>
              <path
                className="flag-style"
                d="M14.9 27.5c-.6-7.1 3.7-8 6.1-7.5c2.4.5 4.4 6.4 1.7 13c-3.6 9.2-13.1 11.7-13.1 11.7s6.1-7.9 5.3-17.2"
              ></path>
              <path
                className="flag-style"
                d="M16.5 37.4c-.6-7.1 3.7-8 6.1-7.5c2.4.5 4.3 6.4 1.7 13c-3.6 9.2-15.6 12.8-15.6 12.8s8.6-8.9 7.8-18.3"
              ></path>
              <path
                className="flag-style"
                d="M53.8 19.9c-1.4-7-6.2-8.2-8.6-7.7c-2.4.5-4.3 6.4-1.7 13c3.6 9.1 4.1 15 4.1 15s8.4-9.1 6.2-20.3"
              ></path>
            </g>
            <path
              d="M58 2c.2 5.1-.6 9.3-2.3 11.9c-2.5 1.6-6.9 2.4-12.4 2.3c-.2-5.1.6-9.4 2.3-11.9C48.2 2.7 52.5 1.9 58 2"
              fill="#c1875d"
            ></path>
            <path
              d="M54.7 5.1c.1 2.9-.3 5.2-1.3 6.6c-1.4.9-3.9 1.3-6.9 1.3c-.1-2.9.3-5.2 1.3-6.6c1.5-.9 3.9-1.3 6.9-1.3"
              fill="#3e4347"
            ></path>
            <path
              d="M20.8 16.2c-5.4.1-9.8-.6-12.4-2.2C6.7 11.5 5.9 7.3 6 2.1c5.4-.2 9.8.6 12.4 2.2c1.7 2.5 2.5 6.7 2.4 11.9"
              fill="#c1875d"
            ></path>
            <path
              d="M17.6 13.1c-3 .1-5.5-.3-7-1.2c-.9-1.4-1.4-3.7-1.3-6.7c3-.1 5.5.3 7 1.2c.9 1.4 1.4 3.8 1.3 6.7"
              fill="#3e4347"
            ></path>
            <path
              d="M48.6 29c0 3.7-4.1 16.4-4.1 21.8c0 0-5.1.5-12.5.5c-7.2 0-12.3-.2-12.3-.2c0-5.5-4.3-18.3-4.3-22c0-4.9-.5-10.1 4.6-16.8c1.2-1.6 1.5-3.6 12-3.6c10.4 0 11.1 1.7 12.2 3c5 6 4.4 10.8 4.4 17.3"
              fill="#c1875d"
            ></path>
            <path
              d="M44.8 54.9c0 4.9-3 7.1-12.8 7.1s-12.8-2.2-12.8-7.1c0-4.9.3-10.6 12.8-10.6S44.8 50 44.8 54.9"
              fill="#ffe2b3"
            ></path>
            <g fill="#3e4347">
              <path
                className="flag-style"
                d="M49 26.7c0 2.2-1.5 4-3.2 4c-1.8 0-3.2-1.8-3.2-4s1.5-4 3.2-4c1.7 0 3.2 1.8 3.2 4"
              ></path>
              <ellipse cx="18.2" cy="26.7" rx="3.2" ry="4"></ellipse>
              <g fill="#ffe2b3">
                <path
                  className="flag-style"
                  d="M40.5 43.3c-2.1-1.4-5.2 1.1-6.8 5.6c-1.6 4.5-1.2 9.2 1 10.6c2.1 1.4 5.2-1.1 6.8-5.6c1.6-4.4 1.2-9.2-1-10.6"
                ></path>
                <path
                  className="flag-style"
                  d="M23.4 43.3c-2.1 1.4-2.6 6.1-1 10.6s4.6 7 6.8 5.6c2.1-1.4 2.6-6.1 1-10.6c-1.6-4.4-4.6-6.9-6.8-5.6"
                ></path>
              </g>
              <path
                d="M27.6 19.2c0-8.4 2-10.1 4.4-10.1s4.4 1.7 4.4 10.1S32 39.6 32 39.6s-4.4-12-4.4-20.4"
                fill="#ffffff"
              ></path>
              <g fill="#3e4347">
                <path
                  className="flag-style"
                  d="M39.8 46c-1.6-1-3.8.8-5 4.1c-1.2 3.3-.8 6.8.7 7.8c1.6 1 3.8-.8 5-4.1c1.2-3.3.8-6.8-.7-7.8"
                ></path>
                <path
                  className="flag-style"
                  d="M24.2 46c-1.6 1-1.9 4.5-.7 7.8s3.4 5.1 5 4.1s1.9-4.5.7-7.8s-3.4-5.1-5-4.1"
                ></path>
              </g>
              <path
                d="M45.7 9.6c-7.3-10.3-36.1-7-36.1 17c0 0 6.9-8.8 18.5-11.4c0 0-4.6 5.3-10 9.4c0 0 11.3-2.9 18.3-9.4c0 0 .8 4.7-8.5 7.8c-.1 0 26.8-.7 17.8-13.4"
                fill="#e5be7a"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    );
  }
}
