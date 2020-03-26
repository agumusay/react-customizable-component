import React from "react";
import "./styles.scss";

function Avatar({ url = "", type = "square", size = "medium" }) {
  return <img className={`${type} ${size}`} src={url}></img>;
}

export default Avatar;
