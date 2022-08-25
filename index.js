


const nav = document.querySelector("#ham");
const sideBar = document.querySelector(".sideBar");
const sideBarGo = document.querySelector(".sideBarGo");

nav.addEventListener("click", () =>{
    // console.log("Pressed the Ham burger");
    sideBar.classList.toggle("sideBarGo");
});

// alert("This is a pc version of this portfolio");
