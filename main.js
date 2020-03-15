//Vacation function which create a object
function Vacation (name, price, rating, location, rooms, availability, features) {
  this.name = name;
  this.price = price;
  this.rating = rating;
  this.location = location;
  this.rooms = rooms;
  this.availability = availability;
  this.features = features;
}
//description function for Vaction object to display information
Vacation.prototype.description= function () {
  let main = document.querySelector('main');
  let newP = document.createElement('p');
  newP.id = "information";
  let sentence ="The " + this.name + ", It is a " + this.rating + " property, which cost you $" + this.price + ". It is located at " + this.location + " and it has " + this.rooms +
  " rooms inside. You can also enjoy yourself with its " + this.features + " features.";
  newP.innerHTML = sentence;
  main.appendChild(newP);
  console.log(sentence);
};
//checkavailability function
Vacation.prototype.checkavailability= function () {
  let main2 = document.querySelector('main');
  let newP2 = document.createElement('p');
  newP2.id = "information";
  let sentence2 = this.name + " now is " + this.availability + " .";
  newP2.innerHTML = sentence2;
  main2.appendChild(newP2);
  console.log(sentence2);
};

let downtownCondo = new Vacation('Downtown Condo', 278, 4.8,'Toronto',4,'available',['Spa','Swimpool']);
let midtownHouse = new Vacation('MidTown House', 150, 4.2,'Toronto',5,'unavailable','Hot tub');

function Specail(name, price, rating, location, rooms, availability, features,specailrate){
  Vacation.call(name, price, rating, location, rooms, availability, features);
  this.name = name;
  this.price = price*specailrate;
  this.rating = rating;
  this.location = location;
  this.rooms = rooms;
  this.availability = availability;
  this.features = features;
  this.specailrate = specailrate;
}
Specail.prototype = Object.create(Vacation.prototype);
let uptownCondo = new Specail('Uptown Specail rate Condo ', 200, 4.5,'Toronto',2,'available',['Spa','Swimpool'],0.8);

function Superhost(name, price, rating, location, rooms, availability, features,superrate){
  Vacation.call(name, price, rating, location, rooms, availability, features);
  this.name = name;
  this.price = price;
  this.rating = superrate;
  this.location = location;
  this.rooms = rooms;
  this.availability = availability;
  this.features = features;
}
Superhost.prototype = Object.create(Vacation.prototype);
let westtownCondo = new Superhost('WestTown Condo', 300,  5.0,'Toronto',2,'unavailable',['Fitness','Swimpool'],'Super Host');

var downtown = document.getElementById('Downtown');
downtown.addEventListener('click', function () {
    downtownCondo.description();
    downtownCondo.checkavailability();
});
var midtown = document.getElementById('Midtown');
midtown.addEventListener('click', function () {
    midtownHouse.description();
        midtownHouse.checkavailability();
});
var uptown = document.getElementById('Uptown');
uptown.addEventListener('click', function () {
    uptownCondo.description();
        uptownCondo.checkavailability();
});
var westtown = document.getElementById('Westtown');
westtown.addEventListener('click', function () {
    westtownCondo.description();
        westtownCondo.checkavailability();
});



var reset = document.getElementById('Reset');
reset.onclick = resetall;
function resetall() {
    const information = document.getElementById('information');
    information.remove();
}
