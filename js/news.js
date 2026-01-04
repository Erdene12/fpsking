import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const newsBox = document.getElementById("news");

const q = query(
  collection(db, "news"),
  orderBy("time", "desc")
);

const snapshot = await getDocs(q);

snapshot.forEach(doc => {
  const d = doc.data();
  newsBox.innerHTML += `
    <div class="card">
      <h3>${d.title}</h3>
      <p>${d.content}</p>
    </div>
  `;
});
