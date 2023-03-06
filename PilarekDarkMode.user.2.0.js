// ==UserScript==
// @name         PilarekDarkMode
// @version      2.0
// @description  tryb czarny dla pilarka
// @author       MoodyAtom
// @match        https://pilarek-stepien.pl/lo9/plany/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pilarek-stepien.pl
// @grant        none
// ==/UserScript==

document.body.style.backgroundColor = "black";

document.querySelector("body > div > table > tbody > tr:nth-child(2)").remove()

// tytuł
document.querySelector("body > table > tbody > tr > td").style.backgroundColor = "#7fc3ac"

// top row
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > th:nth-child(1)").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > th:nth-child(2)").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > th:nth-child(3)").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > th:nth-child(4)").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > th:nth-child(5)").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > th:nth-child(6)").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > th:nth-child(7)").style.backgroundColor = "#c1dcd4"

// numery godzin
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td.nr").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(3) > td.nr").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(4) > td.nr").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(5) > td.nr").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(6) > td.nr").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(7) > td.nr").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(8) > td.nr").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(9) > td.nr").style.backgroundColor = "#c1dcd4"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(10) > td.nr").style.backgroundColor = "#c1dcd4"

// godziny (jaśniejszy kolor)
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td.g").style.backgroundColor = "#e0ede8"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(3) > td.g").style.backgroundColor = "#e0ede8"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(4) > td.g").style.backgroundColor = "#e0ede8"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(5) > td.g").style.backgroundColor = "#e0ede8"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(6) > td.g").style.backgroundColor = "#e0ede8"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(7) > td.g").style.backgroundColor = "#e0ede8"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(8) > td.g").style.backgroundColor = "#e0ede8"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(9) > td.g").style.backgroundColor = "#e0ede8"
document.querySelector("body > div > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(10) > td.g").style.backgroundColor = "#e0ede8"
