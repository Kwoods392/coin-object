console.log("hello");

let coin = {
  state: 0,
  flip: function () {
    this.state = Math.round(Math.random());
  },
  toString: function () {
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "./images/heads.jpg";
    } else {
      image.src = "./images/Tails.jpg";
    }
    return image;
  },
};

/*Write a function called display20Flips
 that uses a loop to flip the coin 20 times. Each time the coin flips,
  display the result of each flip as a string on the page (make use of your toString() method)*/

function display20Flips() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    let li = document.createElement("li");
    li.innerHTML = coin.toString();
    document.body.append(li);
  }
}

/*Write a function called display20Images,
 again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string,
  display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).*/

function display20Images() {
  for (let i = 0; i < 20; i++) {
    coin.flip();

    document.body.append(coin.toHTML());
  }
}
display20Images();
display20Flips();
