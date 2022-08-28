import React, { useState, useEffect } from "react";
import { editPublisher, detailPublisher } from "../../axios/publisherAxios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ImOffice } from "react-icons/im";
import { MdAddTask, MdCancel } from "react-icons/md";

const EditPublisher = () => {
    const [form, setForm] = useState({
        name: "",
    });

    const navigation = useNavigate();
    const params = useParams();

    const getPublisherDetail = () => {
        const { id } = params;

        detailPublisher(+id, (result) => {
            setForm({
                name: result.name,
            });
        });
    };

    useEffect(() => {
        getPublisherDetail();
    }, []);

    const submitHandler = () => {
        const { id } = params;

        editPublisher(+id, form);
        navigation("/publishers");
    };

    return (
        <div className="row mt-4">
            <div className="w-100 text-center my-3">
                <h4 className="fw-bold" style={{ color: "var(--black)" }}>
                    Edit a publisher
                </h4>
                <p className="medium">Les't get started with us</p>
            </div>
            <div className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="publisherName" className="form-label">
                        Publisher name
                    </label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <ImOffice />
                        </span>
                        <input
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            id="publisherName"
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

export default EditPublisher;
