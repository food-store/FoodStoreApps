class OrdersController < ApplicationController

	def index
		@resto = Resto.find(params[:idResto])
		@menus = @resto.menus
		@resistances = @menus.where(category:"Résistance")
		@entrees = @menus.where(category:"Entrée")
		@desserts = @menus.where(category:"Dessert")
	end

	def addperson


	end
end
