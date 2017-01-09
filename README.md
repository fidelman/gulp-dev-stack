Front-end development stack used at [Actum](https://www.actum.cz) to create beautiful things.

# Summary
* [Features](#features)
* [Getting started](#getting-started)
* [Project structure](#project-structure)
* [Naming conventions](#naming-conventions)
* [Workflow](#workflow)
* [Troubleshooting](#troubleshooting)

## Features

  | Pre-processing | Quality control | Post-processing
------------ | ------------- | ------------- | -------------
**CSS** | [SASS](https://github.com/dlmanning/gulp-sass) | Stylelint | **[PostCSS](https://github.com/postcss/postcss)** ([autoprefixer](https://github.com/postcss/autoprefixer),  [cssnano](https://github.com/ben-eb/cssnano)) <br>[Sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
**JavaScript** | Babel | [ESLint](http://eslint.org) | [Browserify](http://browserify.org) <br>[Watchify](https://github.com/substack/watchify) <br>[Uglify](https://github.com/terinjokes/gulp-uglify)
**SVG** | | | svgmin <br>[SVGStore](https://github.com/w0rm/gulp-svgstore)
**HTML** | [Nunjucks](https://github.com/sindresorhus/gulp-nunjucks) | | [Prettify](https://github.com/jonschlinkert/gulp-prettify)

- **CSS:**
    - [SASS](https://github.com/dlmanning/gulp-sass)
    - [Postcss](https://github.com/postcss/postcss) ([autoprefixer](https://github.com/postcss/autoprefixer), [cssnano](https://github.com/ben-eb/cssnano))
    - [Sourcemaps](https://github.com/floridoo/gulp-sourcemaps)
- **JS:**
    - [Eslint](http://eslint.org)
    - [Browserify](http://browserify.org) w/ [Watchify](https://github.com/substack/watchify) for faster rebuilds
    - [Babel](http://babeljs.io)
    - [Uglify](https://github.com/terinjokes/gulp-uglify)
- **HTML:**
    - [Nunjucks](https://github.com/sindresorhus/gulp-nunjucks) for static templating
    - [Prettify](https://github.com/jonschlinkert/gulp-prettify)
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
**NOTE:** If you have already installed Node and Gulp on your machine, you may skip this step.

### Setup
1. Clone the repository: `git clone https://github.com/actum/gulp-dev-stack ./PROJECT_NAME`

2. Install package dependencies with `npm install` under the root of your `PROJECT_NAME` folder.

3. **Configure the project**. Do not forget to change the respective keys in `package.json` according to your project's info, and setup **a unique listening port** in `./gulp/config.js`.

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

## Workflow
### Development
To start your development process, run `gulp --dev` in the terminal. This will prepare the project for the work and launch watch tasks to update the files on-the-fly as you work. A `--dev` flag will notify the automatization tasks to add or omit certain steps (i.e. your JavaScript files are not uglified while in development mode).

### Remove built targets
If you want to revert back to a fresh state without built files, run

```sh
gulp clean
```

It will remove the `dist/` folder and all built targets in `src/`.

### Production build
To prepare production-ready files, run `gulp` and grab built assets from `dist` folder.

## Troubleshooting
Common errors  |
------------ |
**Error:**  "*Local gulp not found in ...*" when running `gulp`. |
**Solution:** Make sure you run `npm install` after cloning the repository. |

When you have encountered a bug, or have a useful suggestion how to improve this development stack, do not hesitate to [Create a new issue]().
