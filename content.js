/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command === "updateText")) {
    updateText(sendResponse);
  }
});


/**
* updateText()
*
* Updates website elements and either adds or removes colors
*/
var showingColors = false;
var supportedElements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
function updateText(callback) {
  if (showingColors) {
    //Remove all of the color span tags
    //*This is actually removing all span tags with inline style. need to fix
    $("span").each(function(index, element) {
      $(this).attr('style', '');
    });
    callback("Colors are off!");
  } else {
    // Scan through each supported html element and wrap each character in a span tag
    supportedElements.forEach(function(element) {
      $(element).each(function(index, element) {
        $(this).html(injectColor($(this).text()));
      });
    })
    callback("Colors are on!");
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
    "e" : "#fae167",
    "f" : "#2da05c",
    "g" : "#06693f",
    "h" : "#2d9f5f",
    "i" : "#ffff93",
    "j" : "#764ea9",
    "k" : "#d43c51",
    "l" : "#4d399a",
    "m" : "#df603f",
    "n" : "#df803f",
    "o" : "#ffbf93",
    "p" : "#45a686",
    "q" : "#573698",
    "r" : "#c11d1d",
    "s" : "#df3f3f",
    "t" : "#824ba7",
    "u" : "#bdb6a0",
    "v" : "#647774",
    "w" : "#420c67",
    "x" : "#000000",
    "y" : "#fad567",
    "z" : "#000000",

    "A" : "#df753f",
    "B" : "#792e94",
    "C" : "#d13b56",
    "D" : "#315f92",
    "E" : "#fae167",
    "F" : "#2da05c",
    "G" : "#06693f",
    "H" : "#2d9f5f",
    "I" : "#ffff93",
    "J" : "#764ea9",
    "K" : "#d43c51",
    "L" : "#4d399a",
    "M" : "#df603f",
    "N" : "#df803f",
    "O" : "#ffbf93",
    "P" : "#45a686",
    "Q" : "#573698",
    "R" : "#c11d1d",
    "S" : "#df3f3f",
    "T" : "#824ba7",
    "U" : "#bdb6a0",
    "V" : "#647774",
    "W" : "#420c67",
    "X" : "#000000",
    "Y" : "#fad567",
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