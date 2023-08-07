import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils";
import axios from "axios";

export const Parents = () => {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(API_URL + "/parent/?school=" + user.id)
      .then((res) => setParents(res.data));
  }, []);
  return (
    <div className="container">
      <div className="header">
        <div className="title">Parents</div>
        <Link to="/parent">
          <div className="btn">
            <div className="text">New Parent</div>
            <div className="plus">+</div>
          </div>
        </Link>
      </div>
      <div className="card students">
        <div className="label">
          <div className="col names">Names</div>
          <div className="col school">School</div>
          <div className="action">Actions</div>
        </div>
        {parents.map((parent, index) => (
          <div className="row" key={index}>
            <div className="col names">
              <div className="image">
                <img src={API_URL + parent.image} alt="avatar" />
              </div>
              <div className="name">{parent.name}</div>
            </div>
            <div className="col school">
              <div className="image">
                <img src={API_URL + parent.school.image} alt="School" />
              </div>
              <div className="name">{parent.school.name}</div>
            </div>
            <div className="action">
              <Link to={"/parent/" + parent.id}>
                <div className="btn">View</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
