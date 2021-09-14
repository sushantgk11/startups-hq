import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import "../Styles/Details.css";

function Details() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  async function getDetails() {
    const comments = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    setDetails([comments]);
  }
  getDetails();
  return (
    <div className="main w-screen h-screen">
      {details.map((val) => {
        return (
          <DetailsCard
            id={val.data.id}
            postName={val.data.name}
            email={val.data.email}
            body={val.data.body}
          />
        );
      })}
    </div>
  );
}

export default Details;