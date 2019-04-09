function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const deleteForm = document.getElementById('deleteForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create new li
    let newLi = document.createElement('li');

    //create new input
    let checkbox = document.createElement('input');

    //set input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //append checkbox to the li
    newLi.appendChild(checkbox);

    //create & append delete button to li
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    newLi.appendChild(deleteBtn);


    //attach li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    deleteBtn.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    });

  });

}

window.onload = function() {
  onReady();
};
