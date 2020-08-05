Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :dishes

  # post '/dishes', to: 'dishes#create'

  # get '/dishes/new', to: 'dishes#new'
  # get '/dishes/:id', to: 'dishes#show'
end
