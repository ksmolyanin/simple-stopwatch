[![npm version](https://badge.fury.io/js/simplest-stopwatch.svg)](https://badge.fury.io/js/simplest-stopwatch)

# simplest-stopwatch

Yet another ... but very lightweight (~500 bytes minified) and very simple (surely dependency free) stopwatch to measure execution times.

It is as simple as `console.time()` and `console.endTime()` with the following differences:

-   it doesn't print but return the time;
-   it doesn't require you to give the label but returns unique key for you.

It also

-   can round (or not round) the result to integer;
-   can return milliseconds or seconds.

And it

-   doesn't include output mechanism (you can just `console.log()` it or use any sofisticated logger);
-   doesn't include formatting mechanism (you can use any one of your choice).

## Browsers supported

All modern (Chrome, Firefox, Safari). **IE isn't supported.**

_Note: It uses `performance.now()` and `WeakMap`._

## Install

    npm install --save simplest-stopwatch

## Usage

`import { timeStart, timeStop } from 'simplest-stopwatch';`

or

`import stopwatch from 'simplest-stopwatch';` |

### Example

```
const startPoint = timeStart();

// some code here

const time = timeStop(startPoint, { unit: 's', round: true });

```

### API

#### `timeStart()`

_Also available as `stopwatch.start()`._

Begin duration measure. Returns starting point marker `key` that should be passed later to `timeStop()`.

#### `timeStop(key, { unit = 'ms', round = false, clear = true })`

_Also available as `stopwatch.stop()`._

Get time since the starting point (defined by the `key` param).

##### Params

| Param         | Type    | Description                                                 |
| ------------- | ------- | ----------------------------------------------------------- |
| key           | Object  | value returned by `timeStart()`                             |
| options.unit  | string  | "ms" - milliseconds (default) or "s" - seconds              |
| options.round | boolean | if `true` then round result to integer (default is `false`) |
| options.clear | boolean | if `true` (default) then remove the starting point. Setting it to `false` allows call `timeStop()` more then one time.          |

## License

**MIT**
