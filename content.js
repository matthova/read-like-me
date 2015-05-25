/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command === "updateText")) {
    updateText();
  }
});


/**
* updateText()
*
* Updates website elements and either adds or removes colors
*/
var showingColors = false;
var supportedElements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
function updateText() {
  if (showingColors) {
    $("span").each(function(index, element) {
      $(this).attr('style', '');
    });
  } else {
    supportedElements.forEach(function(element) {
      $(element).each(function(index, element) {
        $(this).html(injectColor($(this).text()));
      });
    })
  }
  showingColors = showingColors ? false : true; // toggle showingColors on each click
}

/**
* injectColor()
*
* Takes a string of text and returns the string with each character
* wrapped in a span tag
*
* @param {String} text 
* @return {String} newString
*/
function injectColor(text) {
  var colors = {
    "a" : "#df753f",
    "b" : "#792e94",
    "c" : "#d13b56",
    "d" : "#315f92",
    "e" : "#FAE167",
    "f" : "#2DA05C",
    "g" : "#06693F",
    "h" : "#2D9F5F",
    "i" : "#FFFF93",
    "j" : "#764EA9",
    "k" : "#D43C51",
    "l" : "#4D399A",
    "m" : "#DF603F",
    "n" : "#DF803F",
    "o" : "#FFBF93",
    "p" : "#45A686",
    "q" : "#573698",
    "r" : "#C11D1D",
    "s" : "#DF3F3F",
    "t" : "#824BA7",
    "u" : "#BDB6A0",
    "v" : "#647774",
    "w" : "#420C67",
    "x" : "#000000",
    "y" : "#FAD567",
    "z" : "#000000",

    "A" : "#df753f",
    "B" : "#792e94",
    "C" : "#d13b56",
    "D" : "#315f92",
    "E" : "#FAE167",
    "F" : "#2DA05C",
    "G" : "#06693F",
    "H" : "#2D9F5F",
    "I" : "#FFFF93",
    "J" : "#764EA9",
    "K" : "#D43C51",
    "L" : "#4D399A",
    "M" : "#DF603F",
    "N" : "#DF803F",
    "O" : "#FFBF93",
    "P" : "#45A686",
    "Q" : "#573698",
    "R" : "#C11D1D",
    "S" : "#DF3F3F",
    "T" : "#824BA7",
    "U" : "#BDB6A0",
    "V" : "#647774",
    "W" : "#420C67",
    "X" : "#000000",
    "Y" : "#FAD567",
    "Z" : "#000000"
  };

  var newString = '';
  var charArray = text.split('');
  // Wrap each character in a span with its corresponding color
  // If there is no corresponding color, make it black
  charArray.forEach(function(char){
    newString += "<span style='" +
    "color:" + (colors[char] ? colors[char] : "#000") + ";" + 
    "-webkit-text-stroke: 1px rgba(127,127,127,.2);" +
    "'>" + char + "</span>";
  });
  return newString;
}