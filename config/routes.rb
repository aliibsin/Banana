
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :edit] 
    resource :session, only: [:create, :destroy]

    resources :projects, only: [:create, :index, :show, :edit, :destroy] 
  end

  root to: "static_pages#root"
end
