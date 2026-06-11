const welcomeText=
document.getElementById(
"welcomeText"
);

const userEmail=
document.getElementById(
"userEmail"
);

welcomeText.innerText=
"Welcome back, "+
(
localStorage.getItem(
"userName"
)
||"User"
);

userEmail.innerText=
localStorage.getItem(
"userEmail"
);


document.getElementById(
"logoutBtn"
)
.addEventListener(
"click",
()=>{

localStorage.clear();

window.location.href="./login.html";

}
);
