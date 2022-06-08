const inputEl = document.querySelector("#content-el");
const addButton = document.querySelector("#add-button");
const newTasks = document.querySelector("#container2")
const clearButton = document.querySelector("#clear-all")

addButton.addEventListener("click", function(){ 
	let item = document.createElement("li");
	let deleteButton = document.createElement("button");
	let textNode = document.createTextNode("X")
	item.classList.add("items");
	deleteButton.classList.add("delete-button")
	item.innerText = inputEl.value;
	inputEl.value = ""
	newTasks.appendChild(item)
	item.appendChild(deleteButton)
	deleteButton.appendChild(textNode)
	deleteButton.addEventListener("click", function(){
		newTasks.removeChild(item)
	})
	clearButton.addEventListener("click", function(){
	newTasks.removeChild(item)
	})

})