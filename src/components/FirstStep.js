import React, { Component } from "react";
import ReactFileReader from "react-file-reader";

class FirstStep extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.clearStateOnStart();
  };

  render() {
    const { handleFiles } = this.props;
    return (
      <div className="container jumbotron mt-5">
        <div className="mt-5 text-center">
          <button
            type="button"
            className="btn btn-outline-primary p-2"
            style={{ width: "40%" }}
            onClick={this.continue}
          >
            <span className="h6">Start from scratch</span>
          </button>
          <button
            className="btn btn-outline-primary p-2 ml-2"
            style={{ width: "40%" }}
          >
            <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
              <span className="h6">Upload as CSV</span>
            </ReactFileReader>
          </button>
        </div>
      </div>
    );
  }
}

export default FirstStep;
