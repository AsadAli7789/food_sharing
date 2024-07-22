import {
    onAuthStateChanged,
    auth,
    signOut,
    getDocs,
    collection,
    db,
  } from "../utils/app.js";





var btn1 = document.getElementById("user-menu-item-2")
var div1 = document.getElementById("oml")
var div2 = document.getElementById("lnd")
var div3 = document.getElementById("lod")
var div4 = document.getElementById("binod")
var div5 = document.getElementById("bind")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var spn = document.getElementById("hop")
var inp = document.getElementById("bolo")
var icon = document.getElementById("jkx")
var divman = document.getElementById("lund")
var divphone = document.getElementById("huo")


var divcont = document.getElementById("hkl")
var btn4 = document.getElementById("btn4")
var btn7 = document.getElementById("chuhu")
var btn8 = document.getElementById("nif")

// var pic = document.getElementById("file1")
// var divl = document.getElementById('uol')


btn2.addEventListener('click',(e)=>{
  div4.style.display="grid"
  div5.style.display="none"

})

btn3.addEventListener('click',(e)=>{
  div4.style.display="none"
  div5.style.display="block"
  

})
btn3.addEventListener('click',(e)=>{
  icon.style.display="none"
  spn.innerHTML=""
  spn.innerHTML = ` <i class="fa-regular fa-user  fa-xl" ></i> 
                  
                    <span class="fs-5" style="gap: 15px;" id="hop">${inp.value}</span>` 
})


btn4.addEventListener("click",(e)=>{
  divcont.style.display = "block"
  divman.style.display ='none'
  divphone.style.display='none'

})
btn7.addEventListener("click",(e)=>{
   divcont.style.display = "none"
  divman.style.display ='block'
  divphone.style.display='none'

})
btn8.addEventListener("click",(e)=>{
divphone.style.display='block'
divman.style.display="none"
divcont.style.display = "none"

})
  













 
  btn1.addEventListener("click", (e)=>{
    e.preventDefault();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("user is logged out");
      window.location.href = "/"
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
})
onAuthStateChanged(auth, (user) => {
    if (user) {
  
        const uid = user.uid;
        div1.style.display = "block"
        div2.style.display = "none"
        div3.style.display = "block"


        // ...
      } else {
        // User is signed out
        // ...
        div1.style.display = "none"
        div2.style.display = "block"
        div3.style.display = "none"

      }
    });
    var card1 = document.getElementById("cards_container")





    getFoods()
    async function getFoods() {
      const querySnapshot = await getDocs(collection(db, "foods"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    
        const obj = doc.data();
        const { image, foodName, foodPrice, foodLocation, addByEmail } = obj;
        console.log("image=>", image);
        const card = `
        <div class="card" style="width: 18rem;">
  <img src="${image}" width="200px" height="250px"  class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${foodName}</h5>
    <p class="card-text">Price:${foodPrice}</p>
    <p class="card-text">Add by : ${addByEmail}</p>
    <a href="${foodLocation}" class="btn btn-primary">Location</a>
  </div>
</div> `;
        card1.innerHTML += card;
    });
  }