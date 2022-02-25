Rails.application.routes.draw do
  resources :categories do
    resources :lists
  end
  resources :users

  get 'users/:user_id/lists', to: 'lists#get_user_lists' 

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
