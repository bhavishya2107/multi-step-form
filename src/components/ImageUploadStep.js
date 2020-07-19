import React from "react";
import Dropzone from "react-dropzone";
import img from "../images/img.png";

const ImageUploadStep = (props) => {
  const {
    nextStep,
    prevStep,
    onDrop,
    images,
    onToggleImagePreview,
    imagePreview,
  } = props;
  const files =
    images &&
    images.map((file) => {
      return (
        <div className="col-md-3" key={file.src}>
          <div className="card">
            <img
              src={file.src}
              alt={file.path}
              style={{ width: "100%", height: "100px" }}
            />
            <div className="caption">{file.name}</div>
          </div>
          <div className="text-center">
            <input
              type="checkbox"
              className="form-check-input text-center"
              onChange={() => onToggleImagePreview(file.src)}
              checked={imagePreview === file.src ? true : false}
            />
          </div>
        </div>
      );
    });
  return (
    <div className="jumbotron mt-5">
      <Dropzone onDrop={onDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p
                className="text-center"
                style={{
                  width: "100%",
                  height: "200px",
                  border: "1px dotted black",
                  verticalAlign: "center",
                  padding: "5.5rem",
                  fontWeight: "700",
                }}
              >
                Drag 'n' drop image file here, or click to select file
              </p>
            </div>
            <aside>
              <div className="row mb-5">{files}</div>
            </aside>
          </section>
        )}
      </Dropzone>
      {imagePreview !== "" ? (
        <div className="container mb-5">
          <img src={imagePreview} className="img-fluid" alt={imagePreview} />
        </div>
      ) : (
        <div className="container mb-5">
          <p className="font-weight-bold">Please add an image preview</p>
          <div className="text-center">
            <img src={img} className="img-fluid" alt="img" />
          </div>
        </div>
      )}

      <div className="text-center">
        <button
          type="button"
          onClick={prevStep}
          className="btn btn-outline-secondary p-2"
          style={{ width: "40%" }}
        >
          Back
        </button>
        {images.length > 0 ? (
          <button
            type="button"
            onClick={nextStep}
            className="btn btn-primary p-2 ml-2"
            style={{ width: "40%" }}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-dark p-2 ml-2"
            style={{ width: "40%" }}
            disabled
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default ImageUploadStep;
