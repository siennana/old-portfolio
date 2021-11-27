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

'use strict';

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












