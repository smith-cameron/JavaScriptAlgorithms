//'use strict';
class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    addNode(val) {
        var newNode = new Node(val);
        if(this.root) {
            var runner = this.root;
            while(runner) {
                if(newNode.val < runner.val) {
                    if(runner.left){
                        runner = runner.left;
                    } else {
                        runner.left = newNode;
                        runner = null;
                        return this;
                    }
                } else if(newNode.val > runner.val){
                    if(runner.right){
                        runner = runner.right;
                    } else {
                        runner.right = newNode;
                        runner = null;
                        return this;
                    }
                }else{
                    newNode.left = runner.left;
                    newNode.right = runner.right;
                    runner.left = newNode;
                    runner.right = null;
                    return this;
                }
            }
        }
        this.root = newNode;
        return this;
    }
    contains(val){
        var runner = this.root;
        while(runner) {
            if(val === runner.val) {
                return true;
            } else if(val > runner.val){
                if(!runner.right){
                    return false;
                }
                runner = runner.right;
            }else{
                if(!runner.left){
                    return false;
                }
                runner = runner.left;
            }
        }
        return false;
    }
    min(){
        var runner = this.root;
        var min = this.root.val;
        while(runner.left) {
            if(runner.left.val < min) {
                min = runner.left.val;
            }
            runner = runner.left;
        }
        return min;
    }
    max(){
        var runner = this.root;
        var max = this.root.val;
        while(runner.right) {
            if(runner.right.val > max) {
                max = runner.right.val;
            }
            runner = runner.right;
        }
        return max;
    }
    size(Node){
        var runner = this.root;
        var count = 0;
        //var count =+ 1;
        if(!Node){
            return count;
        }
        console.log(Node.val);
        count = count +1;//confused as to why i can get each value but count only returns as 1
        this.size(Node.left);
        this.size(Node.right);
        return count;
    }
    isEmpty(){
        if(this.root) {
            console.log("This Tree Has Some Stuff");
            return false;
        }else{
            console.log("This Tree Is Empty");
            return true;
        }
    }
}
var myBST = new BST();
myBST.addNode(7).addNode(7).addNode(3).addNode(3).addNode(14).addNode(25).addNode(1).addNode(9);
console.log(myBST.size(myBST.root));



//console.log(myBST.isEmpty());