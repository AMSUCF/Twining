numOptions = 5;

function generate(){
	t = "";
	switch(r(numOptions)){

		case 0:
			//You wake up
			t += "you " + g("think you're awake,cease to dream,open your good eye")
			break;
		case 1:
			//Somewhere nearby is the sound of a chainsaw
			t += "somewhere " + g("nearby,far away,not here");
			t += " is the " + g("sound of a chainsaw,smell of mahogany,country of smiles");
			break;
		case 2:
			//You can smell woodsmoke
			t += "you can smell " + g("woodsmoke,begonias,an elephant")
			break;
		case 3:
			//You remember there was a bonfire
			t += "you " + g("forget,remember,imagine");
			t += " there was a " + g("bonfire,search party,barn raising");
			break;
		case 4:
			//The chaplain says go back to sleep
			t += "the " + g("chaplain,barrista,walrus");
			t += " says " + g("go back to sleep,dream more carefully,walk on");
			break;
	}
	return t;
}

function g(sourceString){
	theArray = sourceString.split(",");
	return theArray[r(theArray.length)];
}

function r(range){
	return Math.floor(Math.random()*range);
}

function outIt(what){
	document.getElementById("out").innerHTML += what + "<br>";
}
