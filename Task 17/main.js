const groceryItems = [];

// Function to add an item to the grocery items array
function addItem() {
  const inputField = document.getElementById('input');
  const newItem = inputField.value.trim();

  if (newItem === '') {
    alert('Please insert an item.');
  } else {
    groceryItems.push({ name: newItem, checked: false });
    displayItems();
    inputField.value = '';
  }
}

// Function to toggle the checked state of an item
function toggleItem(index) {
  groceryItems[index].checked = !groceryItems[index].checked;
  displayItems();
}

// Function to delete items from the array and the shopping list
function deleteItem(index) {
  groceryItems.splice(index, 1);
  displayItems();
}

// Function to display the grocery items as list elements
function displayItems() {
  const itemList = document.getElementById('itemList');

  // Clear the existing list
  itemList.innerHTML = '';

  // Loop through the grocery items array
  groceryItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;

    if (item.checked) {
      listItem.classList.add('checked');
    }

    listItem.addEventListener('click', () => toggleItem(index));

    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.textContent = ' \u00D7';
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      deleteItem(index);
    });

    listItem.appendChild(closeButton);
    itemList.appendChild(listItem);
  });
}

// Add keyup event listener to the input field
const input = document.getElementById('input');
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    document.getElementById('addBtn').click();
  }
});

// Call the displayItems function to initially populate the list
displayItems();
