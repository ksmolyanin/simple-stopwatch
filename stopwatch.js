// It will be cleaned even if user doesn't call timeStop() with `clear` option
const startPoints = new WeakMap();

/**
 * Begin duration measure. Get starting point marker.
 * @return {Object}
 */
export function timeStart() {
    const key = Object.create(null); // using this as a unique ID
    startPoints.set(key, performance.now());
    return key;
}

/**
 * Get time since the starting point (defined by the key param).
 * @param {Symbol} key value from {@link timeStart}
 * @param {Object} [options]
 * @property {string} [options.unit='ms'] "ms" - milliseconds (default) or "s" - seconds
 * @property {boolean} [options.round=false] if `true` then round result to integer
 * @property {boolean} [options.clear=true] if `true` (default) then remove the starting point
 * @return {number}
 */
export function timeStop(
    key,
    { unit = 'ms', round = false, clear = true } = {}
) {
    const stopPoint = performance.now();

    if (unit !== 'ms' && unit !== 's') {
        throw new Error(`Unknown unit "${unit}"! Use "ms" or "s".`);
    }

    const startPoint = startPoints.get(key);

    if (startPoint === undefined) {
        return undefined;
    }

    if (clear) {
        startPoints.delete(key);
    }

    const time = stopPoint - startPoint; // ms
    const timeInUnits = unit === 's' ? time / 1000 : time;

    return round ? Math.round(timeInUnits) : timeInUnits;
}

const stopwatch = {
    start: timeStart,
    stop: timeStop,
};

export default stopwatch;
