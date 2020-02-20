var viewMode = false;
var indexMode = 0;

function getElement(index) {
    var element = window.ContentFrame.document.getElementById("x" + window.ContentFrame.answerIds[index]);
    element.click(); //remove this line to remove auto-click
    if (viewMode == false) {
        window.document.title = element.innerText;
    }
    else {
        element.style.borderStyle = "dashed"
        element.style.borderColor = "magenta"
    }
}

window.ContentFrame.addEventListener('keydown', function(event) {
    if(event.keyCode == 187) {
         if (viewMode == false) {
             viewMode = true;
         }
         else {
             viewMode = false;
         }
      }
    if(event.keyCode == 192) {
        getElement(indexMode);
      }
      switch (event.keyCode)
      {
          case 48:
          indexMode = 0;
          break;
          case 49:
          indexMode = 1;
          break;
          case 50:
          indexMode = 2;
          break;
          case 51:
          indexMode = 3;
          break;
      }
});
