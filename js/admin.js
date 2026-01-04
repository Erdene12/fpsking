import { db, storage } from "./firebase.js";
import { collection, addDoc, Timestamp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

window.addPost = async function () {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const file = document.getElementById("image").files[0];

  const imageRef = ref(storage, "posts/" + file.name);
  await uploadBytes(imageRef, file);
  const imageURL = await getDownloadURL(imageRef);

  await addDoc(collection(db, "posts"), {
    title,
    content,
    imageURL,
    created: Timestamp.now()
  });

  alert("Post published!");
}
