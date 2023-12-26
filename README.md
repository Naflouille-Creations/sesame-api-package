
# Sesame API Package

This package was created by Naflouille Creations.

## Instructions for use

**Documentation will be available on SesAPI shortly.*
### Installing the package
To install this package, you first need to have NodeJS and NPM installed.
Then you can install the package.
```
npm install sesame-api
```
To use the Sesame API, you must first define sesame in your NodeJS script
```javascript
const sesame = require("sesame-api");
```
Once this is done, you can use the API functions to search the Sesame database.


## Usage/Examples

```javascript
const sesame = require("sesame-api");
let data = sesame.search.SearchInDatabase("Rithy", "users");
console.log(data);
```
The `data` variable normally contains :
```js
[
  {
    name: 'Rithy',
    description: 'A guy.',
    links: [...],
    about: {
      isStaff: false,
      isModder: false,
      isUCP: false,
      isContrib: false,
      isSesame: true
    },
    sesameID: 'usr-RTY-bDEO1zR7Gx',
    templateImage: 'https://github.com/rithyn/rithy-archive/blob/main/pictures/ucp/rithy.png?raw=true'
  }
]
```
The search function is normally `sesame.search.SearchInDatabase(KEYWORDS, TYPE);`

`TYPE` can be `"users"`, `"ships"`, `"mods"`, `"codes"` and `"communities"`. 

`KEYWORDS` is your keyword.
# Links
[![Sesame](https://img.shields.io/badge/Sesame-red.svg?logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTEyLjAwMDAwMHB0IiBoZWlnaHQ9IjUxMi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTIxNzUgNDY1NSBjLTE4IC0xNyAtMjUgLTM1IC0yNSAtNjAgMCAtMjIgOTYgLTMxNSAyMzYgLTcxOCAxMzAKLTM3NSAzODQgLTExMTggNTY0IC0xNjUyIDQyMyAtMTI1MyA1NjIgLTE2NDEgNjAxIC0xNjc3IGwyOSAtMjggNDcxIDAgNDcxIDAKMjkgMjkgYzIwIDIwIDI5IDM5IDI5IDYxIDAgMTcgLTcyIDIyMyAtMTU5IDQ1OCAtMTQyMCAzODA4IC0xMzI3IDM1NjIgLTEzNTMKMzU4OSBsLTIxIDIzIC00MjQgMCAtNDI0IDAgLTI0IC0yNXoiLz4KPHBhdGggZD0iTTE2MzAgMzM3NyBjLTIyIC0xMSAtNTcgLTk5IC0yNjEgLTY0MiAtNjYyIC0xNzY5IC03NzkgLTIwOTEgLTc3OQotMjEyOCAwIC0yOCA3IC00NCAyNiAtNjIgbDI3IC0yNSA0NjMgMCA0NjMgMCAyNSAyMyBjMzAgMjYgMTcxIDQxNCA0MTUgMTE0OQpsMTUzIDQ1OCAtMTk0IDU5MiBjLTIwOSA2NDMgLTIxMSA2NDggLTI4MCA2NDggLTE4IDAgLTQ0IC02IC01OCAtMTN6Ii8+CjwvZz4KPC9zdmc+Cg==)](https://naflouille-creations.com/sesame)

[![Sesame API Package](https://img.shields.io/npm/v/sesame-api.svg?logo=npm)](https://npmjs.com/sesame-api)



# Authors

[@naflouille](https://github.com/w0lfan)

[@rithy](https://github.com/rithyn)
