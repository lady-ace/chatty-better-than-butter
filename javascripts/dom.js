"use strict";

let messages = require("./xhr");

const domString = function (messages) {
  var messageString = "";
  for (var i = 0; i < messages.length; i++) {
    messageString += `<div class="messageCard">
                        <p id="message">${messages[i].message}</p>
                        <button class="deleteBtn">Delete</button>
									    </div > `;
    writeToDom(messageString);
  }
};

const writeToDom = function (strang) {
  var messageContainer = document.getElementById("message-board");
  messageContainer.innerHTML = strang;
};

module.exports = { domString, writeToDom };