import Expo from 'expo';

const checkEnv = () => {
  if (Expo.Constants.manifest) {
    const { manifest } = Expo.Constants;
    console.log(manifest);
    return manifest;
  }
  return 'undefined manifest, PROBLEM';
};

export default checkEnv;
