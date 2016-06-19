var buyButtons = document.getElementsByClassName("buynow");

for (var i = 0 ; i < buyButtons.length ; i++){
  buyButtons[i].addEventListener('click', buyProxy);
}

function buyProxy () {
alert("I'm sorry, this is a practice website. You cannot purchase this item.");
};



var adoptButtons = document.getElementsByClassName("adoptnow");

for (var i = 0 ; i < adoptButtons.length ; i++){
  adoptButtons[i].addEventListener('click', adoptProxy);
}

function adoptProxy () {
alert("I'm sorry, this is a practice website. You cannot adopt a pet here.");
};



var linkButtons = document.getElementsByClassName("linkbuttons");

for (var i = 0 ; i < linkButtons.length ; i++){
  linkButtons[i].addEventListener('click', linkProxy);
}

function linkProxy () {
alert("I'm sorry, this is a practice website.  This link is not functional.");
};
