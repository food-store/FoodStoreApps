


// Nombres des personnes

let addperson = document.getElementById('addperson')
let deleteperson = document.getElementById('deleteperson')
addperson.addEventListener('click', addNumber)
deleteperson.addEventListener('click', deleteNumber)
verifySession()

function ajoutPersonne(){ /*incremente la valeur inc pour les params*/
	let nbrePerson = JSON.parse(sessionStorage.getItem("nbrePerson"))
	nbrePerson++
	sessionStorage.setItem("nbrePerson",JSON.stringify(nbrePerson))
	return nbrePerson
}

// initialiser la session
function initSession(){
	let id_resto = document.getElementById('form-data').dataset.resto
	sessionStorage.setItem("resOrders","[]")
	sessionStorage.setItem("nbrePerson","0")
	sessionStorage.setItem("resto",""+id_resto+"")
	sessionStorage.setItem("arrayForEachPrice","[]")

}

// verifier si la session est vide ou pas
function verifySession(){
	let isHasMenu = false
	let resOrders = sessionStorage.getItem("resOrders")
	let nbrePerson = sessionStorage.getItem("nbrePerson")

	if (resOrders == null || resOrders == "" || nbrePerson == null || nbrePerson == 0){
		initSession()
		return
	}else{
		if (resOrders != null && resOrders != "") {
			resOrders = JSON.parse(resOrders)
			for (var i = resOrders.length - 1; i >= 0; i--) {
				if (resOrders[i].id == null && resOrders[i].entree == "" && resOrders[i].resistance == "" && resOrders[i].dessert == "" ) {
					resOrders.splice(i,1) // null ny commande
				}else{
					isHasMenu = true //nisy commande
				}
			}
			sessionStorage.setItem("resOrders",JSON.stringify(resOrders))
		}	
	}
	if (isHasMenu) {
		ifClientActualisePage()
	}
	else{
		initSession()
	}
}

function  addNumber() {

	// Incrementer le nombres
	let nbr = document.getElementById('nbr_person')
	let nbrPerson = ajoutPersonne()
	nbr.dataset.person = nbrPerson 
	nbr.textContent = nbrPerson
	let id = nbrPerson // Augmente 1 la session
	let sessionMenu = JSON.parse(sessionStorage.getItem("resOrders"))
	sessionMenu.push({id:id,entree:[],resistance:[], dessert:[]})
	sessionStorage.setItem("resOrders",JSON.stringify(sessionMenu))

	actualiseDomMenu(id)
}

	// Modification dans le DOM html
	function actualiseDomMenu(id,data=""){
		let nbrPerson = id
		let person = document.getElementById('menuPersonne')
		let div1 = document.createElement("div")
		div1.classList.add('personne_'+nbrPerson)
		if (data != "") {
		// [spa[i].id,spa[i].time,spa[i].option,spa[i].info]
		div1.innerHTML = valueToHtmlMenu(data.id,data.entree, data.resistance, data.dessert)
	}else{
		div1.innerHTML = valueToHtmlMenu(id)	
	}
	person.appendChild(div1)

	// Ajout des sous element dans la session 
	let menuRes = document.querySelectorAll(".checkbox_menus")
	menuRes.forEach(resi => {
		resi.addEventListener('change',checkMenu);

	});

	// Ajout dans le panier
	addResInOrder(id)
}

// fonction principale ajout panier Resistance
function addResInOrder(id){
	let divRes = document.getElementById("res-order")
	let div = document.createElement("div")
	div.classList = "res-order"
	div.setAttribute("id","res-list-"+id)
	div.innerHTML = "<h5>Menus personne"+id+" : <span id = \"price_personne"+id+"\" data-price = \"0\" class=\"class_for_total_price\">0 Ar</span></h5><ul><span id = \"entree_personne"+id+"\"></span><span id = \"resistance_personne"+id+"\"></span><span id = \"dessert_personne"+id+"\"></span></ul>"
	divRes.appendChild(div)
}

// Ajouter  entrées resistances et desserts dans l'html
function valueToHtmlMenu(id, entree="", resistance="", dessert=""){
	
	let nbrPerson = id
	let dataHtmlForm = JSON.parse(document.getElementById('form-data').dataset.menus)
	let htmlEnt = ""
	let htmlRes = ""
	let htmlDes = ""
	for (var i = 0; i < dataHtmlForm.length; i++) {

		if (dataHtmlForm[i][0] == "Entrée") {

			if (entree.includes(dataHtmlForm[i][5])) {

				htmlEnt = htmlEnt+"<input checked class=\"checkbox_menus\" data-id = \""+nbrPerson+"\" data-idmenus = \""+dataHtmlForm[i][5]+"\" type=\"checkbox\" id='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'><label for='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'>"+dataHtmlForm[i][1]+"</label>"

			}
			else{
				htmlEnt = htmlEnt+"<input class=\"checkbox_menus\" data-id = \""+nbrPerson+"\" data-idmenus = \""+dataHtmlForm[i][5]+"\" type=\"checkbox\" id='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'><label for='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'>"+dataHtmlForm[i][1]+"</label>"

			}
		}

		if (dataHtmlForm[i][0] == "Résistance") {
			if (resistance.includes(dataHtmlForm[i][5])) {
				htmlRes = htmlRes+"<input checked class=\"checkbox_menus\" value = \""+dataHtmlForm[i][1]+"\" data-id = \""+nbrPerson+"\" data-idmenus = \""+dataHtmlForm[i][5]+"\"  type=\"checkbox\" id='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'><label for='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'>"+dataHtmlForm[i][1]+"</label>"
			}
			else {
				htmlRes = htmlRes+"<input class=\"checkbox_menus\" value = \""+dataHtmlForm[i][1]+"\" data-id = \""+nbrPerson+"\" data-idmenus = \""+dataHtmlForm[i][5]+"\" type=\"checkbox\" id='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'><label for='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'>"+dataHtmlForm[i][1]+"</label>"
			}
		}

		if (dataHtmlForm[i][0] == "Dessert") {
			if (dessert.includes(dataHtmlForm[i][5])) {
				htmlDes = htmlDes+"<input checked class=\"checkbox_menus\" data-id = \""+nbrPerson+"\" data-idmenus = \""+dataHtmlForm[i][5]+"\" type=\"checkbox\" id='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'><label for='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'>"+dataHtmlForm[i][1]+"</label>"

			} 

			else {}
				htmlDes = htmlDes+"<input class=\"checkbox_menus\" data-id = \""+nbrPerson+"\" data-idmenus = \""+dataHtmlForm[i][5]+"\" type=\"checkbox\" id='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'><label for='"+dataHtmlForm[i][0]+dataHtmlForm[i][5]+nbrPerson+"'>"+dataHtmlForm[i][1]+"</label>"
		}
	}
	let menuTitle = '<h3>Personne n°'+id+'</h3><div class="row"><div class="col-sm-4"><h4>Entrée</h4><ul data-ent=\"\">'+htmlEnt+'</ul></div><div class="col-sm-4"><h4>Résistance</h4><ul data-res=\"\" id=\"res_pers'+id+'\">'+htmlRes+'</ul></div><div class="col-sm-4"><h4>Dessert</h4><ul data-des=\"\">'+htmlDes+'</ul></div></div><hr>'
	return menuTitle
}

// Si on selecte des menus
function checkMenu(){
	let id = JSON.parse(this.dataset.id)
	let idmenus = JSON.parse(this.dataset.idmenus)
	let tab = ["entree", "resistance", "dessert"]

	let all_menus = JSON.parse(document.getElementById('form-data').dataset.menus)
	let sessionRes = JSON.parse(sessionStorage.getItem("resOrders"))
	let listMen = []
	if (this.checked) {
		for (var i = sessionRes.length - 1; i >= 0; i--) {
			if (sessionRes[i].id == id) {

				for (var j = 0; j < all_menus.length; j++) {
					if (all_menus[j][5] == idmenus && all_menus[j][0] == "Résistance") {
						sessionRes[i].resistance.push(idmenus)

					}
					if (all_menus[j][5] == idmenus && all_menus[j][0] == "Entrée") {
						sessionRes[i].entree.push(idmenus)
					}

					if (all_menus[j][5] == idmenus && all_menus[j][0] == "Dessert") {
						sessionRes[i].dessert.push(idmenus)
					}
				}


				
			}
		}
	}

	else {
		for (var i = sessionRes.length - 1; i >= 0; i--) {
			if (sessionRes[i].id == id) {


				for (var j = 0; j < sessionRes[i].resistance.length; j++) {
					if(sessionRes[i].resistance[j] == idmenus){
						let elementForDelete = sessionRes[i].resistance.indexOf(idmenus)
						sessionRes[i].resistance.splice(elementForDelete,1)

					}
				}

				for (var j = 0; j < sessionRes[i].entree.length; j++) {
					if(sessionRes[i].entree[j] == idmenus){
						let elementForDelete = sessionRes[i].entree.indexOf(idmenus)
						sessionRes[i].entree.splice(elementForDelete,1)
						// listMen = sessionRes[i].resistance

					}
				}

				for (var j = 0; j < sessionRes[i].dessert.length; j++) {
					if(sessionRes[i].dessert[j] == idmenus){
						let elementForDelete = sessionRes[i].dessert.indexOf(idmenus)
						sessionRes[i].dessert.splice(elementForDelete,1)
						// listMen = sessionRes[i].resistance

					}
				}
			}
		}
	}
	sessionStorage.setItem("resOrders",JSON.stringify(sessionRes))
	listMen = sessionRes

// Ajout des element dans le dom
htmlResMenuOrder(id, listMen, all_menus)

}

// Ajout élément dans le panier
function htmlResMenuOrder(id, listMen, all_menus){
	let entreeList = document.getElementById("entree_personne"+id)
	let resistanceList = document.getElementById("resistance_personne"+id)
	let dessertList = document.getElementById("dessert_personne"+id)


	let liEntList = "<i>Entrées</i>"
	let liResList = "<i>Résistances</i>"
	let liDesList = "<i>Desserts</i>"

	let pers_resistance = []
	let pers_entree = []
	let pers_dessert = []

	for (var i = listMen.length - 1; i >= 0; i--) {
		if (listMen[i].id == id) {
			pers_resistance = listMen[i].resistance
			pers_entree = listMen[i].entree
			pers_dessert = listMen[i].dessert
		}
	}

	for (var i = 0; i < pers_entree.length; i++) {

		for (var j = 0; j < all_menus.length; j++) {
			if (pers_entree[i] == all_menus[j][5]){
				liEntList += "<li>"+all_menus[j][1]+"</li>"
				entreeList.innerHTML = liEntList
			}
		}
	}

	for (var i = 0; i < pers_dessert.length; i++) {

		for (var j = 0; j < all_menus.length; j++) {
			if (pers_dessert[i] == all_menus[j][5]){
				liDesList += "<li>"+all_menus[j][1]+"</li>"
				dessertList.innerHTML = liDesList
			}
		}
	}

	for (var i = 0; i < pers_resistance.length; i++) {

		for (var j = 0; j < all_menus.length; j++) {
			if (pers_resistance[i] == all_menus[j][5]){
				liResList += "<li>"+all_menus[j][1]+"</li>"
				resistanceList.innerHTML = liResList
			}
		}
	}
	if (liEntList == "<i>Entrées</i>") {
		entreeList.innerHTML = ""
	}
	if (liResList == "<i>Résistances</i>") {
		resistanceList.innerHTML = ""

	}
	if (liDesList == "<i>Desserts</i>") {
		dessertList.innerHTML = ""

	}

	priceTotalForOnePerson(id,all_menus,listMen)
	totalPriceForAllPerson()
}


// Calcul des prix
function priceTotalForOnePerson(id,all_menus,listMen){
	let priceInDom = document.getElementById("price_personne"+id)
	let total_price = document.getElementById("total_price")

	let price = 0
	let arrayPrice = []
	let pers_resistance = []
	let pers_entree = []
	let pers_dessert = []

	for (var i = listMen.length - 1; i >= 0; i--) {
		if (listMen[i].id == id) {
			pers_resistance = listMen[i].resistance
			pers_entree = listMen[i].entree
			pers_dessert = listMen[i].dessert
		}
	}


	for (var i = 0; i < pers_entree.length; i++) {

		for (var j = 0; j < all_menus.length; j++) {
			if (pers_entree[i] == all_menus[j][5]){
				price += all_menus[j][3]
			}
		}
	}

	for (var i = 0; i < pers_resistance.length; i++) {

		for (var j = 0; j < all_menus.length; j++) {
			if (pers_resistance[i] == all_menus[j][5]){
				price += all_menus[j][3]
			}
		}
	}

	for (var i = 0; i < pers_dessert.length; i++) {

		for (var j = 0; j < all_menus.length; j++) {
			if (pers_dessert[i] == all_menus[j][5]){
				price += all_menus[j][3]
			}
		}
	}
	priceInDom.textContent = price+" Ar"
	priceInDom.dataset.price = price

	let classPrix = document.querySelectorAll('.class_for_total_price')

	classPrix.forEach(prix => {
		arrayPrice.push(parseInt(prix.dataset.price))
	})

	sessionStorage.setItem("arrayForEachPrice",JSON.stringify(arrayPrice))

}

function totalPriceForAllPerson(){

	let price_for_all_person = 0
	let totalPrice = JSON.parse(sessionStorage.getItem("arrayForEachPrice"))
	

	for (var i = 0; i < totalPrice.length; i++) {
		price_for_all_person += parseInt(totalPrice[i])
	}

	return total_price.textContent = price_for_all_person+" Ar"
}
/*==========================================================================*/
// remettre les elements si un user a actualise
function ifClientActualisePage(){
	let dataMenus = JSON.parse(document.getElementById('form-data').dataset.menus)
	let idResto = JSON.parse(document.getElementById('form-data').dataset.resto)
	let idRestoInSession = JSON.parse(sessionStorage.getItem("resto"))
	let MenuChecked = JSON.parse(sessionStorage.getItem("resOrders"))
	let nbrPerson = JSON.parse(sessionStorage.getItem("nbrePerson"))

	let nbr = document.getElementById('nbr_person')
	if (idResto == idRestoInSession) {
		if (0 < MenuChecked.length) {

			for (var i = 0; i < MenuChecked.length ; i++) {
				nbr.dataset.person = nbrPerson 
				nbr.textContent = nbrPerson
				actualiseDomMenu(MenuChecked[i].id, MenuChecked[i])
				htmlResMenuOrder(MenuChecked[i].id, MenuChecked, dataMenus)
			}
		}
	}

	else {
		initSession()
	}

}


// DELETION


function  deleteNumber() {
	let nbr = document.getElementById('nbr_person')
	let nbrPerson = JSON.parse(sessionStorage.getItem("nbrePerson"))
	let menuInSession = JSON.parse(sessionStorage.getItem("resOrders"))
	let all_menus = JSON.parse(document.getElementById('form-data').dataset.menus)
	let personadeleters = document.querySelectorAll('.personne_'+nbrPerson)
	let totalPrice = JSON.parse(sessionStorage.getItem("arrayForEachPrice"))


	personadeleters.forEach(personadeleter => {
		personadeleter.parentNode.removeChild(personadeleter);
	})

	if (nbrPerson > 0) {
		nbrPerson -= 1
		menuInSession.pop()
		totalPrice.pop()
		nbr.dataset.person = nbrPerson 
		nbr.textContent = nbrPerson
		sessionStorage.setItem("nbrePerson",JSON.stringify(nbrPerson))
		sessionStorage.setItem("resOrders",JSON.stringify(menuInSession))
		sessionStorage.setItem("arrayForEachPrice", JSON.stringify(totalPrice))


	}

		totalPriceForAllPerson()
		deleteMenInOrder()

}

function deleteMenInOrder(){
	let a = document.getElementsByClassName("res-order")
	a[a.length-1].remove()

}

