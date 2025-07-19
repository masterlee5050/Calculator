let x = 10 ;
let y = x++
class  Car{
car = "hello";
car2 = 67;
constructor(h,b,car ="u"){
this.h = h;
this.b = b;
this.car = car;
}
static hh(){
console.log(this.h,this.car,this.b)
}
}
let carL = new Car("hell","world");
Car.hh(carL);
let array2 = [71,0,3,4,5,7];
let [a,b,...c] = array2;
let array2sort = array2.toSorted()
console.log(array2sort)
let gg = Array.from(array2);
for (bb of array2){
    console.log(bb)
}