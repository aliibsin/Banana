
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] 
    resource :session, only: [:create, :destroy]

    resources :projects, only: [:create, :index, :show, :update, :destroy]
    resources :sections, only: [:create, :index, :update, :destroy]  
  end

  root to: "static_pages#root"
end
