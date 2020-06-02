

let boxs = [
	"Glow in the dark pebbles",
	"~The Potluck~",
	'"Where is the 300$ closet?"',
	"President compares the investigation to a witch hunt",
	"Senators ask why now so many students are showing up to meetings",
	'"No Side Chatter!"',
	"President mentions that she is a black woman",
	'"I need them to function"',
	"SA credit card leaves the office",
	"Going over time",
	'"So are the items going to be auctioned off?"',
	"There's a power point",
	"President compares investigation to verbal abuse",
	"Using SA funds like it's daddy's credit card",
	'"I think its funny how..."',
	'"You realize this is technically grand larceny"',
	"Person of Interest",
	"Trying to get a credit card under someone else's name",
	"Half of the senators are in suits for some reason",
	'"I gave you this position because I thought you would be good at it"',
	"The Color Gold",
	"President Blames BOF for not catching her sooner",
	"President mentions that she has dyslexia",
	"Cheesecake factory",
	"Someone gets caught playing BINGO",
	"The impeachment passes the 2/3s senate vote",
	"Somebody resigns",
	'"Madam President"',
	"incessant banging of the chairman's gavel",
	"6 quarts of milk",
	'"but the comptroller approved these purchases"',
	"character attack",
	"never-used $13 five-subject notebook",
	"The Gladeeeee",
	"POINT OF PERSONAL PRIVLAGE",
	'"Your question is non-relevant"',
	'Chairman questions if he is loud enough',
	"Room exceeds capacity and they stop letting people in",
	"Almost nobody says the pledge of allegiance",
	"Senators are playing bingo",
	"People are airdroping eachother Dee memes"
];

function set(e){
	e.className = e.className == "sel" ? "" : "sel";
}

String.prototype.hashCode = function(){
    if (Array.prototype.reduce){
        return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
    } 
    var hash = 0;
    if (this.length === 0) 
		return hash;
    for (var i = 0; i < this.length; i++) {
        var character  = this.charCodeAt(i);
        hash  = ((hash<<5)-hash)+character;
        hash = hash & hash; //Convert to 32bit integer
    }
    return hash;
}

function shuffle(a, seed){
	srand(seed);
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(rand() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

let internseed = 0;
function srand(x){
	internseed = new String(x).hashCode();
}

function rand(){
    let x = Math.sin(internseed++) * 10000;
    return x - Math.floor(x);
}

function genrand(){
	gencard(Math.random().toString(36).substring(2, 7));
}

function genseed(){
	gencard(document.getElementById("seedin").value);
}

function gencard(seed){
	let cboxs = boxs.slice();
	let str = "<caption> SA Impeachment Bingo </caption>";
	shuffle(cboxs, seed);
	for(let i = 0; i < 5; i++){
		str += "<tr>";
		for(let j = 0; j < 5; j++)
			str += "<td onclick='set(this)'><div class='ti'>" + (i==2 && j==2 ? "Free Space (the president's position)" : cboxs[j + 5 * i]) + "</div></td>";
		str += "</tr>";
	}
	let table = document.getElementById("main");
	table.innerHTML=str;
	let seedcap = document.getElementById("seed");
	seedcap.innerHTML=seed;
}

window.addEventListener('load', function (){
	genrand();
});
