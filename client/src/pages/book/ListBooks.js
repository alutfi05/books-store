import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiHealthBookFill } from "react-icons/ri";
import { SearchBar } from "../../components";

const ListBooks = () => {
    return (
        <>
            <div className="w-100">
                <div>
                    <SearchBar />
                </div>
                <div className="text-center">
                    <Link
                        to="/books/create"
                        className="btn btn-sm"
                        style={{
                            backgroundColor: "var(--green)",
                            color: "#fff",
                        }}
                    >
                        <span className="me-2">
                            <RiHealthBookFill />
                        </span>
                        Add Book
                    </Link>
                </div>
                <div className="row"></div>
            </div>
        </>
    );
};

export default ListBooks;
