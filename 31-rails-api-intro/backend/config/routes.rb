Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :animals
      resources :species
    end
  end
end

# localhost:3000/api/v1/animals
