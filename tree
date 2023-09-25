status:do the 2,4,5,6,8,9


1.levelordertraversal



//given th root of the tree show the level order of the 
class treenode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function levelordertraversal(root){

    //if root is empty then we return the empty array
    if(!root)
    return[];

    //store the resultof the array
    const result=[];

    //we store the nodes to process into queue for bft manner
     const queue= [root];

     //verify atleast one node in the current level
     while(queue.length>0){
    
      //calculte the number of nodes are available in the current node
        const levelsize=queue.length;

      //store the nodes in the current level
        const currentlevel=[];

        for(let i=0;i<levelsize;i++){
       //remove the node from the queue the store into currentnode       
        const currentnode=queue.shift();

      //add the current node to the current level of the array
      currentlevel.push(currentnode.val); 
      
     //if left or right child are exist then add them to the queue to proceed next level    
     if (currentnode.left) {
        queue.push(currentnode.left);
      }
      if (currentnode.right) {
        queue.push(currentnode.right);
      }
      //push the current level of element into the array
      result.push(currentlevel);
    }
}//finish the whil loop
return result;
}



// Example usage:
const root = new treenode(1);
root.left = new treenode(2);
root.right = new treenode(3);
root.left.left = new treenode(4);
root.left.right = new treenode(5);
root.right.left = new treenode(6);
root.right.right = new treenode(7);


root.left.left.left = new treenode(8);
root.left.left.right = new treenode(9);
root.left.right.left = new treenode(10);
root.left.right.right = new treenode(11);


const result = levelordertraversal(root);
console.log(result);
     

2.find avg value of the level




3.find successor

//given th root of the tree show the level order of the 

class treenode{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
function findsuccessor(root,key){

    //if root is empty then we return the empty array
    if(!root)
    return[];

    //store the resultof the array
    const result=[];

    //we store the nodes to process into queue for bft manner
     const queue= [root];

     //verify atleast one node in the current level
     while(queue.length>0){
        
      //calculte the number of nodes are available in the current node
      const levelsize=queue.length;

//initially assume false
let found=false;

        //store the nodes in the current level
        const currentlevel=[];

        for(let i=0;i<levelsize;i++){
        //remove the node from the queue the store into currentnode       
        const currentnode=queue.shift();

//found the target node
            if(found){
    return currentnode;
}
//it will helpful to the return successor after find the target not before that
if(currentnode.val===key){
    found=true;
}

      //add the current node to the current level of the array
     // currentlevel.push(currentnode.val); 
      
     //if left or right child are exist then add them to the queue to proceed next level    
     if (currentnode.left) {
        queue.push(currentnode.left);
      }
      if (currentnode.right) {
        queue.push(currentnode.right);
      }
      //push the current level of element into the array
      
    }
}//finish the whil loop


return null;
}

// Example usage:
const root = new treenode(3);
root.left = new treenode(9);
root.right = new treenode(2);
root.right.left = new treenode(2);
root.right.right = new treenode(7);

const result = findsuccessor(root);
console.log(result);
     
const target = 2; // The target node for which you want to find the successor
const successornode = findsuccessor(root, target);
console.log(successornode ? successornode.val : null); // Output will be the successor's value

4.






5.





6.





7.cousin

//problem:if children are the same level different parant then cousin is true else false

class treenode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
function iscousins(root,x,y){
//find the root node x and y in the tree
    const xx=findnode(root,x);
    const yy=findnode(root,y);
//check if they are same level and not sibling
return(
    level(root,xx,0)===level(root,yy,0)&&!issibling(root,xx,yy)
);
}
function findnode(node,x){
if(node===null){
    return null;
}
if(node.val===x){
    return node;
}

const leftnode=findnode(node.left,x);
if(leftnode!==null){
    return leftnode;
}
return findnode(node.right,x);
}

//function to check whether it is the sibling or not
function issibling(node,x,y){
if(node===null){
    return false;
}

return (
    (node.left===x&&node.right==y)||
    (node.left===y&&node.right==x)||
    issibling(node.left,x,y)||
    issibling(node.right,x,y)
);

}

//find a level in the tree
//try to find the left hand side and then we will move on the right hand side
function level(node,x,lev){
if(node==null){
    return 0;
}

if(node=x){
    return lev;
}

//recursively find the node
const leftlevel=level(node.left,x,lev+1);
if(leftlevel!=0){
    return leftlevel;
}
return level(node.right,x,lev+1);
}

const root = new treenode(1);
root.left = new treenode(2);
root.right = new treenode(3);
root.left.left = new treenode(4);
root.left.right = new treenode(5);
root.right.right = new treenode(6);

console.log(iscousins(root, 4, 6)); // Output: true (4 and 6 are cousins)
console.log(iscousins(root, 2, 3)); // Output: false (2 and 3 are not cousins)

8.







9.








