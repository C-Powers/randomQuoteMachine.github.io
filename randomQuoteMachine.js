/* Written by C Powers. Click the link in the executed code to reach my codepen profile!
This is a random quote generator that will choose a random pre-selected color value and quote from the Lord of the Rings series.
*/

function lotrQuote(){
  var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

  var authQuotes = [
    [' Gandalf ' ,        ' "There is only one Lord of the Ring, only one who can bend it to his will. And he does not share power." '],
    [' Samwise ' ,        ' “That there’s some good in this world, Mr. Frodo… and it’s worth fighting for." '],
    ['Galadriel' ,        ' “Even the smallest person can change the course of the future.” '],
    ['Galadriel' , ' “The time of the Elves… is over. Do we leave Middle-Earth to its fate? Do we let them stand alone?” '],
    ['Gollum' ,           ' “We swears, to serve the master of the Precious. We will swear on… on the Precious!” '],
    ['Gandalf' ,           ' “I am Gandalf the White. And I come back to you now… at the turn of the tide.” '],
    ['Gandalf' , ' “Oh, it’s quite simple. If you are a friend, you speak the password, and the doors will open.” '],
    ['Gandalf' , ' “Well, what can I tell you? Life in the wide world goes on much as it has this past Age, full of its own comings and goings, scarcely aware of the existence of Hobbits, for which I am very thankful.”'],
    ['Gandalf' , '“Well, what can I tell you? Life in the wide world goes on much as it has this past Age, full of its own comings and goings, scarcely aware of the existence of Hobbits, for which I am very thankful.”' ,
],
    ['Galadriel' , ' “For the time will soon come when Hobbits will shape the fortunes of all.”'],
    ['Treebeard' , ' “There is no curse in Elvish, Entish, or the tongues of Men for this treachery.”'],
    ['Gandalf' ,  '“The Ring has awoken, it’s heard its masters call.”'],
    ['Arwen' , '“Your time will come. You will face the same Evil, and you will defeat it.”'],
    ['Gollum' , '“But the fat Hobbit, he knows. Eyes always watching.”'],
    ['Frodo', ' "We will take the ring to Mordor, though I do not know the way." '],
    ['Sam' , '"Potatoes. Boil em, mash em, cook em in a stew. " ']
  ]

  /* Random numbers are chosen, and used to determine the quote+author+color*/
  var randomColorNum = Math.floor(Math.random() * colors.length);
  var randomQuoteNum = Math.floor(Math.random() * authQuotes.length);
  currentQuote = authQuotes[randomQuoteNum][1];
  currentAuthor = '- ' + authQuotes[randomQuoteNum][0];
  currentColor = colors[randomColorNum]
  $("*").css("background-color", currentColor);
  $(".message").html(currentQuote);
  $(".author").html(currentAuthor);


  /* This method posts the current quote and author to twitter.
  You can change the value after hashtags= (but before the &) to change
  the hashtag that you want to be posted with your tweet.
  */
  $('#twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?hashtags=freecodecamp&related=freecodecamp&text=' + encodeURIComponent(currentQuote + "  "  + currentAuthor));
}

  window.onload = lotrQuote;
  $("button").on({
    click:lotrQuote
  });

/*
  $("button").click(
    $("div").animate({
      opacity:0}, 500, lotrQuote
    ),
    $(".message").animate({
     opacity:0}, 500, lotrQuote
    ),
   $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000)
  );
 */



/* With the directly below twitter implimentation, it successfully posts to twitter and has the nice/commonly used twitter button, however, it does not post the quote. Only the site link. */
/* Twitter implimentation
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
*/
