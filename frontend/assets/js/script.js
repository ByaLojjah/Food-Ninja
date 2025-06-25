// Script JS principal
let quantities = [1, 1, 1];
let itemPrices = [6000, 10000, 9000]; 
const delivery = 1500;
const discount = 500;

function changeQty(index, change) {
    quantities[index] += change;
    if (quantities[index] < 1) {
        quantities[index] = 1;
    }

    document.getElementById(`qty${index}`).textContent = quantities[index];

    const itemTotal = quantities[index] * itemPrices[index];
    document.getElementById(`itemTotal${index}`).textContent = formatPrice(itemTotal);

        
    calculateTotal();
}

function calculateTotal() {
    let subtotal = 0;

    for (let i = 0; i < quantities.length; i++) {
        subtotal += quantities[i] * itemPrices[i];
    }

    const total = subtotal + delivery - discount;

        
    document.getElementById("subtotal").textContent = formatPrice(subtotal);
    document.getElementById("total").textContent = formatPrice(total);
}

function formatPrice(price) {
    return price.toLocaleString('fr-FR') + 'f'; 
}

window.onload = () => {
    for (let i = 0; i < quantities.length; i++) {
        document.getElementById(`qty${i}`).textContent = quantities[i];
        document.getElementById(`itemTotal${i}`).textContent = formatPrice(quantities[i] * itemPrices[i]);
    }
    calculateTotal();
};

const notifications = document.querySelectorAll('.notification');
  const modal = new bootstrap.Modal(document.getElementById('notifModal'));
  const modalContent = document.getElementById('notifModalContent');

  notifications.forEach((notification, index) => {
    notification.addEventListener('click', () => {
      let message = "";

      switch (index) {
        case 0:
          message = "Votre commande a été prise par le livreur récemment.";
        break;
        case 1:
          message = "Paiement éffectué à 10:00.";
        break;
        case 2:
          message = "Votre commande a été annulée le 25 juin 2025.";
        break;
        default:
          message = "Notification inconnue.";
      }
    modalContent.textContent = message;
    modal.show();
  });
});
const backButton = document.querySelector('.btn.btn-dark');
    backButton.addEventListener('click', () => {
    alert("Vous avez cliqué sur la flèche gauche !");
});
