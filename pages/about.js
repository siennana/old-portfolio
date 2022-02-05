//import React, { Component } from "react";
//import "../assets/CSS/about.css";

//export const authEndpoint = 'https://accounts.spotify.com/authorize';

//const clientId = "";
//const redirectUri = "https://siennana.github.io/pages/about.html";


const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {

  })

function updateClock() {
  var dt = new Date();
  var x = document.getElementById('current-time').innerHTML = dt.toLocaleTimeString();
  setTimeout(updateClock, 1000);
}
updateClock();

function updateDate() {
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var dt = new Date();
  var x = document.getElementById('current-date').innerHTML = dt.toLocaleDateString("en-US", options);
  /*var millisTill12 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
  if (millisTill10 < 0) {
    millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
  }*/
  setTimeout(updateDate, 1000);
}
updateDate();

function drawWeather(d) {
  var fahrenheit = Math.round(((parseFloat(d.list[0].main.temp)-273.15)*1.8)+32);
  document.getElementById('tempurature').innerHTML = fahrenheit + '&deg;';
  document.getElementById('weather-conditions').innerHTML = d.list[0].weather[0].description;
  document.getElementById('location').innerHTML = d.city.name
}

function weatherBalloon( cityID ) {
  var key = '4bdb5400cbddc52169673702ff6a3959';
  fetch('https://api.openweathermap.org/data/2.5/forecast?id=' + cityID + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}
window.onload = function() {
  weatherBalloon( 5128581 );
}

function closeWindow(element) {
  var x = element.parentElement.parentElement.parentElement;  
  console.log(x);
  x.style.visibility='hidden';
}

var exits = document.getElementsByClassName("exit");

for (var i = 0; i < exits.length; i++) {
  exits[i].addEventListener("click", function() {
    closeWindow(this);
  }, false);
}

function openWindow(element) {
    element.style.visibility='visible';
}

var sketchbook = document.querySelector(".art-button");
sketchbook.addEventListener("click", function() {
  var x = document.querySelector("#sketchbook");
  openWindow(x);
});

var projects = document.querySelector(".projects-button");
projects.addEventListener("click", function() {
  var x = document.querySelector("#projects");
  openWindow(x);
});

var music = document.querySelector(".music-button");
music.addEventListener("click", function() {
    var x = document.querySelector("#music");
    openWindow(x);
});

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}


const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);












