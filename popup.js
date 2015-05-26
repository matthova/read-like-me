var colored = false;

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.getSelected(null, function(tab){
    var checkpageButton = document.getElementById('checkpage');
    checkpageButton.addEventListener('click', function() {
      $('#checkpage').toggleClass('stop-button');

      // As soon as the button is clicked, disable it from being clicked until the script is complete
      $('#checkpage').toggleClass('transition');
      $('#checkpage').text("Coloring!");

      chrome.tabs.sendMessage(
        tab.id,
        { command: "updateText" },
        //This command is called once the script is done coloring all text
        // at this point, update text, remove the transition class and toggle "colored"
        function(msg) {
          colored = colored ? false : true; // toggle colored on each click
          if(colored){
            $('#checkpage').text("Remove Color!");
          } else {
            $('#checkpage').text("Add Color!");
          }
          $('#checkpage').toggleClass('transition');
          console.log("result message:", msg);
        }
      );
    });
  });
});
