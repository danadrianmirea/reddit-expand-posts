// ==UserScript==
// @name         Reddit Auto Expand Posts
// @namespace    https://www.reddit.com/
// @version      1.0
// @description  Automatically expand all posts in Reddit search results using getElementsByClassName
// @author       Dan Adrian Mirea
// @match        https://www.reddit.com/r/*
// @exclude      https://www.reddit.com/r/*/comments/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {

    function expandButtons() {
      // Select all "+" expand buttons using querySelectorAll
      var expandButtons = document.querySelectorAll('.expando-button');
      //console.log("expandButtons.length: " + expandButtons.length); // Logs the first element with the class 'example-class' or null

      // Click each button
      expandButtons.forEach(function(button) {
        var entryAncestor = button.closest('.entry');
        var expandoChild = entryAncestor ? entryAncestor.querySelector('.expando') : null;
        var computedStyle = expandoChild ? getComputedStyle(expandoChild) : null;

        // only expand buttons who have not been already expanded
        if (computedStyle && computedStyle.display === 'none') {
            button.click();
        }
      });
    }

    var intervalId = window.setInterval(function(){ expandButtons(); }, 500);

})();
