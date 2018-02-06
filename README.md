Front-end development stack used at [Actum](https://www.actum.cz) to create beautiful things.

# Summary
* [Features](#features)
* [Getting started](#getting-started)
* [Project structure](#project-structure)
* [Naming conventions](#naming-conventions)
* [Workflow](#workflow)
* [Debugging with Visual Studio Code Debugger for Chrome](#debugging-with-visual-studio-code-debugger-for-chrome)
* [Troubleshooting](#troubleshooting)


## Features

| 🛠              | Preprocessing                            | Linting                           | Postprocessing                           |
| --------------- | ---------------------------------------- | --------------------------------- | ---------------------------------------- |
| **CSS**         | [SASS](https://github.com/dlmanning/gulp-sass) | [Stylelint](http://stylelint.io/) | [PostCSS](https://github.com/postcss/postcss) ([autoprefixer](https://github.com/postcss/autoprefixer),  [cssnano](https://github.com/ben-eb/cssnano)) <br>[Sourcemaps](https://github.com/floridoo/gulp-sourcemaps) |
| **JavaScript**  | [Babel](http://babeljs.io/)              | [ESLint](http://eslint.org)       | [Browserify](http://browserify.org) <br>[Watchify](https://github.com/substack/watchify) <br>[Uglify](https://github.com/terinjokes/gulp-uglify) <br>[Sourcemaps](https://github.com/floridoo/gulp-sourcemaps) |
| **SVG**         |                                          |                                   | [SVGStore](https://github.com/w0rm/gulp-svgstore) <br>[svgmin](https://github.com/ben-eb/gulp-svgmin) |
| **Images**      |                                          |                                   | [imagemin](https://github.com/sindresorhus/gulp-imagemin) |
| **Favicons**    |                                          |                                   | [gulp-real-favicon](https://github.com/RealFaviconGenerator/gulp-real-favicon) |
| **HTML**        | [Nunjucks](https://github.com/sindresorhus/gulp-nunjucks) |                                   | [Prettify](https://github.com/jonschlinkert/gulp-prettify) |
| **Dev server**  |                                          |                                   | [browser-sync](https://browsersync.io)   |
| **API mocking** |                                          |                                   | [json-server](https://github.com/typicode/json-server) |

- **Icons:**
    - [SVGStore](https://github.com/w0rm/gulp-svgstore) combines SVG files into one with `<symbol>` elements
- **Development mode:**
    - File Watching and Live Reloading with [BrowserSync](http://www.browsersync.io/)
    - Autogenerated index of HTML templates
- **Production mode**
    - JS and CSS are uglified and minified
    - Local production server for testing
- **Deployment**
    - `todo`

## Getting started
### Preparations
1. This development stack uses [Node](https://nodejs.org), so make sure you have it installed.
2. Install [Gulp](http://gulpjs.com) globally:
```bash
npm install -g gulp
```

### Setup
1. Clone the repository: `git clone https://github.com/actum/gulp-dev-stack ./PROJECT_NAME`

2. Install package dependencies with `npm install` under the root of your `PROJECT_NAME` folder.

3. **Configure the project**. Do not forget to change the respective keys in `package.json` according to your project’s info, and setup **a unique listening port** in `./gulp/config.js`.

## Project structure
Following a certain file and folder structure keeps development, maintenance and debugging processes much easier when switching from project to project based on the same development stack.
* ### dist/

    Build (production) folder generated and changed automatically by various Gulp tasks. Contains production-ready compiled CSS (`dist/css`), JavaScript (`dist/js`), graphics (`dist/gfx`) and HTML. Should not be edited manually.

* ### gulp/
    * **tasks/**
        The list of Gulp tasks. Each task is responsible for handling automation for different file types (i.e. `styles.js` compiles SCSS to CSS, and `serve.js` launches a local server for development). Do not edit unless you know what you are doing.

    * **config.js**
        Global Gulp configuration, consisting of declaring *environment* and *folder/file paths*. While we would not recommend to change the project structure references, you may and **should** customize such keys as `PORT` or `TITLE`, which are unique for each project.

    * **environment.js**
        Determines current working environment (`DEVELOPMENT` or `PRODUCTION`).

* ### src/
    Development folder. This is where all the action happens.
    * **api/**
        * **api.js** Entry point of dummy data for api server.
    * **app/** JavaScript source files.
        * **components/** React-driven components.
        * **modules/** Vanilla JS classes.
        * **store/** Redux store.
        * **utilities/** Small helpers for everyday routine.
        * **app.js** Entry point for JS bundling.
        * **factory.js** Functions for initializing one instance of module on multiple containers.
        * **init.js** Functions for initializing one instance of module per one container.
        * **render.js** Functions for initilizing React components.
    * **gfx/**
        * **svg/**
            * **sprites/** Folder for SVG sprites, where each nested folder represents a sprite name, and containing files - the icons bundled into that sprite.
            * **example.svg** Single SVG icons, optimized and outputted individually for direct usage.
        * **image.png**
    * **styles/**
        * **base/** Base components used by Styleguide.
        * **bootstrap/** Bootstrap overrides.
        * **components/** Custom components.
        * **critical.scss** Critical CSS
        * **main.scss** Entry point for SCSS compiling.
        * **variables.scss** Custom variables
    * **tpl/**
        * **components/**
        * **helpers/**
        * **layouts/**
        * **PAGE.nunj**
          Template page written in [Nunjucks](https://github.com/sindresorhus/gulp-nunjucks) and compiled to `dist/PAGE.html`.

* ### / (root files)

  A brief summary of dev stack root files purpose.

  - #### .babelrc

    [Babel](https://babeljs.io/) configuration. Primarily used to specify presets for plugins for JavaScript compiling.

    [Further info](http://code.fitness/post/2015/11/babel-setting-up-.babelrc-for-babel-6.html)

  - #### .editorconfig

    A definition of coding styles for different code editors and IDEs. You can specify what configuration (indent size, charset, trim whitespaces, ...) should be used for what files.

    [Further info](http://editorconfig.org/)

  - #### .eslintrc.js

    [Eslint](https://eslint.org/) configuration. Primarily used to specify and configure rules of JavaScript linting.

    [Further info](https://eslint.org/docs/user-guide/configuring)

  - #### .gitattributes

    Path-specific settings used by [Git](https://git-scm.com/). Settings that Git applies to certain subdirectories or subsets of files - for example EOL (End Of Line) setting.

    [Further info](https://git-scm.com/docs/gitattributes)

  - #### .gitignore

    Contains patterns that are matched against file names in your [Git](https://git-scm.com/) repository to determine whether or not they should be ignored (commited).

    [Further info](https://git-scm.com/docs/gitignore)

  - #### .stylelintrc

    [Stylelint](https://stylelint.io/) configuration. Primarily used to specify and configure rules of CSS (SCSS) linting.

    [Further info](https://stylelint.io/user-guide/configuration/)

  - #### circle.yml

    [CircleCI](https://circleci.com/) configuration. How to set up and test your project.

    [Further info](http://circleci.com/docs/1.0/configuration/)

  - #### CONTRIBUTING.md

    Project workflow guideline. How to create branches, write commits or assign pull requests.

    [Further info](https://github.com/blog/1184-contributing-guidelines)

  - #### gulpfile.js

    [Gulp](https://gulpjs.com/) configuration and definition of automation tasks.

    [Further info](https://www.sitepoint.com/introduction-gulp-js/)

  - #### LICENSE

    Open source license of [Git](https://git-scm.com/) repository. It enables others to freely use, change and distribute the project in the repository.

    [Further info](https://help.github.com/articles/adding-a-license-to-a-repository/)

  - #### package-lock.json

    [NPM](https://www.npmjs.com/) manifest. Automatically generated with change of `node_modules` or `package.json` if working with NPM. Holds information about which versions of each dependency were installed in order to get consistent installs across machines.

    [Further info](https://docs.npmjs.com/files/package-lock.json)

  - #### package.json

    [NPM](https://www.npmjs.com/) packages specifics. It lists the packages (with their versions) your project depends on.

    [Further info](https://docs.npmjs.com/files/package.json)

  - #### README.md

    It's me!


  - #### yarn.lock

    [Yarn](https://yarnpkg.com/) manifest. Automatically generated with change of `node_modules` or `package.json` if working with Yarn. Holds information about which versions of each dependency were installed in order to get consistent installs across machines.

    [Further info](https://yarnpkg.com/lang/en/docs/yarn-lock/)

  ​

## Workflow
### Development
To start your development process, run `gulp --dev` in the terminal. This will prepare the project for the work and launch watch tasks to update the files on-the-fly as you work. A `--dev` flag will notify the automatization tasks to add or omit certain steps (i.e. your JavaScript files are not minified while in development mode).

#### API mock server
If you want to start also an API server, run `gulp --dev --api`. This server will run on different port which is defined in `gulp/config.js` as `API_PORT`.

### Remove built targets
If you want to revert back to a fresh state without built files, run

```sh
gulp clean
```

It will remove the `dist/` folder and all built targets in `src/`.

### Production build
To prepare production-ready files, run `gulp` and grab built assets from `dist` folder.

## Updates from devstack to your project
- create branch in your project’s repo (eg. `devstack-update`)
- add devstack as a remote to your project (`git remote add devstack git@github.com:actum/gulp-dev-stack.git`)
- fetch remote (`git fetch devstack`)
- merge branch from devstack remote to `devstack-update` (use `--allow-unrelated-histories` if necessary)
- merge your project’s `master` to `devstack-update`
- solve eventual conflicts
- push the `devstack-update` branch
- create PR from `devstack-update` to your `master`

## Debugging with Visual Studio Code Debugger for Chrome
Support for extension [Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug) is enabled! Big thanks to [roblourens](https://github.com/roblourens)
1. Install extension Debugger for Chrome
2. Run project in [development mode](#development)
3. Run Debugger for Chrome by F5 key (in Windows)

![visual studio code chrome debugger](https://user-images.githubusercontent.com/2188078/32879334-e32e8128-caa9-11e7-888f-9b5a920bcd06.PNG)

## Troubleshooting
| Common errors                            |      |
| ---------------------------------------- | ---- |
| **Error:**  "*Local gulp not found in ...*" when running `gulp`. |      |
| **Solution:** Make sure you run `npm install` after cloning the repository. |      |

When you have encountered a bug, or have a useful suggestion how to improve this development stack, do not hesitate to [Create a new issue](/actum/gulp-dev-stack/issues).
