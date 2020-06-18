# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Resto.destroy_all
Menu.destroy_all
# Resto
Resto.create(name:"COLBERT", description:"
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. ", adress:"Ambohidahy Tunel-Antananarivo 101", star:4)
puts "Colbert"
Resto.create(name:"CARLTON", description:"
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. ", adress:"Anosy-Antananarivo 101", star:4)
puts "Carlton"
Resto.create(name:"LOUVRE", description:"
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. ", adress:"Antaninarenina Antananarivo 101", star:4)
puts "LOUVRE"

# Menu
Menu.create(category:"Résistance", name:"Poulet routi", description:"azerrt yui op qsd fghj klm xcv bn", price:5000, duration:60)
Menu.create(category:"Entrée", name:"Oeuf sur plat", description:"adsgdhsg ghsd hdg s hgsh dsh hgs s sddsds", price:3000, duration:30)
Menu.create(category:"Dessert", name:"Glace parfumé", description:"gdhsg jhjd jhjh sddss dsdd", price:3000, duration:45)
# MenuResto
MenuResto.create(menu_id:1, resto_id:1)
MenuResto.create(menu_id:2, resto_id:1)
MenuResto.create(menu_id:3, resto_id:1)

MenuResto.create(menu_id:1, resto_id:2)
MenuResto.create(menu_id:2, resto_id:2)



MenuResto.create(menu_id:2, resto_id:3)
MenuResto.create(menu_id:3, resto_id:3)