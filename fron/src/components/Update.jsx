import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [fname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  // Receiving single user data
  const getSingleData = async () => {
    const response = await fetch(`http://localhost:5003/${id}`);
    const result = await response.json();

    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    }
  };

  // Passing edited data to backend
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name: fname, email, age }; // Corrected key

    const response = await fetch(`http://localhost:5003/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      setError("");
      navigate("/all");
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <div className="container my-2">
      <h1 className="h1 text-center">Edit Data</h1>
      {error && <div className="alert alert-danger"> {error} </div>}
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={fname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
