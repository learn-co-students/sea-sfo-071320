// Has data :checkmark:
// knows what comes next
class Node {
    constructor(data){
      // setState is from React
      this.data = data
      this.next = null
    }
  }
  
  
  
  // Has a head (or root) (which is a node)
  class LinkedList {
    // if newNode.next === null, newNode = head
    constructor(data){
      // setState is from React
      this.head = new Node(data)
    }
  
    addNode(data){
      // we will need to traverse to the end of the list
      // if(this.head.next === null){
      //   this.head.next = newbie
      // }
      let newbie = new Node(data)
  
      let node = this.head
      let next = this.head.next
      // moving the chains
      while(next){
        node = next
        next = node.next
      }
  
      node.next = newbie
  
      return "AMERICA! HECK YEAH"
    }
  
    remove(removable){
      // eventually, we want to find the node just prior to our revmoable node, and make it point to the *next* next. 
      // what if we don't know how many we have? infinitely go until we find the node with the data we are looking for
  
      // edge case first
      if(this.head.data === removable){
        this.head = this.head.next
      }
  
      let node = this.head
      let next = this.head.next
      // moving the chains
      while(next.data != removable){
        // continue until node.data === removable
        // then break
        next = node.next.next
        node = node.next
      }
      // node is directly before the one we are removing
      // next is the one we are removing
      node.next = node.next.next
  
      return "Hal 2020!!!!!!!!!!!"
    }
  
    length(){
      let counter = 1
      let node = this.head
      let next = this.head.next
      // moving the chains
      while(next){
          console.log(node)
        node = next
        next = node.next
        counter += 1
      }
      return counter
    }
    
  }
  
  let newList = new LinkedList(88)
  
  newList.addNode(983298)
  newList.addNode(9)
  newList.addNode("start")
  newList.addNode(42)
  
  
  console.log(newList.remove("start"))
  console.log(newList.length())


//   HERE IS IX'S SOLUTION:
// https://repl.it/@eeeeeeeeeks/LinkedList-060120#main.js
  
  