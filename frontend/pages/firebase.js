
  // Import Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.9.1/firebase/auth";

  // Config Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyChAbAMdoqTCyyzZYKf7dcV6KGp0FANVk0",
    authDomain: "ninja-test-dc150.firebaseapp.com",
    projectId: "ninja-test-dc150",
    storageBucket: "ninja-test-dc150.appspot.com", // ✅ correction ici : "firebasestorage.app" -> "appspot.com"
    messagingSenderId: "845687913271",
    appId: "1:845687913271:web:8dcad1dceb0548635438b2",
    measurementId: "G-L2BR0HJ3HZ"
  };

  // Initialisation Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const db = getFirestore(app);

  // // Fonction async pour ajouter un document
  async function addCity() {
    try {
      const docRef = await addDoc(collection(db, "ville"), {
        name: "Dakar",
        country: "Senegal"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  addCity(); // Appel de la fonction


// window.connexion = function () {
//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       console.log("Utilisateur connecté :", user);
//     })
//     .catch((error) => {
//       console.error("Erreur de connexion :", error);
//     });
// }

//   document.getElementById("btnConnexion").addEventListener("click", async () => {
//       try {
//         const result = await signInWithPopup(auth, provider);
//         const user = result.user;
//         console.log("Utilisateur connecté :", user);
//       } catch (error) {
//         console.error("Erreur de connexion :", error);
//       }
//     });
