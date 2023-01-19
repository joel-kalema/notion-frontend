import React from "react";
import "./styles.css";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FcButtingIn } from 'react-icons/fc';
import { BsArrowDownLeft, BsCheck2Circle, BsCloud, BsThreeDotsVertical } from 'react-icons/bs';

class Header extends React.Component {
    render() {
      return (
        <div className="header">
            <div className="header-bar">

              <div className="bar_01">
                <div className="bar_01_p">P</div>
                <p><AiOutlineClockCircle className="icon"/>  0min</p>
                <p><FcButtingIn /></p>
                <p><BsArrowDownLeft className="icon"/> 0</p>
              </div>

              <div className="bar_02">
                <p><BsCheck2Circle /></p>
                <p><BsCloud /></p>
                <p><BsThreeDotsVertical /></p>
              </div>

            </div>
           <h1 className="title">front-end developer test project</h1>
            <p className="Intro">
                You can add content below. Type <span className="Code">/</span> to see available elements.
            </p>
        </div>
      );
    }
  }
  
  export default Header;
  