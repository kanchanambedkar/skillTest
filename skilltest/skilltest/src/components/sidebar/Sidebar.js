import React,{useState} from "react";
import { ThemeContext } from "../../themeContext";
import ListGroup from "react-bootstrap/ListGroup";
import Form from 'react-bootstrap/Form';
import WhiteStack from "../assets/img/whiteStack.svg";
import stackIcon from "../assets/img/stackIcon.svg";
import StackBlue from "../assets/img/stack-blue.svg";
import App from '../../App';
import './Sidebar.css';

const Sidebar = (props) => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);
    const { toggle, toggleFunction } = React.useContext(ThemeContext);

  return (
    <div className={hovered?"sidebar fullSidebar": "sidebar"}>
      <ListGroup className="bg-transparent">
        <ListGroup.Item className="d-flex align-items-center border-0 p-0 bg-transparent">
          <span className="icon d-flex align-items-center justify-content-center">
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.76"
              d="M11.0133 1.21331C13.32 -0.440026 15.7867 1.65331 17.6667 2.93331C20.1467 4.87997 23.04 6.57331 24.7467 9.29331C25.2 13.6133 25.16 18 24.84 22.32C24.8133 24.32 22.92 26.1733 20.9333 26.1866C15.6267 26.4 10.2933 26.4266 4.98668 26.1733C3.01334 26.1333 1.14668 24.2533 1.14668 22.28C0.88001 17.9866 0.746676 13.64 1.30668 9.35997C3.62668 5.79997 7.57334 3.58664 11.0133 1.21331ZM3.66668 9.49331C3.61334 14.2133 3.64001 18.9333 3.69334 23.6533C9.89334 23.7466 16.1067 23.7466 22.3067 23.6533C22.36 18.9333 22.3733 14.2133 22.3333 9.50664C19.3067 7.09331 16.16 4.82664 13 2.59997C9.85334 4.85331 6.73334 7.13331 3.66668 9.49331Z"
              fill="#6A6F7B"
            />
            <path
              opacity="0.76"
              d="M9.58667 19.7333C11.8667 19.7333 14.1333 19.7333 16.4 19.7333C16.4 20.3599 16.4 21.6399 16.4 22.2666C14.1333 22.2666 11.8667 22.2666 9.58667 22.2666C9.58667 21.6266 9.58667 20.3599 9.58667 19.7333Z"
              fill="#6A6F7B"
            />
          </svg>
          </span>
          Home
        </ListGroup.Item>
        <ListGroup.Item className="d-flex align-items-center border-0 p-0 bg-transparent" name={props.className}>
         <span className="icon d-flex align-items-center justify-content-center" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
         
         {props.className?<img src={WhiteStack} alt="stack"/> :<img src={hovered?StackBlue:stackIcon} alt="stack"/>}
         </span>
          Stack
        </ListGroup.Item>
      </ListGroup>


      <div className="toggleSwitch">
      
      <Form.Check 
        type="switch"
        id="custom-switch"
        label=""
        className="toggle_switch mx-auto"
        onClick={toggleFunction}
      />
     
      </div>
    </div>
  );
};

export default Sidebar;
