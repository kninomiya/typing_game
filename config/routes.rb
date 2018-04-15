Rails.application.routes.draw do
  get 'game/index'

  get 'static_pages/home'
  get 'static_pages/score'
  get 'static_pages/authentication'
end
