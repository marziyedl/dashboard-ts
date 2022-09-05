import React from "react";
import "./Menu.scss";
import SideNav, {
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
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <SideNav className="bg-dark">
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home" onClick={() => navigate("/")}>
            <NavIcon>
              <FontAwesomeIcon size="lg" icon={faHome} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="Projects">
            <NavIcon>
              <FontAwesomeIcon size="lg" icon={faFile} />
            </NavIcon>
            <NavText>Projects</NavText>
          </NavItem>
          <NavItem eventKey="sensor"  onClick={() => navigate("addSensor")}>
            <NavIcon>
              <FontAwesomeIcon size="lg" icon={faChartLine} />
            </NavIcon>
            <NavText>Sensor</NavText>
          </NavItem>
          <NavItem eventKey="users">
            <NavIcon>
              <FontAwesomeIcon size="lg" icon={faUsers} />
            </NavIcon>
            <NavText>users</NavText>
          </NavItem>{" "}
          <NavItem eventKey="setting">
            <NavIcon>
              <FontAwesomeIcon size="lg" icon={faGear} />
            </NavIcon>
            <NavText>setting</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default Menu;
