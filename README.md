# MovieFinder-RN-Expo-

A project to play with React Native and the Expo SDK.

## What It Does

You can search for movies, and add or delete them to and from favorites.
Search options: Keyword, genre, date, or genre plus date.

## Tech Stack

- [React Native](https://facebook.github.io/react-native/)
- [Redux](https://redux.js.org/)
- [Expo](https://expo.io/)
- [theMovieDB API](https://www.themoviedb.org/)

Helpers:

- [ES Lint](https://eslint.org/)
- [Airbnb JS styling guide](https://github.com/airbnb/javascript)

## To Do

Fix Styling & cross-device Responsiveness, add dynamic navigation (pagination), destructure lengthy components into smaller ones, add proper unit testing (probably going to be snapshots), add needed platform specific styles in stylesheets.

## Notes

Because of the last point, i suggest trying the app on medium to large screen sized devices. If you try it on a small device, a giant punch will break the screen and catch you in the eye. Please wait the fix for it.

## Screenshots (iPhone 6s on XDE simulator, not yet updated to last version)

<table>
<tr><td>
<img width="200" alt="Screenshot 2019-03-13 at 15 00 55" src="https://user-images.githubusercontent.com/30399733/54284786-e1fc4100-45a0-11e9-8dcd-5582f420a711.png"></td><td><img width="200" alt="Screenshot 2019-03-13 at 14 28 44" src="https://user-images.githubusercontent.com/30399733/54283347-15899c00-459e-11e9-8118-0610a15d6afa.png"></td><td><img width="200" alt="Screenshot 2019-03-13 at 14 13 33" src="https://user-images.githubusercontent.com/30399733/54283334-128eab80-459e-11e9-98e9-fd73df384160.png"></td>
</tr>
<tr><td>
<img width="200" alt="Screenshot 2019-03-13 at 14 28 25" src="https://user-images.githubusercontent.com/30399733/54283336-13274200-459e-11e9-8abc-aca84c6f906c.png"></td>
<td>
<img width="200" alt="Screenshot 2019-03-13 at 14 14 10" src="https://user-images.githubusercontent.com/30399733/54283335-128eab80-459e-11e9-81b9-0ffd6d419645.png"></td><td><img width="200" alt="Screenshot 2019-03-13 at 14 31 44" src="https://user-images.githubusercontent.com/30399733/54283349-15899c00-459e-11e9-9289-a696dafc2c86.png">
</td></tr>
</table>

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
