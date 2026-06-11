// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPNXf0mCP1kfE2oKP8zlySHHJeN3vjZDE",
  authDomain: "shams-ai-e597b.firebaseapp.com",
  projectId: "shams-ai-e597b",
  storageBucket: "shams-ai-e597b.firebasestorage.app",
  messagingSenderId: "76045606332",
  appId: "1:76045606332:web:c95fe98922059e7e795fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  provider
};
