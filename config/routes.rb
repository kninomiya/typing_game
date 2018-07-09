Rails.application.routes.draw do
  devise_for :users, :controllers => {
      :registrations => "registrations"
  }
  resources :users, only: [:show]
  resources :score
  resources :scores
  get 'users/show'
  get 'users/new'
  get 'users/highscore'

  get 'game/home'
  get 'game/score'
  get 'game/new'

  get 'static_pages/home'
  get 'static_pages/score'
  get 'static_pages/new'

  root 'static_pages#home'
end
