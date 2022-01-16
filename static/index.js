function calculatePrice(){
let stuffed = document.getElementById('stuff');
let thin = document.getElementById("thin");
let cracker = document.getElementById("crack");
let perperoni = document.getElementById("perp");
let mayonaise = document.getElementById("mayo");
let vegeterian = document.getElementById("vegan");
 let itemList = document.querySelector("#select").value;
 let price = document.querySelector("#price");
 let quantity = document.getElementById("quantity").value;

 let prices = [500, 800,1200];
 let crust = {
   thin: 200,
   stuffed: 350,
   cracker: 300,

 };

 
