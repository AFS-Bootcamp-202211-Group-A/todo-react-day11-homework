import React, { useState } from "react";
import ListGroup from "./ListGroup";
import InputBox from "./InputBox";

function ListArea() {
  const [messageMap, setMessageMap] = useState(Array().fill(''));
  const updateMessageList = (message) => {
    setMessageMap([...messageMap, message]);
  };
  return (
    <div>
      <ListGroup messageMap={messageMap} />
      <InputBox updateMessageList={updateMessageList} />
    </div>
  );
}

export default ListArea;
