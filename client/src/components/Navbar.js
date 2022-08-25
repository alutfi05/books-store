import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav-bg shadow-sm p-3 mb-5 bg-body rounded">
                <div className="container">
                    <Link className="navbar-brand font-logo me-5" to="/">
                        Books Store
                        <span className="small black">&copy;</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto fw-semibold">
                            <li class="nav-item me-3">
                                <Link
                                    class="nav-link active"
                                    aria-current="page"
                                    to="/books"
                                >
                                    Books List
                                </Link>
                            </li>
                            <li class="nav-item dropdown me-3">
                                <Link
                                    class="nav-link dropdown-toggle"
                                    to="/categories"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Category
                                </Link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <Link class="dropdown-item" to="#">
                                            Komik
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="#">
                                            Novel
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item me-3">
                                <Link class="nav-link" to="/authors">
                                    Author
                                </Link>
                            </li>
                            <li class="nav-item me-3">
                                <Link class="nav-link" to="/publishers">
                                    Publisher
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
