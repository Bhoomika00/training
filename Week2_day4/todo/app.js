//Book class
class Todo{

    constructor(title){
        this.title=title;
    }
}


class UI{
//book which is to be added to the list is the input parameter , book
    addtodoToList(todo){
      //accessing the reference of element with id book-list
        const list = document.getElementById("todo-list");

        const row =document.createElement('tr');
      //row will have 4 td - title author isbn delete icon x
        row.innerHTML=`<td>${todo.title}</td>
                       <td><a href="#" class='delete'>X</a></td>`;

        //once the row is created and configured
        //next step 
        //add row to the table
        list.appendChild(row);

    }

     //after adding a book , you want to clear the form fields
      clearFormFields(){
       document.getElementById('task').value='';
       
      }
     
      //show the alert
      showAlert(message, className){
        //create the alert box
        //create the div
       const div =  document.createElement('div');

       div.className = `alert ${className}`;
      
       div.appendChild(document.createTextNode(message));
       //we are accesing the div with container class and storing in const container
       const constainer = document.querySelector('.container');
     
       //we are accessing the form from the dom and storing it in const form
       const form =  document.querySelector('#task-form');

       //adding the alert div in the container div
       constainer.insertBefore(div,form);

     //this will remove the  div with alert class from the container after 2 seconds of display
       setTimeout(function(){
        document.querySelector('.alert').remove();
       },3000);




      }

      //delete book
      deletetodo(target){
         if(target.className === 'delete')
           target.parentElement.parentElement.remove();

      }



}



//Local Storage class to keep data after refreshing the page

class Store{
  //gettodo -- what do you mean by static method 
    static gettodo(){
        let todos;
        if(localStorage.getItem('todos')=== null){
            todos=[];
        }
        else{

            todos=JSON.parse(localStorage.getItem('todos'));
        }
        return todos;

       }
      //displaytodo from Store
       static displaytodo(){
        //books arr
       const todos = Store.gettodo();

       //iterating thru books array using forEach 
       todos.forEach((todo)=>{
        const ui=new UI;

        ui.addtodoToList(todo);
       });

       }



      //add Book in Store
       static addtodo(todo){
        const todos = Store.gettodo();
        todos.push(todo);
        localStorage.setItem('todos',JSON.stringify(todos));

       }
       //Store --remove Book
       //we are defining removetodo
       static removetodo(title){
        //calling gettodo --will return  -books from localstorage
        e.preventDefault();
        const todos=Store.gettodo();

        //iterating thru the books
        todos.forEach((todo,index)=>{

            if(Todo.title===title){
                todo.splice(index,1)
            }
        });
        localStorage.setItem('todos',JSON.stringify(todos));

       }

}

//DOM Load Event
document.addEventListener('DOMContentLoaded',Store.displaytodo);

//Event listener for form submit

document.getElementById('task-form').addEventListener('submit',
function(e){
    e.preventDefault();

    const title = document.getElementById('task').value;
    
    //creating a new Book object from the form values
    const todo=new Todo(title);

    //call the method to add Book 
    Store.addtodo(todo);

    const ui=new UI();

    if(title === ""){
        ui.showAlert('Please populate fields','error');
    }else{

    ui.addtodoToList(todo);
    ui.showAlert('Your book has been added','success');
   
    ui.clearFormFields();

    }


});


//Event listener for delete

document.getElementById('task-list').addEventListener
('click',function(e){

//e.preventDefault();
 const ui =new UI();
//delete book when x link is clicked
 ui.deletetodo(e.target);

 //remove it from from local storage
 //it will give me isbn of the book
 Store.removetodo(e.target.parentElement.previousElementSibling.textContent);

 ui.showAlert('Your book has been removed','success');

 //this.parentElement.pr
e.preventDefault();


})



