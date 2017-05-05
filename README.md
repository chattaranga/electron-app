[logo-app]: https://github.com/northcoders/Chattaranga-electron-app/blob/master/public/img/logos/app-logo.png

![logo-main][logo-app]

# Chattaranga Electron App

## How to run a version that auto-compiles

Ensure you have the latest version of node installed.

```
$ npm install
$ npm run bundle
```

Leave this running and in a seperate terminal run...

```
$ npm start
```

## How to test reducers

Ensure that you have chai installed.

```
$ npm install chai -g
```

Then run test files.

```
$ npm test
```

## Servers

- Download page hosted [here](https://chattaranga.herokuapp.com/) 

- API is hosted [here](https://chattaranga.herokuapp.com/api)

- Signalling server hosted [here](https://chattaranga-signalling-server.herokuapp.com/)

Be aware that sites hosted on Heroku may take a few extra seconds to load than normal when they have been left inactive for a while.

# Welcome to Chattaranga

**Chattaranga is a desktop, video-based language learning application, currently in development.**

‘Chattaranga’ is play on the name of the classic yogic pose, the Chaturanga. We want the name of our application to feel exotic, and we like the names' connotations of continuous practice and training.

We believe our prototype has the potential to be genuinely innovative as a newcomer to the market by providing an application which moves the focus of learning a language from reading and writing to speaking and interacting with like-minded learners.

## OUR TECHNOLOGY STACK

The full stack of our prototype will be built with Javascript. Our cross-platform desktop application will be built with Electron, and the streaming functionality will use WebRTC.

The desktop platform will be supported by a website, which acts as a landing page for our product. From here, the desktop application can be downloaded.

We will build both the website and the Chattaranga desktop application using React and Redux on the front end, styling with Sass. The back-end will be built with a MongoDB database and Express server.

## OUR USER EXPERIENCE

1. **SIGNING UP** - The user will arrive at a bright and simple landing page with a clear call-to-action: to download. We intend for our sign-up process to be clear, easy and simple, in a single React form, taking minimal information from our users.

2. **STARTING UP CHATTARANGA** - On starting up the application for the first time users will be able to sign and complete a sign up form to pick a language and their ability level. This information will be used to match other users. If the user has signed in before, they’ll be prompted to sign in.

3. **CHAT** - From their logged-in home page, users can choose to initiate a video chat.

4. **CONNECT** – The user is paired with another learner of the language, who has a similar ability. Whilst the connection loads, they can view a short ‘holding’ connection image. Once connected, the video screen dominates the page, alongside short conversation prompts and an IBM Watson driven translation box as a sidebar. Users can award points to other users after thier chat.

5. **UNLOCK ACHIEVEMENTS** - After chatting, you can provide non-intrusive, brief feedback about your experience with the other user to encourage a close, amicable community. You can then view your achievements and choose to train again.