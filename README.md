# ionic-app
The cross-platform client application for OpenBioMaps to support data collection on the field

## Prerequisite
Make sure you have a recent Node.js installation on your computer (Node.js 6 or greater) along with Cordova and the Ionic CLI.

You can check to current Node.js version on your machine by typing `node --version` in the terminal.

To install Ionic and Cordova use the following command in your terminal.
`npm install -g ionic cordova`

For more info see the [Ionic installation guide][ionic-install].

## Build and Run
To build and run the code locally you need to create a cordova folder. You can do it by running the following commands in the app project folder.
```
npm install
ionic state restore
```

After this you can run the app locally in the browser using the `ionic serve` command. You can run the app in an emulator using the `ionic emulate` or on a device using the `ionic run` commands.

[ionic-install]: "http://ionicframework.com/docs/v2/setup/installation/"
