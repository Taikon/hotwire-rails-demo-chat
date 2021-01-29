Rails.application.routes.draw do
  # Stimulus hello tutorial
  get "hellos/home"
  get "hellos/copy"

  # Hotwire example
  resources :rooms do
    resources :messages
  end

  root to: "rooms#index"
end
