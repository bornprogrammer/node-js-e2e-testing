
class BasePayloadBuilder {

    payload;

    constructor() {
        this.payload = {};
    }

    build() {
        return this.payload;
    }

}
export default BasePayloadBuilder;