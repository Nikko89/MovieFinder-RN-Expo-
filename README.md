# MovieFinder-RN-Expo-

A project to play with React Native and the Expo SDK.

## Tech Stack

React Native, Redux, Expo, tMDB API.

Helpers: ES Lint, Airbnb js style guide.

## What It Does

You can search for movies, and add or delete them to and from favorites.
Search options: Keyword, genre, date, or genre plus date.
Currently implemented: Keyword, genre. Date not working yet.

## To Do

Fix Styling, Responsiveness, finish search options, debug persistence between runs, add dynamic navigation, destructure components, add propTypes

## Cloning and Installing with NPM

```
git clone https://github.com/Nikko89/MovieFinder-RN-Expo- *repo_name*
cd *repo_name*
npm install
```

The project needs a valid TMDB API KEY to work. You can get one for free at https://www.themoviedb.org/, then create "app.json" in root and copy the below code into it, then change extra -> API_KEY to match your key.

```
{
  "expo": {
    "name": "Movie Find",
    "slug": "client",
    "privacy": "public",
    "sdkVersion": "32.0.0",
    "platforms": ["ios", "android"],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "extra": {
      "API_KEY": "your API KEY here as a string"
    }
  }
}

```

## Boot it!

Either

```
npm start
```

Or

```
expo start
```

From the project folder.

If you are using iOS and have XCode you can simply open a simulator, else you will have to download the expo app on your smartphone device and proceed to scan the QR code that will show up in the terminal window where you typed the last command.
