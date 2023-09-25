status:do 2,6,8,9


1.insert node 

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert a node at a specified index using recursion
    insertrech(value, index) {
        this.head = this.insertrec(value, index, this.head);
    }


insertrec(value,index,node){
    //if index is zero then create the new node then add the node at beginning
if(index===0){
    const temp=new Node(value,node);
    this.size++;
    return temp;
}
//insert node using recursion
node.next=this.insertrec(value,index-1,node.next);
return node;
}
}
const Linkedlist = new linkedlist();

Linkedlist.insertrech(1, 0); // Insert 1 at index 0
Linkedlist.insertrech(2, 1); 
Linkedlist.insertrech(3, 2); 
Linkedlist.insertrech(4, 0); 

// Print the linked list
let current = Linkedlist.head;
while (current !== null) {
   console.log(current.value);
    current = current.next;
}



2.






3.merge two linkedlist

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertLast(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }

}
}
function merge(first,second){
let f=first.head;
let s=second.head;

const ans = new LinkedList();

while(f!==null&&s!==null){
    if(f.value<s.value){
        ans.insertLast(f.value);
        f=f.next;
    }else{
        ans.insertLast(s.value);
        s=s.next;
    }
}
while(f!==null){
    ans.insertLast(f.value);
    f=f.next;
}

while(s!==null){
    ans.insertLast(s.value);
    s=s.next;
}

return ans;

}

const firstlist = new LinkedList();
firstlist.insertLast(1);
firstlist.insertLast(3);
firstlist.insertLast(5);

const secondlist = new LinkedList();
secondlist.insertLast(2);
secondlist.insertLast(4);
secondlist.insertLast(6);

const mergedlist = merge(firstlist, secondlist);

// Print the merged list
let current = mergedlist.head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}

4.detect cycle

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function detectcycle(head){
let length=0;

    let slowpointer=head;
    let fastpointer=head;

while(fastpointer!==null&fastpointer.next!==null){
slowpointer=slowpointer.next;
fastpointer=fastpointer.next.next;
if(fastpointer===slowpointer){
    length=calculatecyclelength(slowpointer);
    break;
}
}

if (length === 0) {
    return null;
}

let firstpointer=head;
let secondpointer=head;

while(length>0){
    secondpointer=secondpointer.next;
    length--;
}

while(firstpointer!==secondpointer){
    firstpointer=firstpointer.next;
    secondpointer=secondpointer.next;
}
return secondpointer;
}

function calculatecyclelength(node) {
    let length = 1;
    let current = node.next;

    while (current !== node) {
        length++;
        current = current.next;
    }
    return length;
}

function createlinkedlistwithcycle() {
    const head = new ListNode(0);
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);

    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; 
    return head;
}

const headWithCycle = createlinkedlistwithcycle();
const cycleStartNode = detectcycle(headWithCycle);

console.log("Starting node of the cycle:", cycleStartNode.val);

5.bubblesort

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    bubbleSort() {
        let sorted = false;
        while (!sorted) {
            sorted = true;
            let current = this.head;
            let prev = null;

while(current&&current.next){
    if(current.value>current.next.value){
        sorted=false;

if(prev==null){
    //swap the heand and next node
    const temp=current.next;
   current.next=temp.next;
   temp.next=current;
   this.head=temp;
}else{
    //swap the non head nodes
    const temp=current.next;
    current.next=temp.next;
    temp.next=current;
    prev.next=temp;
}
    }
              prev = current;
              current = current.next;
      
    }
        }
    }
}
    const linkedList = new LinkedList();
    linkedList.push(5);
    linkedList.push(3);
    linkedList.push(8);
    linkedList.push(1);
    
    console.log("Before sorting:");
    linkedList.print(); // Output: 5 -> 3 -> 8 -> 1
    
    linkedList.bubbleSort();
    
    console.log("After sorting:");
    linkedList.print(); // Output: 1 -> 3 -> 5 -> 8

5.bubblesort 


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    bubbleSort() {
        let sorted = false;
        while (!sorted) {
            sorted = true;
            let current = this.head;
            let prev = null;

while(current&&current.next){
    if(current.value>current.next.value){
        sorted=false;


if(prev==null){
    //swap the heand and next node
    const temp=current.next;
   current.next=temp.next;
   temp.next=current;
   this.head=temp;
}else{
    //swap the non head nodes
    const temp=current.next;
    current.next=temp.next;
    temp.next=current;
    prev.next=temp;
}
    }
              prev = current;
                current = current.next;
      
    }
        }
    }
}
    const linkedList = new LinkedList();
    linkedList.push(5);
    linkedList.push(3);
    linkedList.push(8);
    linkedList.push(1);
    
    console.log("Before sorting:");
    linkedList.print(); // Output: 5 -> 3 -> 8 -> 1
    
    linkedList.bubbleSort();
    
    console.log("After sorting:");
    linkedList.print(); // Output: 1 -> 3 -> 5 -> 8

6.






7.Reversed linked list

Method:1

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverselist(head){

//verify that it is the empty or only node present
if(head==null||head.next==null){
    return head;
}

let prev=null;
let present=head;
let next=present.next;

//
while(present!==null){
present.next=prev;//reverse the diection of present one
prev=present;
present=next;

//avoid the null reference error verify that next one is not null
if(next!==null){
    next=next.next;
}
}
return prev;
}

Method:2

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }



insert(value){
    const newnode=new Node(value);
    if(!this.head){
        this.head=newnode;//if list is empty then only one node is present then it will become the head and tail
    }else{
        //if list is not empty then we traversal te entire list add the node at the last
        let current=this.head;

        while(current.next){
            current=current.next;
        }
        current.next=newnode;
    }
    this.size++;
}




reverse(){
    if(this.size<2){
        return;
    }
let prev=null;
let current=this.head;
let next=current.next;

while(current!==null){
    current.next=prev;
    prev=current;
    current=next;
    if(next!==null){
        next=next.next;
    }
}
this.head=prev;//assign the head previously it is the las element
}


display() {
    let current = this.head;
    const values = [];
    while (current) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values.join(' -> '));
}

}

// Create a new linked list
const linkedlist = new Linkedlist();

// Insert elements into the linked list
linkedlist.insert(11);
linkedlist.insert(12);
linkedlist.insert(13);
linkedlist.insert(14);
linkedlist.insert(15);

console.log("Original Linked List:");
linkedlist.display(); 

// Reverse the linked list
linkedlist.reverse();

console.log("Reversed Linked List:");
linkedlist.display(); 

8.







9.








10.reorderlist

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reorderlist(head) {
    if (head === null || head.next === null) {
        return;
    }

    const mid = middlenode(head);

function middlenode(head){
    let slow=head;
    let fast=head;
    while(fast!==null&&fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;   
}

    const reversedsecondhalf = reverselist(mid);
    function reverselist(head){
        let prev=null;
        let current =head;
        let next=null;
    
        while(current!==null){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        return prev;   
    }
    
let firsthalf=head;
let secondhalf=reversedsecondhalf;

while(firsthalf!==null&&secondhalf!==null){
    const tempfirsthalfnext=firsthalf.next;
    firsthalf.next=secondhalf;
    firsthalf=tempfirsthalfnext;

    const tempsecondhalfnext=secondhalf.next;
    secondhalf.next=firsthalf;
    secondhalf=tempsecondhalfnext;
}
if (firsthalf !== null) {
    firsthalf.next = null;
}
}



// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Call the reorderList function to reorder the linked list
reorderlist(head);

// Print the reordered linked list
let current = head;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

11.reverse the every kth group

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseKgroup(head, k) {
    if (k <= 1 || head === null) {
        return head;
    }

    let current = head; // Current node in the group
    let prev = null;    // Previous node before the group

    const length = getlength(head);
    const count = Math.floor(length / k);

    while (count > 0) {
        let last = prev;      // Last node of the previous group
        let newEnd = current; // New end of the current group

        // Initialize a pointer to the next node
        let next = current.next;

        // Reverse the current group of k nodes
        for (let i = 0; current !== null && i < k; i++) {
            current.next = prev; 
            prev = current;      
            current = next;      
            if (next !== null) {
                next = next.next; 
            }
        }
        // Connect the reversed group to the previous group or update the head
        if (last !== null) {
            last.next = prev;
        } else {
            head = prev; // Update the head if it's the first group
        }
        newEnd.next = current; // Connect the new end of the group to the next group
        prev = newEnd; // Update prev to the new end
        count--;       // Decrement the group count
    }

    return head;
}

function getlength(head) {
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }
    return length;
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
const head = new ListNode(1);
let current = head;
for (let i = 2; i <= 8; i++) {
    current.next = new ListNode(i);
    current = current.next;
}

const k = 3;
const reversedHead = reverseKgroup(head, k);

current = reversedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}










