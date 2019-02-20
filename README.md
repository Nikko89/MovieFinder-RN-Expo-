# MovieFinder-RN-Expo-

A project to play with React Native and the Expo SDK.

## Tech Stack

React Native, Redux, Expo, tMDB API.

## What It Does

You can search for movies, and add or delete them to/from favorites.

## Cloning and Installing with NPM


```
git clone https://github.com/Nikko89/MovieFinder-RN-Expo- *repo_name*
cd *repo_name*
npm install 
```

The project needs a valid TMDB API KEY to work. You can get one for free at https://www.themoviedb.org/, then open `package.json` and append this key to the expo object:

```
"extra": {
      "TMDB_API_KEY": "Your API key here"
    }
```




Now either

```
npm start
```
Or
```
expo start
```

If you are using iOS and have XCode you can simply open a simulator, else you will have to download the expo app on your smartphone device and proceed to scan the QR code that will show up in the terminal. 