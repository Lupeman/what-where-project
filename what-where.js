var player1;
var player2;
var gameType;
var randomFood;




// var fruitKeys = Object.keys(Food);


//Migrate fruits object into an array.

//1.Create my fruits object:

// var fruits = {
//     apricot: "yellow",
//     grapefruit: "yellow",
//     lemon: "yellow",
//     pineapple: "yellow",
//     banana: "yellow",
//     red-apple: "red",
//     cherries: "red",
//     strawberry: "red",
//     watermelon: "red",
//     raspberry: "red",
//     pear: "yellow",
//     grapes: "green",
//     green-apple: "green",
//     lime: "green",
//     kiwi: "green",
//     apple: "green",
//     coconut: "brown",
//     blueberries: "purple",
//     plum: "purple",
// };

//2. Find values of each key and push them (key and value and add type("fruit") to an empty array(fruitArray).
//Then split strings and push into new array (fruitArray2)

// var fruitArray = [];
// var fruitArray2 = [];

// Object.getOwnPropertyNames(fruits).map(function(name) {
//   fruitArray.push(name + " " + fruits[name] + " " + "fruit");
// })

// for(var i = 0; i < fruitArray.length; i++){
// var str = fruitArray[i];
// var newString = str.split(" ")
// fruitArray2.push(newString);
// }
// console.log(fruitArray2);

//1.Create my veggies object:

// var veggies = {
//   corn:"yellow",
//   potato:"yellow",
//   parsnip:"yellow",
//   pumpkin:"yellow",
//   capsicum:"yellow",
//   beetroot:"red",
//   tomato:"red",
//   radish:"red",
//   pepper:"red",
//   onion:"red",
//   broccoli:"green",
//   lettuce:"green",
//   peas:"green",
//   asparagus:"green",
//   cucumber:"green",
//   eggplant:"purple",
//   mushroom:"brown",
//   cabbage:"purple",
// }
//
// //2. Find values of each key and push them (key and value and add type("veggie") to an empty array(veggieArray).
//Then split strings and push into new array (veggieArray2)

// var veggieArray = [];
// var veggieArray2 = [];
//
// Object.getOwnPropertyNames(veggies).map(function(name) {
//   veggieArray.push(name + " " + veggies[name] + " " + "veggie");
// })
//
// for(var i = 0; i < veggieArray.length; i++){
// var str = veggieArray[i];
// var newString = str.split(" ")
// veggieArray2.push(newString);
// }
// console.log(veggieArray2);

//Create 2-dimensional array and log to console to be able to copy and assign to a variable.
// var output = '[\n';
// veggieArray2.forEach(function(arr){
//   output += '["';
//   output += arr.join('","');
//   output += '"],\n'
// })
// output += ']';
//  console.log(output);

//My fruit Object
var fruits = [
    ["apricot", "yellow", "fruit"],
    ["grapefruit", "yellow", "fruit"],
    ["lemon", "yellow", "fruit"],
    ["pineapple", "yellow", "fruit"],
    ["banana", "yellow", "fruit"],
    ["green-apple", "green", "fruit"],
    ["cherries", "red", "fruit"],
    ["strawberry", "red", "fruit"],
    ["watermelon", "red", "fruit"],
    ["raspberry", "red", "fruit"],
    ["red-apple", "red", "fruit"],
    ["pear", "yellow", "fruit"],
    ["grapes", "green", "fruit"],
    ["lime", "green", "fruit"],
    ["kiwi", "green", "fruit"],
    ["coconut", "brown", "fruit"],
    ["blueberries", "purple", "fruit"],
    ["plum", "purple", "fruit"],
];

//My veggie Object
var veggies = [
    ["corn", "yellow", "veggie"],
    ["potato", "yellow", "veggie"],
    ["parsnip", "yellow", "veggie"],
    ["pumpkin", "yellow", "veggie"],
    ["capsicum", "yellow", "veggie"],
    ["beetroot", "red", "veggie"],
    ["tomato", "red", "veggie"],
    ["radish", "red", "veggie"],
    ["pepper", "red", "veggie"],
    ["onion", "red", "veggie"],
    ["broccoli", "green", "veggie"],
    ["lettuce", "green", "veggie"],
    ["peas", "green", "veggie"],
    ["asparagus", "green", "veggie"],
    ["cucumber", "green", "veggie"],
    ["eggplant", "purple", "veggie"],
    ["mushroom", "brown", "veggie"],
    ["cabbage", "purple", "veggie"],
];

//Concatonate the Objects to make foods Object
var foods = veggies.concat(fruits);

//Find random food array for player to move



var startButton = document.getElementById("startGameBtn");
var area1 = document.getElementsByClassName("green").item(0).className;
var area2 = document.getElementsByClassName("veggie").item(1).className;
var both = document.querySelector(".green.veggie");
var other = document.getElementsByClassName("other").item(0).className;

// function Food(name, color, type) {
//     this.name = name;
//     this.color = color;
//     this.type = type;
// }
// // // var finalArrayOfObjects = [];
// // var finalArrayOfObjects = foods.map(function(arr) {
// //     return new Food(arr[0], arr[1], arr[2]);
// // });

//When we click on start button - assign correct image to randomFood element. Then
//add appropriate classes.
startButton.addEventListener("click", function() {
    randomFood = foods[Math.floor(Math.random() * foods.length)];
    var foodName = randomFood[0];
    var newFoodDOMElement = document.createElement("img");
    newFoodDOMElement.setAttribute("id", foodName);
    // newFoodDOMElement.setAttribute("draggable", "true");
    var dOMElementToAttachImage = document.getElementById("imageWrapper");
    dOMElementToAttachImage.appendChild(newFoodDOMElement);
    var foodImage = document.getElementById(foodName);
    foodImage.src = "images/" + randomFood[0] + ".png";
    foodImage.classList.add(randomFood[1]);
    foodImage.classList.add(randomFood[2]);
    foodImage.classList.add("regularImage");
    foodImage.addEventListener('dragstart', drag);
    // foodImage.style.cssText = "width:150px; height:auto; border:none";
});

//Negate the default to allow items to be dropped on that space.
function allowDrop(ev) {
    ev.preventDefault();
}
//Set data on the event

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //get DOM Node for the draggable element (foodImage)
    var foodElement = document.getElementById(data);
    //find and assign class names of the element
    var foodColor = foodElement.classList.item(0);
    var foodType = foodElement.classList.item(1);
    //get element of where we are dropping the image
    var dropZoneElement = ev.target;
    //if there is only 1 class
    if (dropZoneElement.nodeName !== "DIV"){
      dropZoneElement = dropZoneElement.parentElement;
    }
    foodElement.className = "droppedImageSize";
    //get classes for that element.
    var dropZoneList = dropZoneElement.classList;
    if (dropZoneList.length < 2) {
        var dropZoneClass = dropZoneList[0];
        if ((foodColor === dropZoneClass && foodType === area2) || (foodColor === area1 && foodType === dropZoneClass))
        {
            var modal = document.getElementById("modal2");
            modal.className = "modal";
            setTimeout(function() {
                modal.className = "close";
            }, 1500);
        } else if (foodColor === dropZoneClass || foodType === dropZoneClass) {
            var modal = document.getElementById("modal1");
            modal.className = "modal";
            setTimeout(function() {
                modal.className = "close";
            }, 1500);
            ev.target.appendChild(document.getElementById(data));
            var indexOfRandomFood = foods.indexOf(randomFood);
            foods.splice(indexOfRandomFood, 1);
        } else if (foodColor !== area1 && foodType !== area2){
          var modal = document.getElementById("modal1");
          modal.className = "modal";
          setTimeout(function() {
              modal.className = "close";
          }, 1500);
          ev.target.appendChild(document.getElementById(data));
          var indexOfRandomFood = foods.indexOf(randomFood);
          foods.splice(indexOfRandomFood, 1);
        }
        else {
            var modal = document.getElementById("modal2");
            modal.className = "modal";
            setTimeout(function() {
                modal.className = "close";
            }, 1500);
        }
    } else {
        var dropZoneClass = dropZoneElement.className.split(" ");
        var dropZoneColor = dropZoneClass[0];
        var dropZoneType = dropZoneClass[1];
        if (foodColor === dropZoneColor && foodType === dropZoneType) {
            var modal = document.getElementById("modal1");
            modal.className = "modal";
            setTimeout(function() {
                modal.className = "close";
            }, 1500);
            ev.target.appendChild(document.getElementById(data));
            var indexOfRandomFood = foods.indexOf(randomFood);
            foods.splice(indexOfRandomFood, 1);
        } else {
            var modal = document.getElementById("modal2");
            modal.className = "modal";
            setTimeout(function() {
                modal.className = "close";
            }, 1500);
        }
    }

}
