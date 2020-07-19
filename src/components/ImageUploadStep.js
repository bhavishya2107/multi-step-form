import React from "react";
import Dropzone from "react-dropzone";

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
        <div class="col-md-3">
          <div class="card">
            <img
              src={file.src}
              alt={file.path}
              style={{ width: "100%", height: "100px" }}
            />
            <div class="caption">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  onChange={() => onToggleImagePreview(file.src)}
                  checked={imagePreview == file.src ? true : false}
                />
                {file.name}
              </label>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div>
      <Dropzone onDrop={onDrop} accept="image/*" multiple={true}>
        {({ getRootProps, getInputProps }) => (
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <div className="row mb-5">{files}</div>
              <div className="container">
                <img />
              </div>
            </aside>
          </section>
        )}
      </Dropzone>
      {imagePreview !== "" && (
        <div className="container mb-5">
          <img src={imagePreview} class="img-fluid" alt="Responsive image" />
        </div>
      )}

      <div className="row">
        <button type="button" onClick={prevStep} class="btn btn-light col-5">
          Back
        </button>
        <div className="col-2"></div>
        {images.length > 0 ? (
          <button
            type="button"
            onClick={nextStep}
            class="btn btn-success col-5"
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
    </div>
  );
};
export default ImageUploadStep;
