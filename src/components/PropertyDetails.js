import React, { Component } from "react";

class PropertyDetails extends Component {
  render() {
    const { nextStep, prevStep, values, handleChange, validation } = this.props;
    const { address, bedroom, bathroom, description } = values;

    return (
      <div className="container mt-5">
        <form>
          <div className="form-group">
            <label>Address</label>
            <textarea
              type="text"
              className="form-control"
              value={address}
              placeholder="Enter address"
              onChange={handleChange("address")}
            />
            {/* {address && (
              <p style={{ color: "red" }}>Please check the address</p>
            )} */}
          </div>
          <div className="form-group">
            <label>Bedroom</label>
            <input
              type="number"
              className="form-control"
              max="10"
              min="1"
              value={bedroom}
              placeholder="Enter number of bedroom"
              onChange={handleChange("bedroom")}
            />
            {bedroom > 10 ? (
              <p style={{ color: "red" }}>Bedrooms can be max 10</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Bathroom</label>
            <input
              type="number"
              max="5"
              min="1"
              className="form-control"
              value={bathroom}
              placeholder="Enter number of bathroom"
              onChange={handleChange("bathroom")}
            />
            {bathroom > 5 ? (
              <p style={{ color: "red" }}>Bathrooms can be max 5</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              type="text"
              className="form-control"
              value={description}
              placeholder="Description if any (optional)"
              onChange={handleChange("description")}
            />
          </div>
          <div className="row mt-5">
            <button
              type="button"
              onClick={prevStep}
              className="btn btn-light col-4 ml-5"
            >
              Back
            </button>
            <div className="col-1"></div>
            {address !== "" &&
            bedroom !== "" &&
            bedroom <= 10 &&
            bathroom <= 5 ? (
              <button
                type="button"
                onClick={
                  address !== "" && bedroom !== "" && bathroom !== ""
                    ? nextStep
                    : validation
                }
                className="btn btn-success col-4 ml-5"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-dark col-4 ml-5"
                disabled
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default PropertyDetails;
