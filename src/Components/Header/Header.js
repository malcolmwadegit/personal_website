import React from "react";
import './Header.css'; // Import the corresponding CSS file for styling
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {


    return (
        <div className="header-row">
            <div className="left-container">
                <div className="contact-container">
                    <div className="contact-link">
                    </div>
                </div>
            </div>
            <div className="middle-container">
                <h1>
                    Malcolm Wade
                </h1>
            </div>
            <div className="right-container">
                <div className="resume-space">
                    <Dropdown />
                </div>
            </div>
        </div>
    );
};

export default Header;
