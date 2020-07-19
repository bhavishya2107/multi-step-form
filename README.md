This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation Instruction

### To install all the dependencies
```
npm install
```
### To run the form
```
 npm start
```

## Description

> This app is built on React.<br>
> Each and every step of the form is divided into components.

## Validation 

```
  | Fields      |                      BusinessRules                    |
  |-------------|-------------------------------------------------------|
  | Address     |  Mandatory                                            |
  | Bedroom     |  Mandatory, Numeric field, Maximum char limit is 10   |
  | Bathroom    |  Mandatory, Numeric field, Maximum char limit is 5    |
  | Description |  Optional                                             |
```
## Modules Installed

  * bootstrap 4.5.0,
  * node-sass:4.14.1,
  * react: 16.13.1,
  * react-dom: 16.13.1,
  * react-dropzone: 11.0.2,
  * react-file-reader: 1.1.4,
  * react-js-stepper: 1.2.6,
  * react-scripts: 3.4.1

## Features

  * User can upload the data with a csv file or manually enter it from scratch.
  * User can add images by drag n drop or by clicking the image upload section.
  * User can select a preview image and submit it on success.
  * All the data entered by the user will be displayed in the success component with base64 images consoled.
  * The form is fully responsive for tablet, mobile and pc view.

## Demo
![App](https://github.com/bhavishya2107/multi-step-form/blob/master/form.gif?raw=true)