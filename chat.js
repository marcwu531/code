document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            /*let input = inputField.value;
            inputField.value = "";
            output(input);*/
        let input = document.getElementById("input").value;
        document.getElementById("user").innerHTML = input;
        output(input);
    }
  });
});

function output(input) {

//remove all characters except word characters, space, and digits
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

// 'tell me a story' -> 'tell me story'
// 'i feel happy' -> 'happy'
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");
    
    if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/robot/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
  
  /*document.getElementById("chatbot").innerHTML = product;
    speak(product);

    //clear input value
    document.getElementById("input").value = "";
}
}*/
}

const trigger = [
//0 
["hi", "hey", "hello"],
//1
["how are you"/*, "how are things"*/],
//2
["what is going on", "what is up"],
//3
["happy", "good", "well", "fantastic", "cool"],
//4
["bad", "bored", "tired", "sad"],
//5
["tell me story", "tell me joke"],
//6
["thanks", "thank you"],
//7
["bye", "good bye", "goodbye"]
];

const reply = [
//0 
["Hello!", "Hi!", "Hey!", "Hi there!"], 
//1
[
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
//2
[
    "Nothing much",
    "Exciting things!"
  ],
//3
["Glad to hear it"],
//4
["Why?", "Cheer up buddy"],
//5
["What about?", "Once upon a time..."],
//6
["You're welcome", "No problem"],
//7
["Goodbye", "See you later"],
];

const alternative = [
  "Same",
  "Go on...",
  "Try again",
  "I'm listening...",
  "Bro..."
];

function compare(triggerArray, replyArray, text) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == text) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);
  speak(product);
}

//let ans;
/*function chat() {
    //ans = prompt("","");
    /*if(ans == "HI"){
        alert("Hi");
    }*/
    /*var chatletter = document.getElementById("chatbutton");
    chatletter.value = ans;
    alert("Test");
}*/

//var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/