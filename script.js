let newImageName;
let rightSideElement;


document.addEventListener("DOMContentLoaded", function(){

  rightSideElement = document.querySelector("#right-side");

    for (var i = 0; i < chatMessages.length; i++) {
      createElementProper(chatMessages[i]);
    }


  })

  //inputElement.addEventListener("click", function(){

//  })


let chatMessages = [
  {
    "Sender" : "Al",
    "Message" : "Hello World",
    //"Delay" : "1",
    "Event" : "none",
  },
  {
    "Sender" : "Al",
    "Message" : "Hello World 2",
    //"Delay" : "1",
    "Event" : "none",
  }
];

function createElementProper(incomingJSON) {



  //create card for the whole item
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItemBox');
  newContentElement.style.visibilty = "visible";
  newContentElement.style.padding = "20px",
  newContentElement.style.display = "flex";

  //create box for left inside
  let newContentLeftSide = document.createElement("DIV");
  newContentLeftSide.classList.add('contentLeftSide');
  newContentLeftSide.style.paddingRight = "5px";
  //add to item box
  newContentElement.appendChild(newContentLeftSide);

  //create box for right side
  let newContentRightSide = document.createElement("DIV");
  newContentRightSide.classList.add('contentMessageBox');
  newContentRightSide.style.display = "flex";
  newContentRightSide.style.flexDirection = "column";
  newContentRightSide.style.alignItems = "center";
  //add to item box
  newContentElement.appendChild(newContentRightSide);

  //create Headline
  let newContentHeading = document.createElement("DIV");
  newContentHeading.classList.add('contentSender');
  newContentHeading.style.display = "flex";
  newContentHeading.style.width = "500px";
  newContentHeading.style.fontSize = "xx-large";
  newContentHeading.style.justifyContent = "center";
  newContentHeading.style.padding = "20px";
  newContentHeading.innerText = incomingJSON['Sender'];
  //add headline to the right side
  newContentRightSide.appendChild(newContentHeading);

  //create description box for the right side
  let newContentDesc = document.createElement("DIV");
  newContentDesc.classList.add('contentMessgae');
  newContentDesc.style.display = "flex";
  newContentDesc.style.width = "600px";
  newContentDesc.style.height = "96px";
  newContentDesc.style.justifyContent = "center";
  newContentDesc.style.overflowY = "auto";
  newContentDesc.innerText = incomingJSON['Message'];
  //add to right side
  newContentRightSide.appendChild(newContentDesc);

  //create img for left side
  let newImage = document.createElement("IMG");
  newImage.classList.add("leftIMG");
  newImageName = incomingJSON['Sender'];

  if(newImageName == "Al"){
    newImage.src = "https://picsum.photos/200";
  }
  newImage.style.width = "200px";
  //add image to left side
  newContentLeftSide.appendChild(newImage);

  //add whole item box the page
  rightSideElement.appendChild(newContentElement);

}
