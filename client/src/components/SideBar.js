import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faAt,
  faTimes,
  faBuilding,
  faListAlt,
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
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            Book
          </Link>
        </div>

        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faBuilding} className="mr-2" />
            Publisher
          </Link>
        </div>

        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faAt} className="mr-2" />
            Author
          </Link>
        </div>

        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faListAlt} className="mr-2" />
            Category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
