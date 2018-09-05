var todos = [];
var todoIndex = todos.length;
var input = prompt("What would you like to do?");

while(input !== "quit"){

    if (input === "list"){
        listTodo()
    }     
    else if(input === "new"){
        addTodo();    
    } 
    else if (input === "delete"){
        deleteTodo();
    }
    var input = prompt("What would you like to do?");
    }

console.log("OK, YOU QUIT THE APP");


function listTodo(){
    todos.forEach((item, i)=>{
    console.log(i + ": " + item);
    });
    console.log("----------------------------");
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);   
    console.log("Added Todo"); 
}

function deleteTodo(){
    var deleteTodo = prompt("Enter the index number that you want to delete.")
    todos.splice(deleteTodo,1);
    console.log("Deleted Todo!")
}
 
window.setTimeout(function() {}, 10);