class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SLL{
    constructor(head){
        this.head = null;
    }
    addFront(value){
        var newNode = new Node(value);
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
    contains(value) {
    	if(this.head == null){
            console.log("List is empty.");
        }else{
            var runner = this.head;
            var counter = 0;
            while(runner !== null){
                if(runner.value == value){
                    console.log(value+" is at node #"+counter);
                    return true;
                }
                runner = runner.next;
                counter ++;
            }
            console.log(value+" is not in the list.");
            return false;
        }
    }
    printValues(){
        if(this.head == null){
            console.log("List is empty.");
        }
        var runner = this.head;
        var counter = 0;
        while(runner !== null){
            if(counter < 1){
                console.log("Node "+counter+" is the head: Value of "+runner.value)
                runner = runner.next;
                counter ++;
            }else{
                console.log("Node "+counter+": Value of "+runner.value);
                runner = runner.next;
                counter++;
            }
        }
    }
}

var myLinkedList = new SLL();
//var myArr = [45,2,87,9,5,34,23,98,1];
// for(var i = 0; i< myArr.length; i++){
//     myLinkedList.appendNode(new Node(myArr[i]));
// }
myLinkedList.addFront(3);
myLinkedList.addFront(6);
myLinkedList.addFront(45);
myLinkedList.addFront(330);
myLinkedList.addFront(23);
myLinkedList.addFront(98);
myLinkedList.appendNode(new Node(9));
myLinkedList.appendNode(new Node(2));
myLinkedList.appendNode(new Node(5));
myLinkedList.appendNode(new Node(34));
//myLinkedList.printValues();
console.log(myLinkedList.contains(1));
