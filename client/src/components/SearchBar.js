import React from "react";

const SearchBar = () => {
    return (
        <>
            <div className="w-50 mx-auto mt-4">
                <form class="d-flex" role="search">
                    <input
                        class="form-control me-2 rounded-pill shadow p-3 mb-5 bg-body rounded"
                        type="search"
                        placeholder="Search title book ...."
                        aria-label="Search"
                    />
                    {/* <button class="btn btn-outline-success" type="submit">
                    Search
                </button> */}
                </form>
            </div>
        </>
    );
};

export default SearchBar;
