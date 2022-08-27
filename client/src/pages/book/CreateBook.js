import React, { useState } from "react";
import { addBook } from "../../axios/bookAxios";
import { Link, useNavigate } from "react-router-dom";
import { RiBook2Fill } from "react-icons/ri";
import { MdAddTask, MdCancel } from "react-icons/md";

const CreateBook = () => {
  const [form, setForm] = useState(
    {
      title: "",
      synopsis: "",
      price: "",
      publicationYear: "",
      authorName: "",
      category: "",
    },
    {}
  );

  const navigation = useNavigate();

  const submitHandler = () => {
    addBook(form);
    navigation("/books");
  };
  return (
    <div className="row mt-4">
      <div className="w-100 text-center my-3">
        <h4 className="fw-bold" style={{ color: "var(--black)" }}>
          Create a Book
        </h4>
        <p className="medium">Les't get started with us</p>
      </div>
      <div className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="bookName" className="form-label">
            Book name
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <RiBook2Fill />
            </span>
            <input
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              id="bookTitle"
              type="text"
              className="form-control"
              required
              autoFocus
            />
          </div>
        </div>
        <div className="mb-3">
          <button
            onClick={() => submitHandler()}
            className="btn"
            style={{
              backgroundColor: "var(--blue)",
              color: "#fff",
            }}
          >
            <span className="me-2">
              <MdAddTask />
            </span>
            Submit
          </button>
          <Link
            to="/publishers"
            className="btn ms-2"
            style={{
              backgroundColor: "var(--red)",
              color: "#fff",
            }}
          >
            <span className="me-2">
              <MdCancel />
            </span>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
