import React, { Component } from "react";
import FirstStep from "./FirstStep";
import PropertyDetails from "./PropertyDetails";
import ImageUploadStep from "./ImageUploadStep";
import Success from "./Success";

class UserForm extends Component {
  state = {
    step: 1,
    address: "",
    bedroom: "",
    description: "",
    bathroom: "",
    images: [],
    imagePreview: "",
  };

  onToggleImagePreview = (src) => {
    const { imagePreview } = this.state;
    {
      imagePreview == src
        ? this.setState({
            imagePreview: "",
          })
        : this.setState({
            imagePreview: src,
          });
    }
  };

  //save images to state
  onDrop = (file) => {
    const { images } = this.state;
    if (images.length <= 3) {
      var fileToLoad = file[0];
      var fileReader = new FileReader();
      fileReader.onloadend = (load) => {
        var base64 = load.target.result;
        this.setState({
          images: [
            ...images,
            {
              name: fileToLoad.name,
              path: fileToLoad.path,
              src: base64,
              size: fileToLoad.size,
            },
          ],
        });
      };
      fileReader.readAsDataURL(fileToLoad);
    } else {
      alert("No more that 4 images");
    }
  };

  // go to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // validation for the form
  validation = () => {
    const { address, bedroom, bathroom } = this.state;
    if (address === "") {
      alert("Address to be filled");
    } else if (bedroom === "") {
      alert("Please Enter the number of bedrooms");
    } else if (bathroom === "") {
      alert("Please Enter the number of bathrooms");
    }
  };

  // go to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // change value onChange
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // handle csv file and add convert to json format
  handleFiles = (files) => {
    var reader = new FileReader();
    reader.onload = (e) => {
      let jsonData = reader.result.split("\n");
      jsonData.forEach((element, index) => {
        if (index) {
          const elementRaw = element.split(",");
          if (element) {
            this.setState({
              address: elementRaw[0],
              bathroom: elementRaw[1],
              bedroom: elementRaw[2],
              description: elementRaw[3],
            });
          }
        }
      });
      console.log(this.state);
    };
    reader.readAsText(files[0]);
    this.nextStep();
  };

  // current step
  showStep = () => {
    const { step } = this.state;
    const {
      address,
      bedroom,
      bathroom,
      description,
      images,
      imgSrc,
      imagePreview,
    } = this.state;
    const values = { address, bedroom, bathroom, description, imagePreview };
    switch (step) {
      case 1:
        return (
          <FirstStep
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleFiles={this.handleFiles}
          />
        );
      case 2:
        return (
          <PropertyDetails
            handleChange={this.handleChange}
            prevStep={this.previousStep}
            nextStep={this.nextStep}
            values={values}
            validation={this.validation}
          />
        );
      case 3:
        return (
          <ImageUploadStep
            handleChange={this.handleChange}
            prevStep={this.previousStep}
            nextStep={this.nextStep}
            onDrop={this.onDrop}
            images={images}
            imgSrc={imgSrc}
            onToggleImagePreview={this.onToggleImagePreview}
            imagePreview={imagePreview}
          />
        );
      case 4:
        return <Success values={values} images={images} />;
    }
  };

  render() {
    const { step } = this.state;
    return (
      <div className="container mt-2">
        {step > 3 ? "" : <h2>Step {step} of 3</h2>}
        {this.showStep()}
      </div>
    );
  }
}

export default UserForm;
