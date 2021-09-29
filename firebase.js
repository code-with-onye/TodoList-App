const firebaseConfig = {
  apiKey: "AIzaSyDG68yA7RFaFrP30rSV6akApIBYCTBVrvw",
  authDomain: "simple-payment-form-tailwind.firebaseapp.com",
  projectId: "simple-payment-form-tailwind",
  storageBucket: "simple-payment-form-tailwind.appspot.com",
  messagingSenderId: "832994709634",
  appId: "1:832994709634:web:9ddd04bfbd21214b2d649b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

//   firebase deploy --only hosting:todoapp-16d54
