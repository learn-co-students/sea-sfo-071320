Rails.application.routes.draw do
  resources :players
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/game/:slug', to: 'games#show'

  resources :games

  # post '/search', to: 'games#search'
  # delete '/games/:id', to: 'games#destroy'
end
