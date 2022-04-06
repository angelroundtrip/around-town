Rails.application.routes.draw do
  resources :users
  resources :comments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/hello', to: 'application#hello_world'
  post '/signup', to: 'users#create'
  post '/update', to: 'users#update'
  post '/delete', to: 'users#delete'
  get "/me", to: "users#show"
  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  
end
