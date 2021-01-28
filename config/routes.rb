Rails.application.routes.draw do
  # Stimulus hello tutorial
  get "hellos/home"

  # Hotwire example
  resources :rooms do
    resources :messages
  end

  root to: "rooms#index"
end
