/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment6-HTML/sw.js", {
    scope: "/ICS2O-Assignment6-HTML/",
  })
}

/**
 * Get API info.
 */
const getImage = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress);
    const jsonData = await request.json();
    console.log(jsonData.image);
    document.getElementById("api-image").innerHTML =
      '<img src="' +
      jsonData.image +
      '" alt="Food image" class="center" width="40%" ' +
      ">";
  } catch (err) {
    console.log(err);
  }
};
getImage("https://foodish-api.herokuapp.com/api/");