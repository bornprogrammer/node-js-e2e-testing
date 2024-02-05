import NodeCache from "node-cache";

class NodeCacheService {

    cache;
    constructor() {
        this.cache = new NodeCache();
    }

    set(key, val, ttl) {
        this.cache.set(key, val, ttl);
    }

    get(key) {
        return this.cache.get(key);
    }

}

export default new NodeCacheService();