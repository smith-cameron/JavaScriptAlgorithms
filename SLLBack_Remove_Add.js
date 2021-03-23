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
        return this;
    }
    maxValue(){
        if(this.head == null){
            console.log("List is empty.");
        }
        var runner = this.head;
        var max = this.head.value;
        while(runner !== null){
            if(runner.value > max){
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }
    minValue(){
        if(this.head == null){
            console.log("List is empty.");
        }
        var runner = this.head;
        var min = this.head.value;
        while(runner !== null){
            if(runner.value < min){
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
    avgValue(){
        if(this.head == null){
            console.log("List is empty.");
        }
        var runner = this.head;
        var counter = 0;
        var sum = 0;
        while(runner !== null){
            sum += runner.value;
            runner = runner.next;
            counter ++;
        }
        var avg = sum/counter;
        return avg;
    }
    backValue(){
        if(this.head == null){
            console.log("List is empty.");
        }
        var runner = this.head;
        while(runner.next.next != null){
            runner = runner.next;
        }
        return runner.next.value;
    }
    removeBack(){
        if(this.head == null){
            console.log("List is empty.");
        }
        var runner = this.head;
        while(runner.next.next != null){
            runner = runner.next;
        }
        runner.next = null;
        return this;
    }
    appendValue(value){
        var newNode = new Node(value);
        if(this.head){
            var runner = this.head;
            while (runner.next !== null){
                runner = runner.next;
            }
            runner.next = newNode;
            newNode.value = value;
        }else{
            this.head = newNode;
            newNode.value = value;
        }
        return this;
    }
}

var myLinkedList = new SLL();
var myArr = [45,2,22,9,5,34,6,23,40,1];
for(var i = 0; i< myArr.length; i++){
    myLinkedList.appendNode(new Node(myArr[i]));
}
myLinkedList.appendValue(4);
console.log(myLinkedList.printValues());
