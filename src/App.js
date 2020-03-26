import React from "react";
import "./styles/App.scss";

//Logos
import Avatar from "./components/avatar";
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Avatar
            size="small"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            size="small"
            type="rounded"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            size="small"
            type="circle"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg" />
        </li>
        <li>
          <Avatar
            type="rounded"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            type="circle"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            size="large"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            size="large"
            type="rounded"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            size="Large"
            type="circle"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            size="x-large"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            size="x-large"
            type="rounded"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
        <li>
          <Avatar
            size="x-large"
            type="circle"
            url="https://s3.amazonaws.com/uifaces/faces/twitter/mangosango/128.jpg"
          />
        </li>
      </ul>
    </div>
  );
}

export default App;
