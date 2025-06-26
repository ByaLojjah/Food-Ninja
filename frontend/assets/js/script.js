
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);

  const items = [
    { price: 6000, qty: 1 },
    { price: 10000, qty: 1 },
    { price: 9000, qty: 1 },
  ];
  const livraison = 1500;
  const remise = 500;

  // ➕➖ Changement de quantité
  function changeQty(index, delta) {
    items[index].qty = Math.max(0, items[index].qty + delta);

    document.getElementById("qty" + index).innerText = items[index].qty;
    document.getElementById("itemTotal" + index).innerText =
      (items[index].qty * items[index].price).toLocaleString() + "f";
    updateTotal();
  }

  function updateTotal() {
    let subtotal = 0;
    items.forEach((items) => {
      subtotal += items.qty * items.price;
    });

    const total = subtotal + livraison - remise;

// Script JS principal
const items = [
    { price: 6000, qty: 1 }, 
    { price: 7000, qty: 1 }, 
    { price: 6000, qty: 1 }  
];


const livraison = 1500;
const remise = 500;


function changeQty(index, delta) {
    items[index].qty = Math.max(0, items[index].qty + delta); // autorise quantité à 0

    document.getElementById('qty' + index).innerText = items[index].qty;
    document.getElementById('itemTotal' + index).innerText =
        (items[index].qty * items[index].price).toLocaleString() + 'f';

    updateTotal();
}



function updateTotal() {
    let subtotal = 0;
    items.forEach(item => {
        subtotal += item.qty * item.price;
    });

    const total = subtotal + livraison - remise;

    
    document.getElementById('subtotal').innerText = subtotal.toLocaleString() + 'f';
    document.getElementById('total').innerText = total.toLocaleString() + 'f';
}


    document.getElementById("subtotal").innerText =
      subtotal.toLocaleString() + "f";
    document.getElementById("total").innerText = total.toLocaleString() + "f";
  }

  window.onload = updateTotal;


  function passerCommande() {
    const quantities = [
      parseInt(document.getElementById(qty0).innerText),
      parseInt(document.getElementById(qty1).innerText),
      parseInt(document.getElementById(qty2).innerText),
    ];

    const commandeValidee = quantities.some((qty) => qty > 0);

    if (commandeValidee) {
      alert("✅ Commande validée avec succès !");
      window.location.href = "restaurants.html";

function passerCommande() {
    const quantites = [
        parseInt(document.getElementById('qty0').innerText),
        parseInt(document.getElementById('qty1').innerText),
        parseInt(document.getElementById('qty2').innerText),
    ];

    const commandeValidee = quantites.some(qty => qty > 0); 

    if (commandeValidee) {
        alert("✅ Commande validée avec succès !");

    } else {
        alert("❌ Commande non validée : aucune quantité sélectionnée.");
    }

  }

  const notifications = document.querySelectorAll(".notification");
  const modal = new bootstrap.Modal(document.getElementById("notifModal"));
  const modalContent = document.getElementById("notifModalContent");

}



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

          message = "Paiement effectué à 10:00.";
          break;

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


  const backButton = document.querySelector(".btn.btn-dark");
  if (backButton) {
    backButton.addEventListener("click", () => {
      alert("Vous avez cliqué sur la flèche gauche !");
    });
  }

  //  Initialisation des quantités et prix au chargement
  items.forEach((item, index) => {
    document.getElementById(`qty${index}`).innerText = item.qty;
    document.getElementById(`itemTotal${index}`).innerText = formatPrice(
      item.qty * item.price
    );
  });
  updateTotal();

});
const backButton = document.querySelector('.btn.btn-dark');
    backButton.addEventListener('click', () => {
    alert("Vous avez cliqué sur la flèche gauche !");

});
