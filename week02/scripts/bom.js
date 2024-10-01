const addChapter = document.querySelector('button');
const userInput = document.querySelector('input');
const list = document.querySelector('ul');

userInput.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		addChapter.click();
	}
});

addChapter.addEventListener('click', function() {
    if (userInput.value.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = userInput.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        newItem.appendChild(deleteButton);
        list.appendChild(newItem);
        userInput.value = '';
		userInput.focus();
        deleteButton.addEventListener('click', function() {
            list.removeChild(newItem);
        });
    }
});
