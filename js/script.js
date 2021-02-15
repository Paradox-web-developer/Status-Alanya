
let modal = document.querySelector("#myModal");
let closeButton = document.querySelector("#close-button");
let openButton = document.querySelector("#btn_modal_window");
 
openButton.onclick = function(){
   modal.style.display = "block";
  
};

closeButton.onclick = function(){
	modal.style.display = "none";
};

