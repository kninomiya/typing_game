Rails.application.routes.draw do
  devise_for :users
  get 'game/index'

  get 'static_pages/home'
  get 'static_pages/score'
  get 'static_pages/authentication'

  root to: "home#index"
end
