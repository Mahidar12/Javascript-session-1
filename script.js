console.log("Hello world")
//variable type of strings
var self= "jay"
console.log(self + " is studying in jct college of engineering & technology ")
//variable type of integers
var age = 22
console.log(" his age is " + age)
//variable type of float
var grade= 9.5
console.log(" his grade is " + grade)
//variable type is boolean
console.log(true)
//area of circle
function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
   var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));

//area of a circumference
var circleRadius = parseInt(prompt("Please enter the radius of circle:"));
let circumferenceOfCircle = 2 * Math.PI * circleRadius;
console.log("Circumference of circle is: " + circumferenceOfCircle);

//radius of a circle
function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}




