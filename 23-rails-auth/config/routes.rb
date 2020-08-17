Rails.application.routes.draw do
  resources :users, only: [:create, :index, :show]
  get '/signup', to: 'users#new', as: 'signup'
  get '/', to: 'sessions#new', as: 'home'
  post '/login', to: 'sessions#create', as: 'login'
  delete '/sessions', to: 'sessions#destroy'
end
