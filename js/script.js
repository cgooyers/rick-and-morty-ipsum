
var anatomyPark = ["Whatever you do, do not fire that thing in here!", "It's alright, my dear. Nearly all human lungs contain a strain of these bacteria, but the scar tissue keeps them... dormant.", "Oh man, w-wh-what is that horrible smell?", "You mean the Panda Express? Hah... kidding, I'm kidding.", "The body is beginning to constrict and fill with gas.", "We're inside a corpse, my boy.", "Anatomy Park is doomed.", "Reports from all over the country have been coming in about what appears to be a giant naked man over the Continental United States.", "Reports from all over the country have been coming in about what appears to be a giant naked man over the Continental United States.", "Aw geez, Rick, w-what are you doing, man?", "Hah, have you been drinking, Rick?", "We've got feet here on the West Coast, Bill!", "That's okay! I'm Mr. Meeseeks!", "Look at me!", "Try again and keep your head down!", "Square my shoulder or keep my head down!?", "Well, it's both, but most importantly, you gotta relax!", "Y'know what? ", "Mr. Meeseeks, I don't think this is working. I give up.", "I'm sorry, Jerry, but it doesn't work like that!", "WUBBA LUBBA DUB DUB!!"];

var meeseeks = ["I'm Mr. Meeseeks!", "I have to fulfil my purpose so I can go away!", "Well, make yourself comfortable because I suck.", "No, Jerry—I'm the one who SUCKS!", "There's little staircase-shaped people in here!", "Y'know, it's whimsical and fun.", "OKAY, JERRY, YOU GOT TO JUST CHOKE UP ON THE CLUB!", "WELL, WHICH IS IT!?! Choke up or follow-through!?!", "WE'VE BEEN OVER THIS!! YOU KNOW YOU GOT TO DO BOTH!!", "OH, COME ON, JERRY!!", "THIS IS AS FRUSTRATING FOR US AS IT IS FOR YOU!!", "Tiny Rick!!"];

var rickPotion = ["Nobody's killing me until after I catch my wife with another man.", 'I remember feeling that way about a young lady named "your mom".', "And that's not an urban diss—your mom was my Jessica.", "I beg your pardon, Rick. Inappropriate.", "Sorry, please proceed with your story about banging my daughter in high school.", "I'm almost finished making my ionic defibulizer, Morty.", "It's gonna be great.", "Well, I was thinking, y'know...", "Morty, that's such a- poor use of my time, it's beneath me.", "No, Rick! I'm not gonna hand you the screwdriver!", "You're growing up fast, Morty.", "Calm down, Morty!", "I can't deal with this, Rick! ", "I just had to find one of those realities in which we also happen to both die around this time.", "Now we can just slip into the place of our dead selves in this reality, and everything'll be fine.", "Now help me with these bodies.", "Look, Morty, I'll grab myself, you grab yourself, okay?", "I mean, that seems like a fair way to divvy it up.", "Rick, what about the reality we left behind?!", "Now pick up your dead self and come on.", "Haste makes waste.", "It's a living nightmare!", "all I wanted you to do was hand me a screwdriver, Morty!", "I'm not the one who-who-who... who haphazardly, y'know, mixed a bunch of nonsense together and created a bunch of Cronenbergs!", "Here we are, Cronenberg Morty!", "A reality where everyone in the world got genetically Cronenberged.", "Yeah, Cronenberg Rick, but y'know, I'm gonna miss Cronenberg World, because everyone was Cronenberged all along like us from the beginning, y'know...", " wish we hadn't genetically ruined Cronenberg World beyond repair like we did, y'know, and turned everyone into regular normal... people just walking around?", "Your planet just got cellphones, and the coverage still sucks!!", "Yeah, yeah, and your species eat sulfur.", "Gazorpazorp-Field"];

var randoms = ["SQUAAAANCH!", "Let's get squanchy!", "Yo! What up my glip glops!", "15 1/2 Grapples!!!", "He's not pressing charges... That's gotta be the 'you shot me' equivalent of not being mad.", "We all got pink eye because you wouldn't stop texting on the toilet.", "Like nothing shady ever happened in a fully furnished office? ", "Then it's time to get your beak wet tonight playa!", "25 shmeckles? I-I-I-I don't even know what that- what is that? Is that a lot?", "I mixed in some Praying Mantis DNA.", "Take off your pants and panties..", "Get schwiftayy!", "This isn't Game of Thrones, Morty", "We're gonna nine eleven this bitch unless Morty gets better math grades!", "What about the reality where Hitler cured cancer, Morty?", "You're not gonna believe this, because it usually never happens, but I made a mistake", "No jumping in the sewer!", "What is this, 90's Conan?", "He's not a hot girl. He can't just bail on his life and set up shop in someone else's.", "Snuffles was my slave name, you can call me snowball because my fur is pretty and white", "Snuffles want to be understood.", "Snuffles need to be understood.", "I'd like to order one large phone with extra phones please. cell phone, no no no rotary... and payphone on half.", "I'd like to order one large sofa chair with extra chair please. high chair, no no no recliner... and wheelchair on half.", "I'd like to order one large person with extra people please. white people, no no no black people... and hispanic on half.", "Is there any place that I can squanch around here?", "Oh, hi, Morty! I'm Krombopulos Michael.", "I have no code of ethics, I will kill anyone, anywhere. Children, animals, old people, doesn't matter. I just love killin'.", "You've got what the intergalactic call a very planetary mindset, Morty.", "I'm not looking for judgement, just a yes or no — can you assimilate a giraffe?", "You shut your mouth, you dirty knife-nipple bastards!!", "Thanks, Mr. Poopybutthole. I always could count on you.", " I can't do that, Sleepy Gary.", "Time to get schwifty in here",];

var random = function(arr) {
	var num = arr.length;
	var random = Math.floor(Math.random() * arr.length);
	return random;
}
// optional function for removing used items 
// function takeItem(arr, index) {
// 	var text = arr[index];
// 	arr.splice(index, 1); 
// 	return text;
// }

function takeRandomItem(arr) {
// returning the removed items
	// return takeItem(arr, random(arr)) || "";
	return arr[random(arr)];
}

function buildLine() {
	return takeRandomItem(anatomyPark) + " " +
		takeRandomItem(meeseeks) + " " +
		takeRandomItem(rickPotion) + " " + " "
		takeRandomItem(randoms);
}

function buildIpsum(numberOfLines) {
	var ipsum = "";
var currentLine;
	for (var i = 0; i < numberOfLines; i++) {
		ipsum += buildLine();
	}
console.log(ipsum + "\n")
	return ipsum;
}

window.onload = function() {
  var template = Handlebars.compile(document.getElementById("ipsum-template").innerHTML);

  document.getElementById("text").innerHTML = template({});
  document.getElementById("generate")
    .addEventListener("click", function(e) {
      e.preventDefault();
      var lines = document.getElementById("lines").value;
      var ipsum = buildIpsum(lines);
      document.getElementById("text").innerHTML = template({ipsum: ipsum});
  })
};