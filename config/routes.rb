Rails.application.routes.draw do

  get 'orders/reservation/:idResto', to: "orders#index", as:"reservation"
    get '/addperson', to: "orders#addperson", as:"addperson"

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
