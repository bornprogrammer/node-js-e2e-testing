import CollectionService from "./CollectionService.js";

class HttpResponseService {
    statusCode;
    data;
    url;
    method
    payload
    errorMessage
    isError
    collectionService;
    constructor(axiosResponse, callback) {
        if (axiosResponse?.isError) {
            this.isError = true;
            this.setErrorData(axiosResponse);
        } else {
            this.isError = false;
            this.setData(axiosResponse, callback);
        }
        this.collectionService = CollectionService(this.data);
    }

    getData() {
        return this.data;
    }

    getCollection() {
        return this.collectionService;
    }

    setErrorData(axiosResponse) {
        axiosResponse = axiosResponse.response;
        this.errorMessage = axiosResponse.data.message;
        this.setData(axiosResponse);
    }

    setData(axiosResponse, callback) {
        this.statusCode = axiosResponse.status;
        this.data = callback ? callback(axiosResponse.data) : axiosResponse.data.result;
        this.url = axiosResponse.config.url;
        this.method = axiosResponse.config.method;
        const params = new URLSearchParams(axiosResponse.config.data);
        this.payload = Object.fromEntries(Array.from(params.keys()).map(k => [k, params.getAll(k).length === 1 ? params.get(k) : params.getAll(k)]));
    }
}

export default (axiosResponse, callback) => new HttpResponseService(axiosResponse, callback);