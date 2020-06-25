class OrdersController < ApplicationController

	def index
		@resto = Resto.find(params[:idResto])
		@menus = @resto.menus
		@datamenus = []
		@menus.each do |menu|
			@datamenus.push([menu.category,menu.name,menu.description,menu.price,menu.duration,menu.id]) 
		end
		puts @resto.id
	end

	def addperson


	end
end
