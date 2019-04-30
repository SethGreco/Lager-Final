import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";



const EntryView = () => (
  <React.Fragment>
    <DataProvider endpoint="api/project/"
                  render={data => <Table data={data}/>}/>
    <Form endpoint="api/project/"/>

  </React.Fragment>
);
//    const wrapper = document.getElementById("app");
//    wrapper ? ReactDOM.render(<App />, wrapper) : null;


export default EntryView;