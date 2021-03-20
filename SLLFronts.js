class SLL{
    constructor(){
        this.head = null;
    }
    addFront(value){
        newNode = newNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    removeFront(){

    }
    frontValue(){

    }
}