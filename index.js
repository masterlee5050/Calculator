// let x = 10 ;
// let y = x++
// class  Car{
// car = "hello";
// car2 = 67;
// constructor(h,b,car ="u"){
// this.h = h;
// this.b = b;
// this.car = car;
// }
// static hh(){
// console.log(this.h,this.car,this.b)
// }
// }
// let carL = new Car("hell","world");
// Car.hh(carL);
// let array2 = [71,0,3,4,5,7];
// let [a,b,...c] = array2;
// let array2sort = array2.toSorted()
// console.log(array2sort)
// let gg = Array.from(array2);
// for (bb of array2){
//     console.log(bb)
// }
// let arra = [71,0,3,4,5,7].map((bb)=>{
//     return bb;
// });
// console.log(arra)

// class Car1{
//     brand;
//     yrs;
//     year;
//     car;
//     constructor(productD){
//         this.brand = productD.brand;
//         this.yrs = productD.yrs;
//         this.car = productD.car
//         this.year = productD.year;
//     }
// };
// let product = [{
//     brand : "LExus",
//     yrs :  2027,
//     car : "toyota",
//     year : "2019"
// },
// {
//     brand : "LExus",
//     yrs :  2027,

//     car : "toyota",
//     year : "2019"
// },{
//     brand : "LExus",
//     yrs :  2027,

//     car : "toyota",
//     year : "2019"
// },{
//     brand : "LExus",
//     yrs :  2027,

//     car : "toyota",
//     year : "2019"
// },{
//     brand : "LExus",
//     yrs :  2027,

//     car : "toyota",
//     year : "2019"
// },{brand : "LExus",
//     yrs :  2027,
//     car : "toyota",
//     year : "2019"
// }
// ].map((productD)=>{
//    return new Car1(productD)
// });
// for(bb of product){
//     console.log(bb)
// }
// console.log(product,Math.floor(Math.random() * 6));

let js = {
  name: "Joe",
  age: "biden",
  birthD: "1970",
};
let jsperson = `[
  {
    "name": "Master Lee",
    "age": "fourteen",
    "isEmpoly": "true"
  },
  {
    "name": "Lee kong",
    "age": "25",
    "isEmpoly": "true"
  },
  {
    "name": "Master",
    "age": "90",
    "isEmpoly": "false"
  },
  {
    "name": "kia tata",
    "age": "27",
    "isEmpoly": "false"
  }
]`;

// fetch("people.json")
//   .then((repsonse) => repsonse.json())
//   .then((value) => {
//    Array.from(value).forEach((element,index,i) => {
//     console.log(i[index])
//    });
//   });

// 
// window.addEventListener("DOMContentLoaded", fetchData);
let x1 = "ditto";
let x = 1;

let searchEL = document.getElementById("btn-search");
function inputValid() {
  let pokemon = document.getElementById("password");
  if (!pokemon) {
    throw new Error("input is empty");
  }
  let searchPokemen = pokemon.value.toLowerCase();
  pokemon.value = " ";
  return searchPokemen;
}

function fetchPokemonApi() {
  async function fetchData() {
    try {
      let rr = inputValid();
      const repsonse = await fetch(`https://pokeapi.co/api/v2/pokemon/${rr}`);
      if (!repsonse.ok) {
        throw new Error("response ok = false // not found (404)");
      }
      const fetchData = await repsonse.json();
      const pokemonSprite = fetchData.sprites.front_default;
      let imgdisplay = document.getElementById("img-pokemon");
      imgdisplay.src = pokemonSprite;
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}
searchEL.addEventListener("click", fetchPokemonApi);
let pokemon = document.getElementById("password");
pokemon.addEventListener("keydown", (event) => {
  callFetch(event);
});
function callFetch(event) {
  if (event.key === "Enter") {
    fetchPokemonApi();
  }
}

// function display(result) {
//   console.log(result);
// }
// function add(num, num2, display) {
//   let result = num * num2;
//   display(result);
// }
// add(4, 4, display);
