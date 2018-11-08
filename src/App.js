import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Titles />
        <Form />
      </div>
    );
  }
}

export default App;