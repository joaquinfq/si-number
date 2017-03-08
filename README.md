#si-number [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Formats numbers using SI prefixes.

## Options

You can pass a configuration object as second parameter with the following keys:

* **decimal:** Symbol to use for decimal point (default: `.`).
* **precision:** Number of decimal digits to show (default: `2`).
* **separator:** Separator between digits and prefix (default: empty string).
* **thousands:** It `true`, only uses prefixes that are multiples of 1000.

## Usage

[![npm install si-number](https://nodei.co/npm/si-number.png?mini=true)](https://npmjs.org/package/si-number/)

```js
const siNumber = require('si-number');

// 2.5 centimeters, without thousands scale.
console.log(
    '%sm',
    siNumber(
        0.025,
        {
            precision : 1
        }
    )
); // 2.5cm
// 2.5 centimeters, using thousands scale.
console.log(
    '%sm',
    siNumber(
        0.025,
        {
            decimal   : ',',
            precision : 1,
            thousands : true
        }
    )
); // 25,0mm
```
