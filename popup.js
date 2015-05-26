document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null, function(tab){
        var checkpageButton = document.getElementById('checkpage');
        checkpageButton.addEventListener('click', function() {
            $('#checkpage').toggleClass('stop-button');
            chrome.tabs.sendMessage(
              tab.id,
              { command: "updateText" },
              function(msg) {
                console.log("result message:", msg);
              }
            );
        });
    });
});
