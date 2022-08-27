import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Book,
    ListBooks,
    CreateBook,
    EditBook,
    Category,
    ListCategories,
    CreateCategory,
    EditCategory,
    Author,
    ListAuthors,
    CreateAuthor,
    EditAuthor,
    Publisher,
    ListPublishers,
    CreatePublisher,
    EditPublisher,
} from "../pages";

const MainContent = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="" element={<ListBooks />}></Route>
                <Route path="books" element={<Book />}>
                    <Route path="" element={<ListBooks />}></Route>
                    <Route path="create" element={<CreateBook />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditBook />}></Route>
                    </Route>
                </Route>
                <Route path="categories" element={<Category />}>
                    <Route path="" element={<ListCategories />}></Route>
                    <Route path="create" element={<CreateCategory />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditCategory />}></Route>
                    </Route>
                </Route>
                <Route path="authors" element={<Author />}>
                    <Route path="" element={<ListAuthors />}></Route>
                    <Route path="create" element={<CreateAuthor />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditAuthor />}></Route>
                    </Route>
                </Route>
                <Route path="publishers" element={<Publisher />}>
                    <Route path="" element={<ListPublishers />}></Route>
                    <Route path="create" element={<CreatePublisher />}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditPublisher />}></Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default MainContent;
