let newImageName;
let rightSideElement;
let buttonOverlayElement;
let overlayElement;
let animate;
let mainContentElement;
let alBox;
let alNumMessages = 0;
let inputElement;
let sendButtonElement;
let correctAns;


document.addEventListener("DOMContentLoaded", function(){

  mainContentElement = document.querySelector(".mainContent");
  rightSideElement = document.querySelector("#right-side");
  inputElement = document.querySelector("#message-input");
  sendButtonElement = document.querySelector('#send-button');

  alTime(alMessagesOne);


  sendButtonElement.addEventListener("click", function(){
    isCorrect();
  })





  })


let chatMessagesOne = [
  {
    "Sender" : "George",
    "Message" : "Hello World",
    "Delay" : "1",
    "Event" : "none",
    "id" : "1"
  },
  {
    "Sender" : "George",
    "Message" : "Hello World 2",
    "Delay" : "2",
    "Event" : "none",
  },
  {
    "Sender" : "George",
    "Message" : "Hello World 3",
    "Delay" : "3",
    "Event" : "none",
  },
  {
    "Sender" : "George",
    "Message" : "Hello World 4",
    "Delay" : "4",
    "Event" : ["input", "Yes"]
  }
];

let alMessagesOne = [
  {
    "Sender" : "Al",
    "Message" : "Hello, I'm Cat",
    "Event" : ["none"],
  },
  {
    "Sender" : "Al",
    "Message" : "Nice to meet you",
    "Event" : ["none"],
  }
];

function alTime(database){

  createAlementProper(database[alNumMessages]);

  document.querySelector("#closing-button").addEventListener("click", function(){

    off(database);

  })
}

function off(database) {
  alBox = document.querySelector("#contentAlBox");
  alBox.remove();
  alNumMessages = alNumMessages + 1;
  if(alNumMessages < database.length){
    alTime(database);
  } else {
    alNumMessages = 0;
    for (var i = 0; i < chatMessagesOne.length; i++) {
      createElementProper(chatMessagesOne[i]);
    }
  }
}

function createElementProper(incomingJSON) {


  //create card for the whole item
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItemBox');
  newContentElement.style.visibilty = "visible";
  newContentElement.style.padding = "20px";
  newContentElement.style.display = "flex";
  newContentElement.style.marginLeft = "-100vh";
  newContentElement.style.transition = "transform 1s ease-out";

  //create box for left inside
  let newContentLeftSide = document.createElement("DIV");
  newContentLeftSide.classList.add('contentLeftSide');
  //newContentLeftSide.style.padding = "5px";
  //add to item box
  newContentElement.appendChild(newContentLeftSide);

  //create box for right side
  let newContentRightSide = document.createElement("DIV");
  newContentRightSide.classList.add('contentMessageBox');
  newContentRightSide.style.display = "flex";
  newContentRightSide.style.flexDirection = "column";
  //newContentRightSide.style.alignItems = "center";
  //add to item box
  newContentElement.appendChild(newContentRightSide);

  //create Headline
  let newContentHeading = document.createElement("DIV");
  newContentHeading.classList.add('contentSender');
  newContentHeading.style.display = "flex";
  newContentHeading.style.width = "300px";
  newContentHeading.style.fontSize = "xx-large";
  newContentHeading.style.textDecoration = "underline";
  //newContentHeading.style.justifyContent = "center";
  newContentHeading.style.padding = "5px";
  newContentHeading.innerText = incomingJSON['Sender'];
  //add headline to the right side
  newContentRightSide.appendChild(newContentHeading);

  //create description box for the right side
  let newContentDesc = document.createElement("DIV");
  newContentDesc.classList.add('contentMessage');
  newContentDesc.style.display = "flex";
  newContentDesc.style.width = "400px";
  //newContentDesc.style.height = "56px";
  newContentDesc.style.marginTop = "5px";
  newContentDesc.style.paddingLeft = "5px";
  //newContentDesc.style.justifyContent = "center";

  newContentDesc.innerText = incomingJSON['Message'];
  //add to right side
  newContentRightSide.appendChild(newContentDesc);

  //create img for left side
  let newImage = document.createElement("IMG");
  newImage.classList.add("leftIMG");
  newImageName = incomingJSON['Sender'];

  if(newImageName == "George"){
    newImage.src = "https://picsum.photos/80";
  }
  newImage.style.width = "80px";
  //add image to left side
  newContentLeftSide.appendChild(newImage);

  //add whole item box the page
  rightSideElement.appendChild(newContentElement);

  window.setInterval(addTransform, ((incomingJSON['Delay'] * 1000)));

  if(incomingJSON.Event[0] == "input"){
    correctAns = incomingJSON.Event[1];
  }

  function addTransform(){
    newContentElement.style.transform = "translate(100vh)";
  }

}

function createAlementProper(incomingJSON){

  //create whole cube
  let newContentWhole = document.createElement("DIV");
  newContentWhole.setAttribute('id','contentAlBox');
  newContentWhole.style.display = "flex";
  newContentWhole.style.position = "absolute";
  newContentWhole.style.marginTop = "55vh";
  newContentWhole.style.height = "40vh";
  newContentWhole.style.width = "99.8%";
  newContentWhole.style.zIndex = "2";
  newContentWhole.style.flexDirection = "row-reverse";
  newContentWhole.style.backgroundColor = "white";

  //create closing
  let newClosingElement = document.createElement("BUTTON");
  newClosingElement.setAttribute('id', 'closing-button');
  newClosingElement.innerText = "X";
  newClosingElement.style.height = "50px";
  newClosingElement.style.width = "50px";
  //add closing to cube
  newContentWhole.appendChild(newClosingElement);

  //create Anim
  newImageName = incomingJSON['Sender'];
  if(newImageName == "Al"){
    let newImageAl = document.createElement("IMG");
    newImageAl.src = "ALGIF_v002.gif";
    newImageAl.classList.add("AlIMG");
    newImageAl.style.width = "400px";
    newImageAl.style.height = "300px";

    //add Anim to cube
    newContentWhole.appendChild(newImageAl);
  }

  //create Message
  newContentMessage = document.createElement("DIV");
  newContentMessage.classList.add("contentMessageAl");
  newContentMessage.style.display = "flex";
  newContentMessage.style.width = "60%";
  newContentMessage.style.height = "40%";
  newContentMessage.style.marginTop = "5%";
  newContentMessage.style.justifyContent = "center";
  newContentMessage.innerText = incomingJSON['Message'];

  //add message to cube
  newContentWhole.appendChild(newContentMessage);



  //add cube to page
  mainContentElement.appendChild(newContentWhole);

}

function isCorrect(){
  var ansName = inputElement.value;

  if(ansName == correctAns){
    //next part
    console.log("Correct!" + " " + ansName + " " + correctAns);
  } else {
    //do a shake
    console.log("No!" + " " + ansName + " " + correctAns);
  }
}

/*
function createInput(){

  let newInputElement = document.createElement("INPUT");
  newInputElement.setAttribute("id", "addText");
  newInputElement.setAttribute("type", "text");

  //add to right side of the page
  rightSideElement.appendChild(newInputElement);

}
*/
