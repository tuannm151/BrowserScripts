// ==UserScript==
// @name         Remove empty line codeptit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  simple js script that replace testcase <p> tags as <div>. Untested.
// @author       MinhTuan
// @include        https://code.ptit.edu.vn/student/question/*
// @icon         https://www.google.com/s2/favicons?domain=edu.vn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const table = document.querySelector('.MsoTableGrid');
    const elems = table.getElementsByTagName('p');
    Array.from(elems).forEach(elem => {elem.outerHTML = "<div>" + elem.innerHTML + "</div>" })
})();