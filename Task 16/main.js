// Array of grocery items
var groceryItems = [
    "Apples",
    "Milk",
    "Bread",
    "Eggs"
];
  
  // Function to display the grocery items as list elements
function displayItems() {
    var itemList = document.getElementById('itemList');
  
    // Clear the existing list
    itemList.innerHTML = '';
  
    // Loop through the grocery items array
    for (var i = 0; i < groceryItems.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = groceryItems[i];
  
      // Add 'bought' class to the first two items
      if (i < 2) {
        listItem.classList.add("bought");
      }
  
      itemList.appendChild(listItem);
    }
}
  
  // Call the displayItems function to initially populate the list
  displayItems();
  
  
  