Rails.application.routes.draw do
  resources :cards, :only => [:index, :create]
  resources :players, :only => [:index, :show, :create, :destroy]
  resources :games, :only => [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
