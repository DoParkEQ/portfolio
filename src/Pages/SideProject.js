import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  .break {
      width: 100%;
      border: none;
  }
  .item {
    border-radius: 10px;
    margin: 8px 8px;
    height: 250px;
    box-sizing: border-box;
    flex: 1 1 32%;
    background: #e5e5e5;
    box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.1);
    transition: all 0.4s;
    
    :hover {
      box-shadow: 0px 4px 12px rgba(12, 12, 13, 0.2);
    }
  }

  /* div:nth-child(1) {
    flex: 1;
  }

  div:nth-child(2) {
    flex: 1;
  }

  div:nth-child(3) {
    flex: 5;
  }

  div:nth-child(5) {
    flex: 6;
  }

  div:nth-child(6) {
    flex: 6;
  }  */
  @media screen and (max-width: 768px) {
    .item {
      flex: 0 0 100%;
    }
  }
`;

const SideProject = () => {
    return (
        <Gallery>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </Gallery>
    );
};

export default SideProject;