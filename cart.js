function addToCart(itemName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push({ name: itemName, price: price });
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  function populateCartTable() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let table = document.getElementById('cart-table');
  
    for (let i = 0; i < cart.length; i++) {
      let row = table.insertRow();
      let itemNameCell = row.insertCell(0);
      let priceCell = row.insertCell(1);
      let actionCell = row.insertCell(2);
  
      itemNameCell.innerHTML = cart[i].name;
      priceCell.innerHTML = '$' + cart[i].price;
      actionCell.innerHTML = '<button onclick="removeFromCart(' + i + ')">Delete</button>';
    }
  }
  
  populateCartTable(); // Call this function to populate the table when the page loads

  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Clear and re-populate the cart table
    let table = document.getElementById('cart-table');
    table.innerHTML = '<tr><th>Item</th><th>Price</th><th>Action</th></tr>';
    populateCartTable();
  }

  function showMessage() {
    alert("Behold, the embodiment of elegance is en route to grace your wardrobe. A touch of opulence awaits.");
  }
  

  document.getElementById('pay-button').addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmount = 0;
  
    for (let i = 0; i < cart.length; i++) {
      totalAmount += cart[i].price;
    }
  
    document.getElementById('total-amount').textContent = '$' + totalAmount;
    document.getElementById('payment-message').style.display = 'block';
  });
  