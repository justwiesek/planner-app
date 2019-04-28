var removeButton = '<i class="far fa-trash-alt"></i>';
var completeButton = '<i class="fas fa-check"></i>';


document.getElementById('add').addEventListener('click', function() {
     var value = document.getElementById('item').value;
    if (value) {
        addItem(value);
        document.getElementById('item').value = '';
    }
});

// function for removing items 

function removeItem() {
   var item = this.parentNode.parentNode;
   var parent = item.parentNode;
    
    parent.removeChild(item);
}

// function for completing the task 

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    
    // checking if the task is completed or needs to be done
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
    
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

function addItem(text) {
    var list = document.getElementById('todo');
    
    var item = document.createElement('li');
    item.innerHTML = text;
    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeButton;
    
    // click event to remove the item
    remove.addEventListener('click', removeItem);
    
    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeButton;
    
    // click event for completing the task
    complete.addEventListener('click', completeItem);
    
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    
    list.insertBefore(item, list.childNodes[0]);
} 



