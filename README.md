# OpenApps
Angular v10.0 client for [IT_API](https://github.com/apavlidi/IT_API/).

You can find a version of the app deployed on Firebase here: 
[http://openapps-it.web.app/](http://openapps-it.web.app/)

* Current features:
  * Read Categories (Public)
  * Read Announcements (Public)
  * Authentication:
    * Login flow
* Planned features:
    * User Search (Public)
    * Authentication:
        * Read Categories (Private)
        * Read Announcements (Private)
    * Category Filtering
    * Announcement Pagination
    * Localization
    * Theme support (coloring and light/dark theme)
    
Bleeding edge development happens on the [dev](https://github.com/theokyr/OpenApps/tree/dev) branch.

## Requirements
* [Node.js](https://nodejs.org/en/download/) (built with LTS v12.18.1)
* Any node package manager (npm will do just fine)

## Setup
1. Install dependencies by running the following inside the repository:
   ```shell script
    npm install
    ```
2. Update `src/environments/environment.ts` with the Base URL of the API you are using.


## Usage - Local Server
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

**Important**: If you're facing issues during the build process, try creating a firebase project to ensure
Authentication cloud functions work (see the "Firebase Deployment" section).

## Deployment

To enable authentication services, OpenApps uses Firebase by default, but you can write your own implementation as long
as it pings `<openapps-base-url>/auth/finalize`, which runs server-side code on the https://login.iee.ihu.gr API for
exchanging access and refresh tokens.

### Firebase Deployment

If you're using Firebase, it's pretty easy to deploy OpenApps.

1. Create and initialize a Firebase Project in your cloned openapps repository. Your Project must have Hosting and
   Functions as selected options after `firebase init`.
2. Configure the Client ID & Secret:
    ```shell script
    firebase functions:config:set auth.client_id="YOUR_CLIENT_ID"
    firebase functions:config:set auth.client_secret="YOUR_CLIENT_SECRET"
    ```
3. Create and customize a copy of `firebase.example.json` to ensure Authentication cloud functions work.
4. Build and deploy to Firebase:
    ```shell script
    ng deploy
    ```

## License
This project is licensed under the terms of the MIT license.
