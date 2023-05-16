# Spotify Recap
Purpose of this repository is to get familiar with using React.
```
npm start
```

Runs the app in development mode on a local host.

## Dependencies to install
```
npm install react-router-dom
npm install axios
```

React Router is a package that helps navigate and route through different pages / views in web development.
Axios is an HTTP client that is used to fetch data from Spotify APIs.

## OAuth

- Client ID and Client Secret will be needed to use OAuth. Those two information can be found in the Spotify Developer's Account.
- Once Spotify authenticates the app (client) using Client ID and Client Secret, user will be redirected to a page where the user can grant the app access to their Spotify account.
- Once the user gives access, Spotify generates an access token, which is used to request data from Spotify. 

## API

Use axios to fetch data from Spotify APIs.
Documentation on Spotify APIs can be found here: https://developer.spotify.com/documentation/web-api

### Citations / Credit
- https://www.youtube.com/watch?v=wBq3HCvYfUg
- https://www.youtube.com/watch?v=dGFUQf5pcpk
