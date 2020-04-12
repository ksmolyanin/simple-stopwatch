# simplest-stopwatch

Yet another ... but very lightweight (~500 bytes minified) and very simple (surely dependency free) stopwatch to measure execution times.

It is as simple as `console.time()` and `console.endTime()` with the following differences:
- it doesn't print but return the time;
- it doesn't require you to give the label but returns unique ID for you.

It also
- can round to integer (or not round) the result;
- can return milliseconds or seconds;
- can automatically clean unused starting points.

And it
- doesn't include output mechanism (you can just `console.log()` it or use any sofisticated logger);
- doesn't include formatting mechanism (you are free to use any on your choice);

## Usage

### Install

    npm install --save simple-stopwatch-js

### Parameters



### Examples



## License

**MIT**
