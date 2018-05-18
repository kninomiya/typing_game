Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:show]
  get 'users/show'
  get 'users/new'
  get 'game/index'

  get 'static_pages/home'
  get 'static_pages/score'
  get 'static_pages/new'

  root 'static_pages#home'
end
