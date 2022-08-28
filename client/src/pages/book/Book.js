import React from "react";
import { Outlet } from "react-router-dom";
const Book = () => {
  return (
    <div className="w-100">
      <div className="text-center">
        <hr className="border border-dark border-1 opacity-25" />
      </div>
      <Outlet />
    </div>
  );
};

export default Book;
