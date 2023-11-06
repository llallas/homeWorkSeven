import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1H2VZFrukwJ31PF69PbOJjrZlIqJEmog",
  authDomain: "n315-ea.firebaseapp.com",
  projectId: "n315-ea",
  storageBucket: "n315-ea.appspot.com",
  messagingSenderId: "244728055229",
  appId: "1:244728055229:web:c74b21e118bcb575217ed4",
  measurementId: "G-7SD2L5JQY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function initListeners() {
  $("#createBtn").on("click", (e) => {
    let fName = $("#fNameC").val();
    let email = $("#emailC").val();
    let pw = $("#pwC").val();

    createUserWithEmailAndPassword(auth, email, pw)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error" + errorMessage)
       });
  });

  $("#signin").on("click", (e) => {
    let fName = $("#fName").val();
    let email = $("#email").val();
    let pw = $("#pw").val();

    signInWithEmailAndPassword(auth, email, pw)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error Message" + errorMessage)
     });
  });

  $("#signOut").on("click", (e) => {
    signOut(auth)
    .then(() => {
        console.log("signed out")
    })
  })

}

$(".hamburger-icon").on("click", () =>{
  $(".hamburger-icon").toggleClass("open");
});

// import { changePage } from "../model/model.js";

function changePage(hashTag, pageID) {
  if (pageID == "" || pageID == "home") {
      $.get(`dist/pages/home.html`, (data) => {
          $("#app").html(data);
      })
  } else {
      $.get(`dist/pages/${pageID}.html`, (data) => {
          $("#app").html(data);
  })
}
}

function changeRoute() {
  let hashTag = window.location.hash;
   let pageID = hashTag.replace('#', '');
   changePage(hashTag, pageID);
  //   console.log(hashTag + ' ' + pageID);
  
  // if (pageID != '') {
  // $.get(`dist/pages/pageID/pageID.html`, function (data) {
  //  console.log('data ' + data);
  //  $('#app').html(data);
  // });
  // } else {
  // $.get(`dist/pages/home/home.html`, function (data) {
  // console.log('data ' + data);
  //  $('#app').html(data);
  // });
  // }
  }
  
  function initURLListener() {
  $(window).on('hashchange', changeRoute);
  changeRoute();
  }
  


$(document).ready(function () {
  initListeners();
});
