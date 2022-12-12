import React, { useState } from "react";
import List from "./List";

function ListGroup(props) {
  console.log(props);
  return props.messageMap.map((item, index) => {
    return <List key={index} message={item} />;
  });
}

export default ListGroup;
