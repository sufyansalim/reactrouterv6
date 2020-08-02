import React from "react";
import { Link } from "react-router-dom";

export default function LaunchIndex({ shoes }) {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt="img" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
