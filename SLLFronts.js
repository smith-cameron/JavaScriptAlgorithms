class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }


    // addFront(value){
    //     newNode = newNode(value);
    //     newNode.next = this.head;
    //     this.head = newNode;
    //     return this;
    // }
    // removeFront(){

    // }
    // frontValue(){

    // }
}
var nodeA = new Node(10);
var nodeB = new Node(17);
var nodeC = new Node(4);
var nodeD = new Node(93);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = null;

console.log(nodeA);

// class SLL{
//     constructor(head){

//     }
