class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}
class SLL{
    constructor(head){
        this.head = null;
    }
    addFront(value){
        newNode = newNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
    frontValue(){
        if(this.head){
            return this.head.value;
        }else{
            return null;
        }
    }
    appendNode(node){
        if(this.head){
            var runner = this.head;
            while (runner.next !== null){
                runner = runner.next;
            }
            runner.next = node;
        }else{
            this.head = node;
        }
        return this;
    }
    removeFront(){
        if(this.head.next){
            this.head = this.head.next;
            return this;
        }else{
            return null;
        }
    }
}

var myLinkedList = new SLL();
var myArr = [45,2,87,45,9,5,34,23,98,1];
for(var i = 0; i< myArr.length; i++){
    myLinkedList.appendNode(new Node(myArr[i]));
}
console.log(myLinkedList.removeFront());
