### webpack-react 
example use antd, you can remove it.

1. css-module
2. hot-reload
3. split code such as react,react-dom.. in vender.
4. uglify when dist 
5. source-map when dev
6. es6 stage-0

```js
npm install
```
#### dev

```js
npm run start
```
visit [localhost:3000](http://localhost:3000) 

#### build
```js
npm run dist
```

### tree for file

```c
.
├── README.md
├── config // webpack.config
├── dist // product dist
├── hot-patch.js // for hot-reload
├── node_modules 
├── package.json
└── src 
    ├── asserts // images... 
    ├── components 
    ├── index.html
    ├── main.js
    ├── routes // async components for route
    └── style 
        ├── config.less // set global parameter
        └── index.less

```
### how to hot-reload

hot-path.js use in the ./src/main.js for hot-reload css-module and react
(it implement by a hack way,but useful)


```js
import hotPatch from '../hot-patch';
// for hot reload
hotPatch(module);
```

#### JavaScript
es6 stage-0 

#### CSS
CSS-module

### Use:
antd,React,react-route,redux,redux-saga