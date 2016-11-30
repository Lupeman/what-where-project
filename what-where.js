var player1;
var player2;
var veggies;
var fruit;
var playArea;
var score;
var gameType;




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

 var fruits = [
["apricot","yellow","fruit"],
["grapefruit","yellow","fruit"],
["lemon","yellow","fruit"],
["pineapple","yellow","fruit"],
["banana","yellow","fruit"],
["apple","green","fruit"],
["cherries","red","fruit"],
["strawberry","red","fruit"],
["watermelon","red","fruit"],
["raspberry","red","fruit"],
["pear","yellow","fruit"],
["grapes","green","fruit"],
["lime","green","fruit"],
["kiwi","green","fruit"],
["coconut","brown","fruit"],
["blueberries","purple","fruit"],
["plum","purple","fruit"],
];

var veggies = [
["corn","yellow","veggie"],
["potato","yellow","veggie"],
["parsnip","yellow","veggie"],
["pumpkin","yellow","veggie"],
["capsicum","yellow","veggie"],
["beetroot","red","veggie"],
["tomato","red","veggie"],
["radish","red","veggie"],
["pepper","red","veggie"],
["onion","red","veggie"],
["broccoli","green","veggie"],
["lettuce","green","veggie"],
["peas","green","veggie"],
["asparagus","green","veggie"],
["cucumber","green","veggie"],
["eggplant","purple","veggie"],
["mushroom","brown","veggie"],
["cabbage","purple","veggie"],
];

var foods = veggies.concat(fruits);
var randomFood = foods[Math.floor(Math.random()*foods.length)];
var foodImage = document.getElementById("foodImage");
var startButton = document.getElementById("startGameBtn");
var area1 = document.getElementsByClassName("green").item(0).className;
var area2 = document.getElementsByClassName("veggie").item(1).className;
var both = document.querySelector(".green.veggie");

function Food(name, color,type){
  this.name = name;
  this.color = color;
  this.type = type;
}
var finalArrayOfObjects =[];
var finalArrayOfObjects = foods.map(function(arr){
return new Food(arr[0],arr[1],arr[2]);
});


startButton.addEventListener("click", function(){
  foodImage.src="images/" + randomFood[0] + ".png";
  foodImage.classList.add(randomFood[1]);
  foodImage.classList.add(randomFood[2]);
});



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var foodElement = document.getElementById(data);
    var foodColor = foodElement.classList.item(0);
    var foodType = foodElement.classList.item(1);
    var dropZoneElement = ev.target;
    var dropZoneList = dropZoneElement.classList;
    if(dropZoneList.length < 2){
      var dropZoneClass = dropZoneList[0];
      if(foodColor === dropZoneClass && foodType === area2) {
        var modal = document.getElementById("modal2");
        modal.className = "modal";
        setTimeout(function(){
          modal.className = "close";
        }, 3000);
      }else if(foodColor === dropZoneClass || foodType === dropZoneClass){
        var modal = document.getElementById("modal1");
        modal.className = "modal";
        setTimeout(function(){
          modal.className = "close";
        }, 3000);
      }
      else{
        var modal = document.getElementById("modal2");
        modal.className = "modal";
        setTimeout(function(){
          modal.className = "close";
        }, 3000);
      }
    }else{
      var dropZoneClass = dropZoneElement.className.split(" ");
      var dropZoneColor = dropZoneClass[0];
      var dropZoneType = dropZoneClass[1];
      ev.target.appendChild(document.getElementById(data));
      if(foodColor === dropZoneColor && foodType === dropZoneType) {
        var modal = document.getElementById("modal1");
        modal.className = "modal";
        setTimeout(function(){
          modal.className = "close";
        }, 3000);
      }else{
        var modal = document.getElementById("modal2");
        modal.className = "modal";
        setTimeout(function(){
          modal.className = "close";
        }, 3000);
      }
    }

}
