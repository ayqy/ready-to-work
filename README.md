# ready-to-work

A well-designed pomodoro tool, which focus on more effective time management.

## Features

-  doing> basic pomodoro features

-  planing> git work flow

-  planing> export weekly

-  planing> task schedule including progress notification

-  planing> statistics & analysis report

-  any other inspirational ideas

##  Development

```bash
npm run develop
```

## Packaging

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package for OSX, Windows and Linux
```
npm run pack
```

Or target a specific platform
```
npm run pack:mac
npm run pack:win
npm run pack:linux
```

## Tests

```
npm run test
```

## Contributing

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/ayqy/ready-to-work.git
# Go into the repository
cd ready-to-work
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## License

[MIT](LICENSE)
