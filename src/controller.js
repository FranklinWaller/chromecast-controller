//The type of event we are gonna listen to.
var clickEvent = 'mousedown';
var arrowKeys = document.getElementsByClassName('arrow');
var castButton = document.getElementById('cast');

//Listening for the arrow press event
function handleArrowKey(e){
  console.log(e.target.id);
  sendMessage(e.target.id);
}

//Attach each element to a listener
for (var i = arrowKeys.length - 1; i >= 0; i--) {
  arrowKeys[i].addEventListener(clickEvent, handleArrowKey, false);
}

//Listening for clicking on the cast button.
castButton.onclick = function(e){

	//Request a chromecast session
	chrome.cast.requestSession(function(e) {
   		session = e;
   		sendMessage('Hello world');
    }, onError);
};