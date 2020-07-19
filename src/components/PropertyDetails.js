import React from "react";

const PropertyDetails = (props) => {
  const { nextStep, prevStep, values, handleChange, validation } = props;
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
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={prevStep}
            className="btn btn-outline-secondary"
            style={{ width: "40%" }}
          >
            <span className="h6">Back </span>
          </button>
          {address !== "" &&
          bedroom !== "" &&
          bedroom <= 10 &&
          bathroom <= 5 ? (
            <button
              style={{ width: "40%" }}
              onClick={
                address !== "" && bedroom !== "" && bathroom !== ""
                  ? nextStep
                  : validation
              }
              className="btn btn-sm p-2 btn-success ml-2"
            >
              <span className="h6">Next </span>
            </button>
          ) : (
            <button
              className="btn btn-outline-dark btn-sm p-2 ml-2"
              disabled
              style={{ width: "40%" }}
            >
              <span className="h6">Next </span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PropertyDetails;
