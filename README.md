# Camera MiniApp

This is a quick demo of [react-native-camera](https://github.com/react-native-community/react-native-camera) native module.

**Requirements**

- **Electrode Native dev version (`1000.0.0`)**\
Some [necessary supporting code](https://github.com/electrode-io/electrode-native/pull/1603) has not been released yet, and will be released in `0.41.1` patch version once validated. So for now just need to stick to dev version of ern.

- **Manifest plugin configuration**\
A PR has been opened in the master manifest, adding support for the latest version of this plugin https://github.com/electrode-io/electrode-native-manifest/pull/172 \
This PR has to be merged to the master manifest, prior to running this app. Alternatively you can locally clone the manifest and checkout the branch that adds this plugin configuration, and set in `.ernrc` configuration the override manifest to point to your local clone.

This README will be updated to reflect requirement changes once ern 0.41.1 version is released and/or manifest plugin configuration PR is merged.

**Steps**

- `yarn install`
- `ern run-android`

You must grant camera permission to the application, otherwise it won't work. To do this just go to  `app info > permissions > camera.`


The application code is just a copy/paste of the [Basic example](https://github.com/react-native-community/react-native-camera/tree/master/examples/basic) of react-native-camera repository. Just had to get rid of [a section dynamically asking for the camera permission](https://github.com/react-native-community/react-native-camera/blob/master/examples/basic/App.js#L333-L338) because it result in yellow warning `Tried to use permissions API but the host Activity doesn't implement PermissionAwareActivity` and just makes the app keep spinning forever. We will have to look as to why this is causing this warning as our base miniapp activity is implementing `PermissionAwareActivity` in container ... so not clear why its failing, but its a bummer as we have to manually turn the camera permission in app settings.
