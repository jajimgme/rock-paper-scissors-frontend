# RockPaperScissorsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.
This project contains the implementation of the game rock, paper, scissors available in https://github.com/jajimgme/rock-scissors-paper-backend. The base server uri can be change in environment.ts file. By defult it will expecting the service at localhost:8080.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## File structure
Inside the app directory there is the main app module with the app component with the main router outlet. There is three main folders:
* Core: Contains the services that communicate with the server and would contain other services that implement the business logic of the application. 
* Features: Contains the components that constitute the content of the pages of the app. Its modules are lazy loaded (that's why the features.module is mainly empty).
* Shared: Contains the entities which are used by the presentation layer and the services. Also contains components that are reusable and are not coupled with any service.  