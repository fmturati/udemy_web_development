var todos = [];
var todoIndex = todos.length;
var input = prompt("What would you like to do?");

while(input !== "quit"){

    if (input === "list"){
        listTodos();
    }     
    else if(input === "new"){
        addTodo();    
    } 
    else if (input === "delete"){
        deleteTodo();
        listTodos();
    }
    input = prompt("What would you like to do?");
    }

console.log("Ok, thanks for use our app!");


function listTodos(){
    console.log("**************");
    todos.forEach((item, i)=>{ // loop using item as a placeholder for each element TODO and the second parameter is a reference of the index of the item.     
        console.log(i + ": " + item);
    });
    console.log("**************");
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo); // add at the end of the array the new TODO item.  
    console.log(newTodo + " Added Todo"); 
}

function deleteTodo(){
    var delTodo = prompt("Enter the index number that you want to delete.")
    todos.splice(delTodo,1); // SPLICE will delete the item in any position (different of push and pop). The first argument is WHERE and the second argument is HOW MANY items we want to delete;
    console.log("You deleted the Todo number: " + delTodo);
}
 
window.setTimeout(function() {}, 10);