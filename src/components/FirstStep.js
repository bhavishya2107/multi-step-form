import React, { Component } from "react";
import ReactFileReader from "react-file-reader";

export class FirstStep extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { handleFiles } = this.props;
    return (
      <div className="container jumbotron mt-5">
        <div className="row m-5">
          <button className="col-sm-5 btn btn-primary" onClick={this.continue}>
            Add from scratch
          </button>
          <div className="col-sm-2"></div>
          <ReactFileReader
            handleFiles={handleFiles}
            fileTypes={".csv"}
            className="col-sm-5"
          >
            <button className="btn btn-info">Upload as CSV</button>
          </ReactFileReader>
        </div>
      </div>
    );
  }
}

export default FirstStep;
