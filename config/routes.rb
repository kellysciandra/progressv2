Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :languages
      resources :tasks
      resources :users
    end
  end

end
