class ConveyorBelt {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem() {
        return this.items.shift();
    }
}
// Example usage:
const conveyorBelt = new ConveyorBelt();
conveyorBelt.addItem("red bag");
conveyorBelt.addItem("suitacase");
console.log("Items on the conveyor belt:", conveyorBelt.items);
const removedItem = conveyorBelt.removeItem();
console.log("Removed item:", removedItem);
console.log("Updated items on the conveyor belt:", conveyorBelt.items);