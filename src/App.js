import React from "react";

import EditablePage from "./component/editablePage";
import Header from "./component/header";

class App extends React.Component {
    render() {
      return (
        <div className="heder">
            <Header />
            <EditablePage />
        </div>
      );
    }
  }
  
  export default App;