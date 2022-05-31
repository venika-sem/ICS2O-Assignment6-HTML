/* Created by: Venika Sem
 * Created on: Apr 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-01-PWA/sw.js", {
    scope: "/ICS2O-Unit6-01-PWA/",
  })
}

/**
 * This function converts the temperature from fahrenheit to celsius.
 */
function convert() {
  // input
  const fahrenheitTemperature = parseFloat(document.getElementById('fahrenheit-temperature').value)

   // process
  const temperature = (fahrenheitTemperature - 32) * 5 / 9

  // output
  document.getElementById('temperature').innerHTML = '<p>The temperature in Celsius is: ' + temperature.toFixed(2) + ' °C</p>'
}