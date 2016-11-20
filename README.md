### React boilerplate

Simple React boilerplate with webpack. Features:
- Webpack development and production tasks
- SASS loader
- React Hot loader
- React Router
- Redux
- Linting with Airbnb eslint preset

### Installation
Step 1: If you haven't installed webpack already, install it first, otherwise go to step 2.

```sh
$ npm install webpack -g
```
Step 2: install the node modules.
```sh
$ npm install
```
### Tasks

#### Development:
Start development task:

```sh
$ npm start
```
and go to **[http://localhost:8080/](http://localhost:8080/)**.

for configuration see [./webpack.config.js](./webpack.config.js)


#### Production:
Start production task:

```sh
$ npm run deploy
```
for configuration see [./webpack-production.config.js](./webpack-production.config.js)


#### To do
- sass linting
- server side rendering
