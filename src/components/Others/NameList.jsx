import React from "react";

import PI, { doublePi, triplePi } from "../../math";

function NameList() {
  return (
    <ul>
      <li>Osame</li>
      <li>Yamen</li>
      <li>Ahmad</li>
      <li>{PI}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
  );
}

export default NameList;
