const weakMap = new WeakMap();

export { weakMap };


export function queryAPI(endpoint) {

    if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
        throw new Error('Invalid endpoint');
    }

    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }

    const currentCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, currentCount);

    if (currentCount >= 5) {
        throw new Error('Endpoint load is high');
    }

    console.log(`Querying API for ${endpoint.name} over ${endpoint.protocol}`);
}
