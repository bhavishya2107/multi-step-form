import React from "react";

const Success = ({ values }) => {
  const { address, bedroom, bathroom, description, imagePreview } = values;
  return (
    <div>
      <div className="container mt-5">
        <div className="form-group jumbotron">
          <h3>Your data</h3>
          {imagePreview !== "" && (
            <div className="container mb-5 mt-5">
              <img src={imagePreview} class="img-fluid" alt={imagePreview} />
            </div>
          )}
          <ul>
            <li>
              <b>Address: </b>
              {address}
            </li>
            <li>
              <b>No. of bedrooms: </b>
              {bedroom}
            </li>
            <li>
              <b>No. of bathrooms: </b>
              {bathroom}
            </li>
            <li>
              <b>Description: </b>
              {description ? description : "NA"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Success;
