import React from "react";
import styled from "styled-components";
import logo from '../Assets/temp_logo.png';

const Container = styled.div`
  display: flex;
  margin: 20px 60px;
`;

const Gallery = styled.div`
  width: 100%;
  display: flex;
  
  .item {
    border-radius: 10px;
    margin: 0px 8px;
    height: 500px;
    /* box-sizing: border-box; */
    flex: 1;
    background: #e5e5e5;
  }
`;

const Header = styled.div`
    margin: 0px 8px;
    img {
        width: 64px;
        height: 64px;
    }
`

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 32px 8px;
  .logo {
    margin: 0px 0px;
    width: 100%;
    font-weight: 800;
    background: linear-gradient(
        217deg,
        rgba(255, 214, 166, 0.8),
        rgba(255, 0, 0, 0) 70.71%
      ),
      linear-gradient(127deg, rgba(167, 153, 255, 0.8), rgba(0, 255, 0, 0) 70.71%),
      linear-gradient(336deg, rgba(152, 218, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .navlink {
    margin: 0px;
    text-align: right;
  }
`;

const Main = () => {
  return (
    <div>
      <Container>
          <Header>
              <img src={logo}/>
          </Header>
      </Container>
      <Container>
        <Navigation>
          <div>
            <h3 className='logo'>Do Park.</h3>
          </div>
          <div>
            <p className="navlink">Work</p>
            <p className="navlink">Side projects</p>
            <p className="navlink">Thoughts</p>
          </div>
        </Navigation>
      </Container>
      <Container>
        <Gallery>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </Gallery>
      </Container>
    </div>
  );
};

export default Main;
