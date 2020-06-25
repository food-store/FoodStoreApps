# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Resto.destroy_all
Menu.destroy_all
MenuResto.destroy_all
# Resto


require 'faker'

restaurant1 =Resto.create( name: "Arirang Madagasar",
	adress:"Rue Ramanantsoa A 50 m à droite du Manson (en regardant celui-ci) Tana - Antananarivo Madagascar",
	description:"Petit resto de spécialités coréennes (barbecue qu'on peut faire soi-même à table sur un te pan ou plaque chauffé). A tout l'air d'un boui-boui, mais la cuisine est de bien meilleure qualité ! Toutefois, tout n'est pas du même niveau, et les saveurs sont assez épicées. Essayez les Mandoo (raviolis farcis aux brèdes et à la viande), les Kimpab (sushis), les Japchae (nouilles de patates douces sautées), le Bulgogi gui (lamelles de zébu marinées) ou encore le Hemul dupbab (riz à la sauce fruits de mer). On sent un peu le graillon à la fin, mais c'est très bon !",
	star: 5)

puts "Arirang"


	restaurant2 =Resto.create( name:"Le Carnivore - Restaurant Bar Lounge",
		adress: " 66 Rue Ratsimilaho Ambatonakanga, Lalana Ranavalona III, Antananarivo 101",
		description:"Reprenant un concept bien établi au Brésil notamment (churrasqueira) ou à Nairobi au Kenya, ce resto propose de la viande à volonté : porc caramélisé ananas, ribs, côte d'agneau, poularde, gésier de poulet, du très bon zébu sous toutes ses formes, crocodile, sanglier, serpent... Sympa : on vous donne les drapeaux des nationalités présentes à votre table, que vous devez  coucher  quand vous n'avez plus faim. L'ensemble est correct, très branché, le service un peu dépassé par moments. A essayer pour le concept et si vous êtes carnivore avant tout ! Steeve propose aussi des véhicules en location." ,
		star: 4)

puts "Carnivore"

		restaurant3 =Resto.create( name:"Carlton Madagascar",
			adress: "Rue Pierre-Stibbe Anosy Tana - Antananarivo Madagascar",
			description:"Ce grand immeuble campé en surplomb du lac Anosy fut la première tour  de Tana, en 1970. C'est toujours l'un des bâtiments les plus imposants de la capitale et l'hôtel le plus luxueux de la ville, rare émanence d'une chaîne implantée partout dans le monde - soit la garantie de prestations 5* aux standards internationaux. Doté de 171 chambres et suites bien équipées (salle de bain de luxe, TV câblée, téléphone, coffre-fort, minibar, room service 24h/24...), il est une référence pour les hommes d'affaires et pour voyageurs qui ne transigent pas sur un certain niveau de service, d'élégance et de qualité : piscine de 25 mètres à ciel ouvert rénovée récemment, court de tennis en terre battue, salle de remise en forme, banque et guichet automatique, business center, salles de conférence, agence de voyages et de location de voitures etc., et une agréable galerie marchande où acquérir, entre autres, des gousses de vanille de grande qualité et du rhum Dzama. On apprécie le restaurant-café Ile Rouge et sa terrasse, les cocktails et sushis du Bistrot, les pâtisseries de l'Eclair, les salades et grillades servies au grand air sous les paillotes décontractées de l'Oasis. En soirée, place à l'ambiance cosy du casino ou l'atmosphère endiablée du Club Kudeta - petit frère du resto-bar éponyme de la vieille ville décliné ici en mode latino-urbain." ,
			star: 5
			)
puts "Carlton"

# Menu
Menu.create(category:"Résistance", name:"Poulet routi", description:"azerrt yui op qsd fghj klm xcv bn", price:5000, duration:60)
Menu.create(category:"Entrée", name:"Oeuf sur plat", description:"adsgdhsg ghsd hdg s hgsh dsh hgs s sddsds", price:3000, duration:30)
Menu.create(category:"Dessert", name:"Glace parfumé", description:"gdhsg jhjd jhjh sddss dsdd", price:3000, duration:45)



10.times do
food = Menu.create(
category:"Résistance",
	name:Faker::Food.dish,
	description:Faker::Food.description,
	duration:rand(10..180),
	price:Faker::Commerce.price
	)
end

10.times do
food = Menu.create(
category:"Entrée",
	name:Faker::Food.dish,
	description:Faker::Food.description,
	duration:rand(10..180),
	price:Faker::Commerce.price
	)
end

10.times do
food = Menu.create(
category:"Dessert",
	name:Faker::Food.dish,
	description:Faker::Food.description,
	duration:rand(10..180),
	price:Faker::Commerce.price
	)
end

puts "All Menus"

# MenuResto
MenuResto.create(menu_id:1, resto_id:1)
MenuResto.create(menu_id:2, resto_id:1)
MenuResto.create(menu_id:3, resto_id:1)

30.times do
join =MenuResto.create(
menu_id:rand(1..33), 
resto_id:rand(1..3)
	)
end

puts "Relation ok"
