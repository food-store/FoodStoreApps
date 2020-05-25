Rails.application.routes.draw do

  # Page d'accueil
  root to:'restos#index'

  # restaurant
  resources :restos

  devise_for :clients, controllers: {
  	confirmations: 'confirmations' 
  }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
