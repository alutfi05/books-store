import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";

const SideBar = () => {
  return (
    <div className="container">
      <div className="sidebar-header">
        <Button className="mt-4">
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
        <h3>react-bootstrap sidebar</h3>
      </div>
      <div className="flex-column pt-2">
        <p className="ml-3">Heading</p>
        <div className="active">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
        </div>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </Link>
        </div>

        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </Link>
        </div>

        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </Link>
        </div>

        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
