# Overview

This is a simple application that is meant purely to practice using fetch and using the data from the file retrieved.

This application makes a fetch request to the Chuck Norris API and then retrieves the file. Then it will fortmat this file in the JSON format and then return this to use in the next .then().

Once the data is passed to the next .then() I then extract the image icon and the joke from the JSON data and use it to change what is displayed on the page. I also pushed the joke value to an array that was initialised outside of the fetch, which is used if there is an error so the .catch() still enables the div's text to change by selecting one of the jokes from the array.