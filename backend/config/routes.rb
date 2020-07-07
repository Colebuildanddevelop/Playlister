# Rails.application.routes.draw do
#   resources :categories
#   resources :songs
#   resources :likes
#   resources :playlists
#   resources :users
#   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
# end

Rails.application.routes.draw do
  # localhost:3000/api/v1/login
  namespace :api do
    namespace :v1 do
      resources :categories
      resources :songs
      resources :likes
      resources :playlists
      resources :users, only: [:create, :destroy]
      post '/login', to: 'auth#create'

    end
  end
end
