import React from 'react';
import {Outlet} from "react-router-dom";

export default function Launch() {
    return (
      <div>
        <h1>Launch</h1>
        <Outlet/>
      </div>
    );
  }