Rails.application.routes.draw do

  # Page d'accueil
  root to:'restos#index'

  # restaurant
  resources :restos

  devise_for :clients, controllers: {
  	confirmations: 'confirmations' 
  }

  # menus
  get '/menus/:idResto', to: "menus#restomenus", as:"restaurants_menus"
  get '/menus/:id', to: "menus#show", as:"menu"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
