import userSession from "../services/UserSession.js";
import BaseKlooApi from "./BaseKlooApi.js";
import nodeCacheService from "./NodeCacheService.js";

class BaseKlooCacheAbleApi extends BaseKlooApi {

    isCacheAble = true;
    ttl = 60; // in sec

    async get() {
        let result = null;
        if (this.isCacheAble) {
            const cacheKey = this.buildCacheKey();
            result = nodeCacheService.get(cacheKey);
            if (!result) {
                result = await this.httpService.get();
                nodeCacheService.set(cacheKey, result, this.ttl);
            }
        } else {
            result = nodeCacheService.get(cacheKey);
        }
        return result;
    }

    buildCacheKey() {
        const url = this.httpService.axiosConfig.url; // base url with path and query strings,
        const orgId = userSession.getLoggedInOrgId();
        let cacheKey = `${url}_${orgId}`;
        console.log(cacheKey);
        cacheKey = sha1(cacheKey);
        console.log(cacheKey);
        return cacheKey;
    }

}

export default BaseKlooCacheAbleApi;