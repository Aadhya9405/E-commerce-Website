// Generate random order number
const orderNum = "ADW" + Math.floor(100000 + Math.random() * 900000);
document.getElementById("orderNumber").textContent = orderNum;

// Generate delivery date (5 days later)
const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + 5);
document.getElementById("deliveryDate").textContent = deliveryDate.toDateString();

// Clear cart after placing order
localStorage.removeItem("cart");
