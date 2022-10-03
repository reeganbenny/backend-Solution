class ListNode{
    constructor(element){
        this.value = element;
        this.next = null;
    }
}

class SingleLinkedList{
    constructor(element){
        this.head = new ListNode(element);
        this.size = 1;
    }
    
    append(element){
        let node = new ListNode(element);
        let current;
        if(this.head == null) this.head = node;
        else {
            current = this.head;
            while(current.next != null ){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    printList(){
        let array = ["Head"];
        let current = this.head;
        while(current != null){
            array.push(current.value);
            current = current.next;
        }
        array.push("null");
        console.log(array.join(" --> "));
    }

    length(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }

    begin(element){
        let node = new ListNode(element);
        node.next =  this.head;
        this.head = node;
        this.size++;
    }

    insertAt(element, index){
        if(this.size < index || index < 0){
            console.log("Please provide valid index");
        }else{
            let node = new ListNode(element);
            if(index === 0){
                node.next =  this.head;
                this.head = node;
            }else{
                let prev = null;
                let current = this.head;
                let i = 0;
                while(i < index){ 
                    prev = current;
                    current = current.next;
                    i++;
                }
                node.next = current;
                prev.next = node;
            }
        }
        this.size++;
    }

    delete(element){
        let current = this.head, prev = null;
        while(current!= null){
            if(current.value === element){
                if(prev === null){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
                this.size--;
                return current.value;
            }
            prev = current;
            current = current.next;    
        }
        return -1;
    }
    
    searchElement(element){
        let current = this.head;
        while( current!= null){
            if(current.value === element) return true;
            current = current.next;
        }
        return false;
    }
}

let list = new SingleLinkedList(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.begin(10);


list.printList();
console.log("length: "+list.length());
list.insertAt(11, 2);
list.printList();
console.log("length: "+list.length());
list.insertAt(0, 0);
list.printList();
console.log("length: "+list.length());
console.log("Delete element "+list.delete(9));
list.printList();
console.log("length: "+list.length());
console.log("Delete element "+list.delete(0));
console.log("Delete element "+list.delete(10));
console.log("Delete element "+list.delete(5));
console.log("Delete element "+list.delete(11));
console.log("Delete element "+list.delete(6));
console.log("Delete element "+list.delete(7));
console.log("Delete element "+list.delete(8));
list.printList();
console.log(list.searchElement(8));
console.log("Delete element "+list.delete(8)); // return -1 which means element not found
// list.printList();
console.log(list.isEmpty());

console.log("length: "+list.length());
list.insertAt(11, 2);
list.append(9);
list.begin(10);


list.printList();
console.log("length: "+list.length());
list.printList();
console.log("length: "+list.length());