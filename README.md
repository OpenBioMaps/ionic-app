![build status][build-status]

# ionic-app
The cross-platform client application for OpenBioMaps to support data collection on the field

## Prerequisite
Make sure you have a recent Node.js installation on your computer (Node.js 6 or greater) along with Cordova and the Ionic CLI.

You can check the current Node.js version on your machine by typing `node --version` in the terminal.

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

## CORS
When run in a browser with `ionic serve` you will most probably run into issues with HTTP access control, since your origin is localhost, and if you want to access data from the web than your origin will not match with your target. There are several ways to handle this issue, which the ionic team covers in [this blog post][cors-ionic].

The easiest way to solve the issue however, is to allow cross-origin HTTP requests in your browser. If you are using chrome there is a [plugin][cors-toggle] with which you can toggle it on and off.

[ionic-install]: http://ionicframework.com/docs/v2/setup/installation/
[build-status]: https://travis-ci.org/OpenBioMaps/ionic-app.svg?branch=master
[cors-ionic]: http://blog.ionic.io/handling-cors-issues-in-ionic/
[cors-toggle]: https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh?hl=en
