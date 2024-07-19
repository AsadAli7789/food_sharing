import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    auth,
  } from "../utils/app.js";
  const btn1 = document.getElementById("btn-1") 
  const frm = document.getElementById("form1") 
  const frm2 = document.getElementById("form2") 
  const btn2 = document.getElementById("btn-2")
  const inpe1 = document.getElementById("lop")
  const inpp1 = document.getElementById("kol")
  const inpe2 = document.getElementById("kop")
  const inpp2 = document.getElementById("uol")

  frm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);
    let email = e.target[0].value;
    let password = e.target[1].value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        window.location.href = "/";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
  frm2.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);
    let email = e.target[1].value;
    let password = e.target[2].value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        window.location.href = "/";
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  });
  



