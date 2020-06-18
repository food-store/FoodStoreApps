class MenusController < ApplicationController
	def index

	end
	
	def show
	end

	def restomenus
		@resto = Resto.find(params[:idResto])
		@menus = @resto.menus
		@resistances = @menus.where(category:"Résistance")
		@entrees = @menus.where(category:"Entrée")
		@desserts = @menus.where(category:"Dessert")
	end
end
