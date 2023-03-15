// selecting input, add button, todo list items

const todoInput = document.getElementById('input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


// Create event listener for add button

addBtn.addEventListener('click', (e) =>{
	createTodo();
})


// Event listener for Enter key

document.addEventListener('keydown', (e) =>{
	if (e.key === 'Enter') {
		createTodo();
	}
})					


// function to create todo

function createTodo() {

	let newPara = document.createElement('p')
	todoList.appendChild(newPara)
	newPara.textContent = todoInput.value
	todoInput.value = ''
	

	// Event listener to check and uncheck todo

	newPara.addEventListener('click', (e) =>{
		let styles = newPara.classList 

		if (styles.length < 1) {
			styles.add('checked')
		} 

		else if (styles.length > 0) {
			styles.remove('checked')
		}
	})


	// Event listener to delete todo

	newPara.addEventListener('dblclick', (e) =>{
		newPara.style.display = 'none' 	
	})

}