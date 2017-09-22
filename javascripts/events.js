"use strict";

let messages = require("./xhr");

const messageBoard = document.getElementById("message-board");
const themeRadios = document.getElementById("radioThemes");
const body = document.getElementById("body");
const input = document.getElementById("message-input");
const clearBtn = document.getElementById("clear-messages");

//deleteBtn when clicked will find the parent "messageCard" and delete it.
messageBoard.addEventListener("click", (event) => {
  messages.messageDelete(event.target.parentNode.children[0].innerHTML);
  // console.log(event.target.parentNode.children[0].innerHTML);
});








// clicking the clearBtn runs clearAll, the function to empty the dom and the 'messageData' array
clearBtn.addEventListener("click", () => {
	messages.clearAll();
});

//loops through radio buttons and removes css class to add different css class
themeRadios.addEventListener("change", (event) => {
  for (let i = 0; i < themeRadios.children.length; i++) {
    if (event.target.id === "bob") {
      body.classList.remove("red");
      body.classList.add("changeBackground");
    }
  }
});

// event listener for input field
input.focus();
input.addEventListener('keydown', (e) => {
	if(event.target.tagName != 'TEXTAREA') {
		if (e.keyCode === 13) {
			event.preventDefault();
      messages.newMessage(input.value);
			input.value = "";
			return false;
    }
	}
});

