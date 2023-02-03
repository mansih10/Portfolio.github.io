let dark = document.getElementById("dark");
let img = document.getElementById("img-logo")


dark.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    img.src = "./asset/sunpng.png"
  }else{
    
    img.src= "./asset/moon.png"
  }
});
