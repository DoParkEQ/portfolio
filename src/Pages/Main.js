import React from "react";
import styled from "styled-components";
import { WorkSection, SideProjectSection } from "./index";
//import Work from "./Work";
//import SideProject from "./SideProject";
import { Route, Link, Switch, NavLink } from "react-router-dom";
// import linkedinIcon from "../Assets/icon_linkedin.png";
// import githubIcon from "../Assets/icon_github.png";
import linkedinIcon from "../Assets/linkedin.svg";
import githubIcon from "../Assets/github.svg";
import logo from "../Assets/temp_logo.png";

const Container = styled.div`
  display: flex;
  margin: 20px 60px;
`;

const Header = styled.div`
  margin: 0px 8px;
  img {
    width: 40px;
    height: 40px;
  }
`;

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
      linear-gradient(
        127deg,
        rgba(167, 153, 255, 0.8),
        rgba(0, 255, 0, 0) 70.71%
      ),
      linear-gradient(
        336deg,
        rgba(152, 218, 255, 0.8),
        rgba(0, 0, 255, 0) 70.71%
      );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const MenuItem = styled(NavLink)`
  display: block;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
  &.active {
    font-weight: 600;
    color: rgba(0, 94, 128, 0.8);
  }
`;

const Footer = styled.div`
  margin: 32px 8px;
  display: flex;
  align-items: center;
  width: 100%;
    .favicon {
      margin-left: 8px;
    }
    
    .copyright{
      margin-right: auto;
    }

    img {
      width: 32px;
      height: 32px;
      box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.1);
    }
  }
  
`

const Main = () => {
  return (
    <div>
      <Container>
        <Header>
          <img src={logo} alt="logo" />
        </Header>
      </Container>
      <Container>
        <Navigation>
          <div>
            <h3 className="logo">Do Park.</h3>
          </div>
          <div>
            <MenuItem to="/work" activeClassName="active">
              Work
            </MenuItem>
            <MenuItem to="/side-project" activeClassName="active">
              Side projects
            </MenuItem>
            <MenuItem to="/thoughts" activeClassName="active">
              Thoughts
            </MenuItem>
          </div>
        </Navigation>
      </Container>
      <Container>
        <Route path="/work" component={WorkSection} />
        <Route path="/side-project" component={SideProjectSection} />
      </Container>
      <Container>
        <Footer>
          <div className='copyright'>
            <p>© 2020 Do Park.</p>
          </div>
          <div className='favicon'>
            <img src={linkedinIcon} alt="linkedin" />
          </div>
          <div className='favicon'> 
            <img src={githubIcon} alt="github" />
          </div>   
        </Footer>
      </Container>
    </div>
  );
};

export default Main;
