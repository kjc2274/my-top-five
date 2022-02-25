Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  resources :categories do
    resources :lists
  end
  resources :users

  # get lists by user
  get 'users/:user_id/lists', to: 'lists#get_user_lists' 

  # authentication
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
end
