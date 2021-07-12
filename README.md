# OMDB Shoppies Challenge

## Description

This is Perry Defayette's submission for the Fall 2021 Shopify Front End Software Developer Internship. The app leverages the OMDB API to return a list of movies titles. The user can then select film titles to nominate and the app will save them to a list. After 5 films are selected, nominations are done!

## Installation

1. To run on your local machine, clone project:

    - SSH: ```git@github.com:defsax/shoppies-challenge.git```

    - HTTPS: ```https://github.com/defsax/shoppies-challenge.git```

2. Access folder: ```cd shoppies-challenge```

3. Initialize react: ```npm install```

4. Create an API Key: https://www.omdbapi.com/apikey.aspx

5. Create a .env file to store API Key in root directory of project. Add the following line:
    ```
    REACT_APP_OMDB_API_KEY=*YOUR API KEY HERE*
    ```

6. Start the development server: ```npm start```

## Stack

This single-page project was built using React. HTTP calls to the OMDB Api are done using Axios. The page is styled by hand using SCSS.

## Screenshots

![Results](https://raw.githubusercontent.com/defsax/shoppies-challenge/master/public/resources/screenshots/results1.png)

![Nominated 1](https://raw.githubusercontent.com/defsax/shoppies-challenge/master/public/resources/screenshots/nominated1.png)

![Nominated List](https://raw.githubusercontent.com/defsax/shoppies-challenge/master/public/resources/screenshots/nominationslist1.png)

![Nominations Done](https://raw.githubusercontent.com/defsax/shoppies-challenge/master/public/resources/screenshots/nominationsdone.png)

![Mobile View](https://raw.githubusercontent.com/defsax/shoppies-challenge/master/public/resources/screenshots/mobileview1.png)

![Mobile View 2](https://raw.githubusercontent.com/defsax/shoppies-challenge/master/public/resources/screenshots/mobileview2.png)