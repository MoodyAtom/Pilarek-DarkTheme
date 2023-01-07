// ==UserScript==
// @name         PilarekDarkMode
// @version      0.1
// @description  tryb czarny dla pilarka
// @author       MoodyAtom
// @match        https://pilarek-stepien.pl/lo9/plany/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pilarek-stepien.pl
// @grant        none
// ==/UserScript==

document.body.style.backgroundColor = "black";

document.querySelector("body > div > table > tbody > tr:nth-child(2)").remove()