import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { firebaseConfig } from './firebaseConfig.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

// Authentication and Firestore functions can be added here
export { auth, firestore };
