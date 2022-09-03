import React from "react";
import "./Menu.scss";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav/lib/index";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFile,
  faChartLine,
  faUsers,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <>
      <SideNav className="bg-dark">
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <FontAwesomeIcon icon={faHome} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="Projects">
            <NavIcon>
              <FontAwesomeIcon icon={faFile} />
            </NavIcon>
            <NavText>Projects</NavText>
          </NavItem>
          <NavItem eventKey="sensor">
            <NavIcon>
              <FontAwesomeIcon icon={faChartLine} />
            </NavIcon>
            <NavText>Sensor</NavText>
          </NavItem>
          <NavItem eventKey="users">
            <NavIcon>
              <FontAwesomeIcon icon={faUsers} />
            </NavIcon>
            <NavText>users</NavText>
          </NavItem>{" "}
          <NavItem eventKey="setting">
            <NavIcon>
              <FontAwesomeIcon icon={faGear} />
            </NavIcon>
            <NavText>setting</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default Menu;
