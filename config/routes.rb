Rails.application.routes.draw do
  
  resources :posts
  resources :locations
  resources :users
  
  post '/signup', to: 'users#create'
  post '/update', to: 'users#update'
  post '/delete', to: 'users#delete'
  get "/me", to: "users#show"
  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  post '/locations', to: 'locations#create'

  get '/weather', to: 'weather#userWeather'

end
