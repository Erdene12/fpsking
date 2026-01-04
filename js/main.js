import { db } from "./firebase.js";
import { collection, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById("posts");

const snap = await getDocs(collection(db, "posts"));
snap.forEach(doc => {
  const p = doc.data();
  container.innerHTML += `
    <div class="post">
      <h2>${p.title}</h2>
      <img src="${p.imageURL}">
      <p>${p.content}</p>
    </div>
  `;
});
