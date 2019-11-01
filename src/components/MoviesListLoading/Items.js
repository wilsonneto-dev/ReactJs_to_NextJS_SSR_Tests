import React, { Component } from 'react';

class Items extends Component {
  render() {
    let arrLoadingItems = [];
    for (let index = 0; index < 4; index++) arrLoadingItems.push(index);

    return (
      <div className="movies-slider loading">
        {arrLoadingItems.map((item, index) => (
          <div key={index} className="item">
            <center>
              <div className="image-wrapper">
                <div
                  style={{
                    animation:
                      '1.2s ease-in-out 0s infinite normal none running animation-16jpnkj',
                    width: '250px'
                  }}
                  className="img-loading css-19bon8n css-loading-movie-items"
                ></div>
              </div>
            </center>
          </div>
        ))}
      </div>
    );
  }
}

export default Items;
