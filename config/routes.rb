Rails.application.routes.draw do
  devise_for :users, :controllers => {
      :registrations => "registrations"
  }
  resources :users, only: [:show]
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
  get 'static_pages/index'

  get 'image_acquisition/index'

  root 'static_pages#home'
end
