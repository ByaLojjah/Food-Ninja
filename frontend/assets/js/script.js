
// Script JS principal
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000); // disparait après 2 secondes
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


const items = [
  { price: 6000, qty: 1 }, 
  { price: 7000, qty: 1 }, 
  { price: 6000, qty: 1 }  
];



const livraison = 1500;
const remise = 500;


function changeQty(index, delta) {
  items[index].qty = Math.max(0, items[index].qty + delta); // autorise quantité à 0

    const itemTotal = quantities[index] * itemPrices[index];
    document.getElementById(`itemTotal${index}`).textContent =
      formatPrice(itemTotal);

    calculateTotal();
  }

  function calculateTotal() {
    let subtotal = 0;

    for (let i = 0; i < quantities.length; i++) {
      subtotal += quantities[i] * itemPrices[i];
    }


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


window.onload = updateTotal;

function passerCommande() {
  const quantites = [
    parseInt(document.getElementById('qty0').innerText),
      parseInt(document.getElementById('qty1').innerText),
      parseInt(document.getElementById('qty2').innerText),
    ];

    // const commandeValidee = quantites.some(qty => qty > 0); 

    // if (commandeValidee) {
    //     alert("✅ Commande validée avec succès !");
    // } else {
    //     alert("❌ Commande non validée : aucune quantité sélectionnée.");
    // }
    if (commandeValidee) {
      alert("✅ Commande validée avec succès !");
      window.location.href = "page-paiement.html";
    } else {
      alert("❌ Commande non validée : aucune quantité sélectionnée.");
    }
}


    document.getElementById("subtotal").textContent = formatPrice(subtotal);
    document.getElementById("total").textContent = formatPrice(total);
  }

  function formatPrice(price) {
    return price.toLocaleString("fr-FR") + "f";
  }

  window.onload = () => {
    for (let i = 0; i < quantities.length; i++) {
      document.getElementById(`qty${i}`).textContent = quantities[i];
      document.getElementById(`itemTotal${i}`).textContent = formatPrice(
        quantities[i] * itemPrices[i]
      );
    }
    calculateTotal();
  };


  const notifications = document.querySelectorAll(".notification");
  const modal = new bootstrap.Modal(document.getElementById("notifModal"));
  const modalContent = document.getElementById("notifModalContent");

  notifications.forEach((notification, index) => {
    notification.addEventListener("click", () => {
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
  const backButton = document.querySelector(".btn.btn-dark");
  backButton.addEventListener("click", () => {
    alert("Vous avez cliqué sur la flèche gauche !");
  });
});
