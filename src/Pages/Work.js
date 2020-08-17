import React from "react";
import styled from 'styled-components';

const Gallery = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .itemContainer {
    box-sizing: border-box;
    height: 500px;
    flex: 1;
    padding: 8px 8px;
    /* border-radius: 10px;
    padding: 8px 8px;
    box-sizing: border-box; */
    /* flex: 1;
    background: #e5e5e5;
    box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.1);
    transition: all 0.4s;
    
    :hover {
      box-shadow: 0px 4px 12px rgba(12, 12, 13, 0.2);
    } */
  }

  .item {
    width: auto;
    height: 100%;
    border-radius: 10px;
    background: #e5e5e5;
    box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.1);
    transition: all 0.4s;
    
    :hover {
      box-shadow: 0px 4px 12px rgba(12, 12, 13, 0.2);
    }
  }

  @media screen and (max-width: 768px) {
    .itemContainer {
      flex: 0 0 100%;
    }
  }
`;

const Work = () => {
  return (
    <Gallery>
      <div className="itemContainer">
        <div className="item"></div>
      </div>
      <div className="itemContainer">
        <div className="item"></div>
      </div>
      <div className="itemContainer">
        <div className="item"></div>
      </div>
    </Gallery>
  );
};

export default Work;
