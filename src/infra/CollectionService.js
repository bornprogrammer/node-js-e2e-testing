import UtilHelper from "./helpers/UtilHelper.js";

class CollectionService {

    collection;

    constructor(collection) {
        this.collection = collection;
    }

    firstItem() {
        if (this.isDataValid()) {
            return this.collection[0];
        }
    }

    lastItem() {
        if (this.isDataValid()) {
            const length = this.collection.length;
            return this.collection[length - 1];
        }
    }

    random() {
        if (this.isDataValid()) {
            const itemsLength = this.collection.length;
            const randomIndex = Math.floor((Math.random() * itemsLength) + 1);
            return this.collection[randomIndex - 1];
        }
    }

    /**
     * number of items from collection from index 0
     * @param {*} itemLength 
     * @returns 
     */
    numberOfItems(itemLength) {
        if (this.isDataValid()) {
            return this.collection.slice(0, itemLength);
        }
    }

    /**
     * number of items from collection from index 0
     * @param {*} itemLength 
     * @returns 
     */
    byRandomNumberOfItems(itemLength) {
        if (this.isDataValid()) {
            const randomNumber = UtilHelper.generateRandomNumber(1, (this.collection.length - itemLength));
            const slicedItems = this.collection.slice(randomNumber - 1, ((randomNumber - 1) + itemLength));
            return slicedItems;
        }
    }

    selectRandomId(keyName = "id") {
        const randomItem = this.random();
        return randomItem[keyName];
    }

    selectIdByLabel(labelValue, labelKey = "label", keyName = "id") {
        const item = this.numberOfItemByValue(1, labelKey, labelValue);
        let selectedId = "no-id-found";
        if (item) {
            selectedId = item[0][keyName];
        }
        return selectedId;
    }

    getChildCollection(labelValue, collectionKeyName, labelKey = "label") {
        const item = this.numberOfItemByValue(1, labelKey, labelValue);
        if (item) {
            const collection = item[0][collectionKeyName];
            return new CollectionService(collection);
        }
        return new CollectionService([]);
    }

    getChildCollectionRandomly(collectionKeyName) {
        const item = this.random();
        if (item) {
            const collection = item[collectionKeyName];
            return new CollectionService(collection);
        }
        return new CollectionService([]);
    }

    /**
     * number of items by length
     * @param {*} itemLength 
     * @param {*} keyName "workflow_name"
     * @param {*} value ["workflow1","workflow2","workflow3"]
     * @returns 
     */
    numberOfItemByValue(itemLength, keyName, value) {
        const items = [];
        for (let index = 0; index < itemLength; index++) {
            items.push(this.byValue(keyName, value[index]));
        }
        return items;
    }

    byValue(keyName, value) {
        if (this.isDataValid()) {
            const item = this.collection.find((item) => {
                return item[keyName] === value;
            });
            return item;
        }
    }

    extractOutByKeyName(keyName = "id") {
        if (this.isDataValid()) {
            return this.collection.map((mappedField) => mappedField[keyName]);
        }
        return null;
    }
    isDataValid() {
        return this.collection && this.collection instanceof Array && this.collection.length > 0;
    }
}

export default (collection) => new CollectionService(collection); 