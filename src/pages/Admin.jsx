import { useState } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const submit = () => {
    console.log({ title, price });
  };

  return (
    <div className="container mt-5">
      <h3>Add Package</h3>

      <input
        className="form-control my-2"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="form-control my-2"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button className="btn btn-danger" onClick={submit}>
        Save
      </button>
    </div>
  );
}

export default Admin;