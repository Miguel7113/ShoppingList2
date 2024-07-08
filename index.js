document.addEventListener('DOMContentLoaded', function() {
    let shoppingListItems = [];

    function addToList(itemName, itemPrice) {
        // Create a new list item object
        let listItem = {
            name: itemName,
            price: itemPrice,
            purchased: false // Track whether the item is purchased
        };

        // Add the item to the shopping list array
        shoppingListItems.push(listItem);

        // Update the displayed shopping list
        updateShoppingListDisplay();
    }

    function updateShoppingListDisplay() {
        let shoppingList = document.getElementById('shopping-list');
        shoppingList.innerHTML = ''; // Clear previous list items

        shoppingListItems.forEach(function(item, index) {
            let li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            li.className = item.purchased ? 'purchased' : '';

            // Add click event to toggle purchased status
            li.addEventListener('click', function() {
                item.purchased = !item.purchased;
                updateShoppingListDisplay();
            });

            shoppingList.appendChild(li);
        });
    }

    // Attach event listener to the "Clear List" button
    document.getElementById('clear-list').addEventListener('click', function() {
        // Clear the shopping list array
        shoppingListItems = [];

        // Update the displayed shopping list
        updateShoppingListDisplay();
    });

    // Add functionality for the "Add" button
    document.getElementById('add-item').addEventListener('click', function() {
        let itemName = document.getElementById('item-input').value.trim();
        let itemPrice = parseFloat(document.getElementById('price-input').value.trim());

        if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
            addToList(itemName, itemPrice);
            document.getElementById('item-input').value = '';
            document.getElementById('price-input').value = '';
        } else {
            alert('Please enter a valid item name and price.');
        }
    });
});
