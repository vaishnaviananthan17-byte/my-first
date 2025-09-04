function changeQty(num) {
  let qtyInput = document.getElementById("qty");
  let current = parseInt(qtyInput.value);
  if (current + num > 0) {
    qtyInput.value = current + num;
  }
}

    
 