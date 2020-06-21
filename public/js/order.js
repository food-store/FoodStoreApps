

// Nombres des personnes

let addperson = document.getElementById('addperson')
let deleteperson = document.getElementById('deleteperson')
addperson.addEventListener('click', addNumber)
deleteperson.addEventListener('click', deleteNumber)


function  addNumber() {
	let nbr = document.getElementById('nbr_person')
	let person = document.getElementById('menuPersonne')
	let nbrPerson = parseInt(nbr.dataset.person)

// function for entreee
var entreeArray = []
let entrees = document.querySelectorAll('.entrees')
entrees.forEach(entree => {
	entreeArray.push(entree.dataset.entrees)	
})
var html = " "
for (var i = 0; i < entreeArray.length; i++) {
	html = html+"<ul> <input type=\"checkbox\" id='"+entreeArray[i]+nbrPerson+"'><label for='"+entreeArray[i]+nbrPerson+"'>"+entreeArray[i]+"</label></ul>"
}

// function for resistances
var resistanceArray = []
let resistances = document.querySelectorAll('.resistances')
resistances.forEach(resistance => {
	resistanceArray.push(resistance.dataset.resistances)	
})
var htmlRes = " "
for (var i = 0; i < resistanceArray.length; i++) {
	htmlRes = htmlRes+"<ul> <input type=\"checkbox\" id='"+resistanceArray[i]+nbrPerson+"'><label for='"+resistanceArray[i]+nbrPerson+"'>"+resistanceArray[i]+"</label></ul>"
}


// function for desserts
var dessertArray = []
let desserts = document.querySelectorAll('.desserts')
desserts.forEach(dessert => {
	dessertArray.push(dessert.dataset.desserts)	
})
var htmlDessert = " "
for (var i = 0; i < dessertArray.length; i++) {
	htmlDessert = htmlDessert+"<ul> <input type=\"checkbox\" id='"+dessertArray[i]+nbrPerson+"'><label for='"+dessertArray[i]+nbrPerson+"'>"+dessertArray[i]+"</label></ul>"
}

nbrPerson += 1
nbr.dataset.person = nbrPerson 
nbr.textContent = nbrPerson
let div1 = document.createElement("div")
div1.classList.add('personne_'+nbrPerson)
div1.innerHTML = '<h3>Personne n°'+nbrPerson+'</h3><div class="row"><div class="col-sm-4"><h4>Entrée</h4>'+html+'</div><div class="col-sm-4"><h4>Résistance</h4>'+htmlRes+'</div><div class="col-sm-4"><h4>Dessert</h4>'+htmlDessert+'</div></div><hr>'
person.appendChild(div1)

}

function  deleteNumber() {
	let nbr = document.getElementById('nbr_person')
	let nbrPerson = parseInt(nbr.dataset.person)
	let personadeleters = document.querySelectorAll('.personne_'+nbrPerson)
	personadeleters.forEach(personadeleter => {
		personadeleter.parentNode.removeChild(personadeleter);
	})

	if (nbrPerson > 0) {
		nbrPerson -= 1
		nbr.dataset.person = nbrPerson 
		nbr.textContent = nbrPerson
		
	}
}




