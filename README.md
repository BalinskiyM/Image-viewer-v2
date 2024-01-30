# ImageViewerV2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Assumption
Image Popup Component Layout: Since the provided requirement states that the image popup should display the image at the center position corresponding to ImagePosition.x and ImagePosition.y, I assume that the image popup component will consist of an <img> element to display the image and other necessary elements for zooming functionality.

Aspect Ratio Preservation: While implementing the "Zoom to Fit" functionality, I assume that the aspect ratio of the image will be preserved to prevent distortion. This means that the image will scale proportionally to fit the display while maintaining its original aspect ratio.

Zoom Functionality Limits: For the "Zoom In" and "Zoom Out" functionality, I assume that there will be minimum and maximum limits for zooming to prevent excessive scaling that may degrade image quality or usability.

Data Loading: Since the endpoints to retrieve image data and positions could be mocked, I assume that the test implementation will include mock data for images and image positions to simulate real-world scenarios and test various use cases.

## Development server

Navigate into Image-viewer-v2 directory and run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
