# OpenApps
Open Source IEEE Apps client on Angular v10.0

## Requirements
* [Node.js](https://nodejs.org/en/download/) (built with LTS v12.18.1)
* Any node package manager (npm will do just fine)

## Setup
1. Install dependencies by running the following inside the repository's `src/openapps/` directory:
   ```shell script
    npm install
    ```
2. Update `src/openapps/environments/environment.ts` with your Apps API key.


## Usage
### Development
1. Serve a dev build using:
    ```shell script
    ng serve
    ```
2. You'll find the dev server running on [http://localhost:4200](http://localhost:4200).

### Production
1. To serve a production build, first you'll have to copy your environments file to a production build:
    ```
    cp src/openapps/environments/environment.ts src/openapps/environments/environment.prod.ts
    ```
2. Serve the production build:
    ```shell script
    ng serve --prod
    ```

## License
This project is licensed under the terms of the MIT license.