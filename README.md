# Note: for prefix path or basename of BrowserRouter
1. `"homepage": "/spa1"`: Generated index.html will use assets with prefix of this homepage.
2. `"build": "BUILD_PATH='./build/spa1/' react-scripts build"`: Only for output dir in build dir.
3. `<BrowserRouter basename="/spa1">`: Tricky part. 
    - if basename is activated, the root of '/' will not be handled even by 404 page, as it is beyond the basename coverage. Correspondingly, the auth0 will not work at the step of '/?code=....', as no web service for the root path.
    - work but not the prefix way is to ignore the basename, and use the absolute url for nav-bar.js(controlling the link) and app.js (controlling the routes). In this case, root '/' can be handled easily, even 404, and the auth0 redirecting will work.


# Hello, React World!
This code sample demonstrates how to implement authentication in a React Single-Page Application (SPA).

![Hello, React World!](https://cdn.auth0.com/blog/hello-auth0/hello-react.png)



## Get Started

Install the project dependencies:

```bash
npm install
```

Create a `.env` file under the root project directory with the following content:

```bash
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=https://hello-world.example.com
REACT_APP_API_SERVER_URL=http://localhost:6060
```

Run the application:

```bash
npm start
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the starter application.
