$(document).ready(function() {
  var suits = ["hearts", "diamonds", "spades", "clubs"];
  var cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];

  suits.forEach(function(suit) {
    cards.forEach(function(card) {
      var newCard = card + " of " + suit;
      $("#output").append("<li>" + newCard + "</li>");
    });
  });

});
