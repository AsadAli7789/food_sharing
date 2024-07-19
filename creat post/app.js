  import {
    addDoc,
    collection,
    db,
    ref,
    uploadBytes,
    getDownloadURL,
    storage,
    auth,
  } from "../utils/app.js";
  
// Image preview function
function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('imagePreview');
      output.src = reader.result;
      output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
  }



  console.log(auth)

  const submit_food_form = document.getElementById("foodForm");

  submit_food_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const obj = {
      image: e.target[2].files[0],
      foodName: e.target[0].value,
      foodLocation: e.target[3].value,
      foodPrice: e.target[1].value,
      addByUid: auth.currentUser.uid,
      addByEmail: auth.currentUser.email,
    };
    const imageRef = ref(storage, `${new Date().getTime().toString()}/jpeg`);
    uploadBytes(imageRef, obj.image).then(() => {
    console.log("Image uploaded");

    getDownloadURL(imageRef).then((url) => {
      console.log("url ==>", url);
      obj.image = url;
      const foodCollection = collection(db, "foods");
      addDoc(foodCollection, obj).then(() => {
        console.log("Doc uploaded");
        window.location.href = "/";
      });
    });
  });
});