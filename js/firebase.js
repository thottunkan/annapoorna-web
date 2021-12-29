

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyB8R4IAep-Xq8KCnoJUvr7OrSkqHxRzmDA",

    authDomain: "annapoorna-50aaa.firebaseapp.com",

    databaseURL: "https://annapoorna-50aaa-default-rtdb.firebaseio.com",

    projectId: "annapoorna-50aaa",

    storageBucket: "annapoorna-50aaa.appspot.com",

    messagingSenderId: "801980721867",

    appId: "1:801980721867:web:efcd3c00f6b389c675c94e",

    measurementId: "G-EY0RCJJNX1"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

