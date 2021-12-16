
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTdHLhlGc-phAjFyoSKpquc7Kaz-yiKZE",
  authDomain: "loginconsigueventas.firebaseapp.com",
  projectId: "loginconsigueventas",
  storageBucket: "loginconsigueventas.appspot.com",
  messagingSenderId: "256019511442",
  appId: "1:256019511442:web:7dcf2e3692043374b70e4b"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default fire