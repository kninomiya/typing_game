Rails.application.routes.draw do
  devise_for :users, :controllers => {
      :registrations => "registrations"
  }
  resources :users, only: [:show]
  get 'users/show'
  get 'users/new'
  get 'users/highscore'
  get 'game/index'

  get 'static_pages/home'
  get 'static_pages/score'
  get 'static_pages/new'

  root 'static_pages#home'
end
