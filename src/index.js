document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
 
  form.addEventListener('submit',(e) =>{
     // create event to prevent app from being default.
    e.preventDefault();
      // use callback to store value 
    buildTodo(e.target.new_task_description.value)
    // reset input sectino after submit the value.
    form.reset();
  })
});
// get element up there ((e.target.new_task_description.value))
function buildTodo(todo){  
  // create <p>
  let p = document.createElement('p');
  let btn = document.createElement('button');
  // store todo into <p></p>
  p.textContent = `${todo}  `;
  //make sign button next to todo value;
  btn.textContent ='x'
  // this will create <p/>  under div #list and store value in it. 
  document.querySelector('#list').appendChild(p);
  // store btn under p
  p.appendChild(btn)
  // btn x button to delete value;
  btn.addEventListener('click', handleDelete)
}

function handleDelete(e){
  e.target.parentNode.remove(); //  y add target?????
}
// yyoon