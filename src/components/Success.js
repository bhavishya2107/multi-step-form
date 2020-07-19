import React from "react";

const Success = (props) => {
  const {
    address,
    bedroom,
    bathroom,
    description,
    imagePreview,
  } = props.values;
  const { images } = props;
  console.log(images);
  return (
    <div>
      <div className="container mt-5">
        <div className="form-group jumbotron">
          <h3>Your data</h3>
          <h4 className="mt-5">Preview Image</h4>
          {imagePreview !== "" && (
            <div className="container mb-5 mt-5">
              <img
                src={imagePreview}
                className="img-fluid"
                alt={imagePreview}
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
          {images &&
            images.map((img) => {
              return console.log(img.src);
            })}
        </div>
      </div>
    </div>
  );
};
export default Success;
