import React, { Component } from "react";

class Success extends Component {
  render() {
    const {
      address,
      bedroom,
      bathroom,
      description,
      imagePreview,
    } = this.props.values;
    return (
      <div>
        <div className="container mt-5">
          <div className="form-group jumbotron">
            <h3>Your data</h3>
            <small id="emailHelp" class="form-text text-muted">
              All the images are in base64 format, all the property detais are
              being displayed below.
            </small>
            {imagePreview !== "" && (
              <div className="container mb-5">
                <img
                  src={imagePreview}
                  class="img-fluid"
                  alt="Responsive image"
                />
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
  }
}
export default Success;
