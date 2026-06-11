import { auth, provider } from "../../firebase/firebase-config.js";

import {
signInWithPopup,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


const googleBtn=document.getElementById("googleBtn");

if(googleBtn){

googleBtn.addEventListener("click",async()=>{

try{

const result=await signInWithPopup(auth,provider);

localStorage.setItem(
"userName",
result.user.displayName
);

localStorage.setItem(
"userEmail",
result.user.email
);

window.location.href="./account.html";

}

catch(error){

alert(error.message);

}

});

}



const signupBtn=document.getElementById("signupBtn");

if(signupBtn){

signupBtn.addEventListener("click",async()=>{

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const name=document.getElementById("name").value;

try{

await createUserWithEmailAndPassword(
auth,
email,
password
);

localStorage.setItem(
"userName",
name
);

localStorage.setItem(
"userEmail",
email
);

window.location.href="./account.html";

}

catch(error){

alert(error.message);

}

});

}



const loginBtn=document.getElementById("loginBtn");

if(loginBtn){

loginBtn.addEventListener("click",async()=>{

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(
auth,
email,
password
);

localStorage.setItem(
"userEmail",
email
);

window.location.href="./account.html";

}

catch(error){

alert(error.message);

}

});

}
