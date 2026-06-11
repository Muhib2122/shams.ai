const body=document.body;

const currentTheme=
localStorage.getItem("theme");

if(currentTheme==="light"){

body.classList.add("light");

}

function changeTheme(){

body.classList.toggle("light");

if(body.classList.contains("light")){

localStorage.setItem(
"theme",
"light"
);

}
else{

localStorage.setItem(
"theme",
"dark"
);

}

}
