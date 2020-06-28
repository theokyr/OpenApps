# OpenApps
Angular v10.0 client for [IT_API](https://github.com/apavlidi/IT_API/).
* Current features:
    * Read Categories (Public)
    * Read Announcements (Public)
* Planned features:
    * Category Filtering
    * Announcement Pagination
    * Authentication:
        * Login flow
        * Read Categories (Private)
        * Read Announcements (Private)
    * Localization
    * Theme support (coloring and light/dark theme)

## Requirements
* [Node.js](https://nodejs.org/en/download/) (built with LTS v12.18.1)
* Any node package manager (npm will do just fine)

## Setup
1. Install dependencies by running the following inside the repository:
   ```shell script
    npm install
    ```
2. Update `src/environments/environment.ts` with the Base URL of the API you are using.


## Usage
### Development
1. Serve a dev build using:
    ```shell script
    ng serve
    ```
2. You'll find the dev server running on [http://localhost:4200](http://localhost:4200).

### Production
1. To serve a production build, first you'll have to create a copy of your environments file to a production build:
    ```
    cp src/environments/environment.ts src/openapps/environments/environment.prod.ts
    ```
2. Make sure to modify the `environment.prod.ts` file with any changes your production build needs.
3. Build the production build:
    ```shell script
    ng build --prod
    ```

## License
This project is licensed under the terms of the MIT license.
