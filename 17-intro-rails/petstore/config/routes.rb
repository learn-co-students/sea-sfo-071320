Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # create a get route for an index of pets
  # resources :pets, except: [:index]

  get '/pets', to: 'pets#index'
end
