
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCFpX23tqmE54WBIVFVCpofdjrxRPH-toc",
    authDomain: "clinic-management-65411.firebaseapp.com",
    projectId: "clinic-management-65411",
    storageBucket: "clinic-management-65411.appspot.com",
    messagingSenderId: "188976462764",
    appId: "1:188976462764:web:a3de5e5a1cd8b8afc01809",
    measurementId: "G-908RGT84Y9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
